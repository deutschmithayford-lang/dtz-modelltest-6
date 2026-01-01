import React, { useState } from 'react';
import { WritingTask } from '../types';
import { BookOpen, Loader2, Lock } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

interface WritingSectionProps {
  task: WritingTask;
}

const WritingSection: React.FC<WritingSectionProps> = ({ task }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ 
    scores: { content: number; communicative: number; vocabulary: number; correctness: number };
    total: number;
    level: string;
    feedback: string;
    topicCheck: boolean;
    wordCount: number;
  } | null>(null);
  const [showSample, setShowSample] = useState(false);

  const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;

  const analyzeText = async () => {
    if (!process.env.API_KEY) {
      alert("API Key missing. Please set process.env.API_KEY.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `
        Bewerte den folgenden Text für den Deutsch-Test für Zuwanderer (DTZ) Niveau B1 (Modelltest 6).
        Aufgabe: ${task.title} - ${task.scenario}
        Punkte: ${task.bulletPoints.join(', ')}

        Kriterien (streng nach PDF):
        1. Themen-Check: Wurde das Thema verfehlt? (Ja/Nein). Wenn Ja -> 0 Punkte überall.
        2. Wortanzahl: Ist der Text kürzer als 20 Wörter? Wenn Ja -> 0 Punkte überall.
        3. Inhaltliche Angemessenheit (0-5 Pkt): Wurden alle vier Leitpunkte bearbeitet? 
           - 5 Pkt: Alle 4 präzise.
           - 4 Pkt: Alle 4 bearbeitet oder 3 angemessen.
           - 3 Pkt: 3 bearbeitet oder 2 angemessen.
           - 1 Pkt: Nur 1 bearbeitet.
           - 0 Pkt: Thema verfehlt.
        4. Kommunikative Gestaltung (0-5 Pkt): Adressatenbezug, Aufbau, Verknüpfungen (und, aber, weil, deshalb).
        5. Wortschatz (0-5 Pkt): B1 Niveau, Varianz, Umschreibungen möglich?
        6. Korrektheit (0-5 Pkt): Grammatik, Syntax, Morphologie.

        Gesamt: Max 20.
        Notenschlüssel: 15-20 = B1 erreicht; 7-14 = A2 erreicht; 0-6 = unter A2.
        
        Text des Lerners: "${text}"
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              topicCheck: { type: Type.BOOLEAN, description: "True if topic is correctly addressed, False if missed" },
              wordCount: { type: Type.INTEGER },
              scores: {
                type: Type.OBJECT,
                properties: {
                  content: { type: Type.INTEGER },
                  communicative: { type: Type.INTEGER },
                  vocabulary: { type: Type.INTEGER },
                  correctness: { type: Type.INTEGER },
                }
              },
              total: { type: Type.INTEGER },
              level: { type: Type.STRING, enum: ["B1 erreicht", "A2 erreicht", "unter A2"] },
              feedback: { type: Type.STRING, description: "Detailed feedback in German explaning the score." },
            },
            required: ["topicCheck", "wordCount", "scores", "total", "level", "feedback"]
          }
        }
      });

      const jsonStr = response.text;
      if (jsonStr) {
        const data = JSON.parse(jsonStr);
        setResult(data);
      }

    } catch (error) {
      console.error("Error grading text:", error);
      alert("Fehler bei der Bewertung. Bitte versuchen Sie es später erneut.");
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 15) return 'text-green-600';
    if (score >= 7) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      {/* Task Description */}
      <div className="flex flex-col">
        <div className={`p-5 rounded-t-lg border-l-4 ${task.id === 'A' ? 'bg-blue-50 border-blue-600' : 'bg-amber-50 border-amber-500'}`}>
          <h3 className="font-bold text-xl mb-2 text-gray-800">{task.title}</h3>
          <p className="mb-4 text-gray-700">{task.scenario}</p>
          <div className="bg-white bg-opacity-60 p-3 rounded">
            <strong className="block mb-2 text-sm uppercase tracking-wide text-gray-500">Schreiben Sie etwas zu folgenden Punkten:</strong>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {task.bulletPoints.map((bp, i) => <li key={i}>{bp}</li>)}
            </ul>
          </div>
        </div>
        
        {/* Sample Solution Toggle - Locked until grading */}
        <div className="mt-4">
           {!result ? (
             <div className="flex items-center gap-2 text-sm font-medium text-gray-400 cursor-not-allowed bg-gray-50 p-4 rounded border border-gray-200" title="Erst Text bewerten lassen">
               <Lock size={16} />
               <span>Musterlösung (erst nach Bewertung verfügbar)</span>
             </div>
           ) : (
             <div className="animate-in fade-in">
                <button 
                  onClick={() => setShowSample(!showSample)}
                  className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <BookOpen size={16} />
                  {showSample ? 'Musterlösung ausblenden' : 'Musterlösung anzeigen'}
                </button>
                {showSample && (
                  <div className="mt-2 p-4 bg-gray-100 rounded-md border border-gray-300 text-sm whitespace-pre-wrap font-serif text-gray-800 leading-relaxed shadow-inner">
                    <div className="mb-2 font-bold text-gray-500 uppercase text-xs">Musterlösung B1 (>100 Wörter)</div>
                    {task.sampleSolution}
                  </div>
                )}
             </div>
           )}
        </div>
      </div>

      {/* Input Area */}
      <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <textarea
          className="w-full flex-grow p-4 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none font-sans text-base leading-relaxed"
          placeholder={`Sehr geehrte(r)...`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ minHeight: '300px' }}
          disabled={loading}
        />
        <div className="flex justify-between items-center mt-3">
          <span className={`text-xs px-2 py-1 rounded ${wordCount < 20 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-500'}`}>
            {wordCount} Wörter {wordCount < 20 && '(Zu wenig!)'}
          </span>
          <button
            onClick={analyzeText}
            disabled={loading || text.length === 0}
            className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors shadow-sm font-medium flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : 'Text bewerten'}
          </button>
        </div>
        
        {result && (
          <div className="mt-4 p-4 rounded-md bg-gray-50 border border-gray-200 text-sm animate-in slide-in-from-top-2">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <span className={`text-lg font-bold ${getScoreColor(result.total)}`}>
                Gesamt: {result.total} / 20 ({result.level})
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-gray-700">
               <div>Inhalt: <span className="font-semibold">{result.scores.content}/5</span></div>
               <div>Komm. Gestaltung: <span className="font-semibold">{result.scores.communicative}/5</span></div>
               <div>Wortschatz: <span className="font-semibold">{result.scores.vocabulary}/5</span></div>
               <div>Korrektheit: <span className="font-semibold">{result.scores.correctness}/5</span></div>
            </div>

            {!result.topicCheck && (
               <div className="mb-2 text-red-600 font-bold bg-red-50 p-2 rounded">Thema verfehlt! (0 Punkte)</div>
            )}
            {result.wordCount < 20 && (
               <div className="mb-2 text-red-600 font-bold bg-red-50 p-2 rounded">Weniger als 20 Wörter! (0 Punkte)</div>
            )}

            <div className="bg-white p-3 rounded border border-gray-200 text-gray-600 italic">
               "{result.feedback}"
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WritingSection;