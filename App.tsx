import React, { useState } from 'react';
import Navigation from './components/Navigation';
import QuestionCard from './components/QuestionCard';
import WritingSection from './components/WritingSection';
import ReadingSection from './components/ReadingSection';
import SpeakingSection from './components/SpeakingSection';
import ScoreSummary from './components/ScoreSummary';
import AudioPlayer from './components/AudioPlayer';
import { LISTENING_DATA, WRITING_DATA, SPEAKING_DATA, READING_DATA } from './constants';
import { Play, FileText, ChevronDown, ChevronUp, Trophy } from 'lucide-react';

function App() {
  const [section, setSection] = useState('home');
  const [transcriptOpen, setTranscriptOpen] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const toggleTranscript = (id: number) => {
    setTranscriptOpen(transcriptOpen === id ? null : id);
  };

  const handleAnswer = (questionId: number, isCorrect: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: isCorrect
    }));
  };

  const currentScore = Object.values(answers).filter(Boolean).length;
  // Total questions = 20 (Listening) + 25 (Reading) = 45
  const maxScore = 45;

  const renderContent = () => {
    switch (section) {
      case 'home':
        return (
          <div className="max-w-4xl mx-auto pt-10 px-4 text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
              Deutsch mit Hayford <span className="text-amber-500">Modelltest 6</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Trainieren Sie für den Deutsch-Test für Zuwanderer (DTZ). 
              Alle Aufgabenbereiche inklusive Audio-Transkripten und ausführlichen Musterlösungen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'hoeren', title: 'Hören', desc: '4 Teile, 20 Aufgaben', color: 'border-blue-600', icon: '🎧' },
                { id: 'lesen', title: 'Lesen', desc: '5 Teile, 25 Aufgaben', color: 'border-green-600', icon: '📖' },
                { id: 'schreiben', title: 'Schreiben', desc: 'Brief schreiben (A oder B)', color: 'border-amber-500', icon: '✍️' },
                { id: 'sprechen', title: 'Sprechen', desc: 'Vorstellen & Bildbeschreibung', color: 'border-purple-600', icon: '🗣️' }
              ].map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSection(item.id)}
                  className={`bg-white p-8 rounded-xl shadow-md border-l-8 ${item.color} cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group text-left`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <ScoreSummary score={currentScore} maxScore={maxScore} />
          </div>
        );

      case 'hoeren':
        return (
          <div className="max-w-4xl mx-auto px-4 py-8 fade-in">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b pb-4">Hören</h2>
            <div className="space-y-12">
              {LISTENING_DATA.map((part) => (
                <div key={part.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6 bg-gray-50 border-b border-gray-200">
                    <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                      <div>
                        <h3 className="font-bold text-xl text-blue-900">{part.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{part.description}</p>
                      </div>
                      <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-end">
                         <AudioPlayer 
                           className="w-full md:w-64" 
                           src={part.audioSrc}
                         />
                      </div>
                    </div>
                    
                    {/* Transcript Toggle */}
                    <button 
                      onClick={() => toggleTranscript(part.id)}
                      className="mt-4 text-sm font-medium text-gray-500 flex items-center gap-1 hover:text-blue-600 transition-colors"
                    >
                      {transcriptOpen === part.id ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                      {transcriptOpen === part.id ? 'Transkript verbergen' : 'Transkript anzeigen'}
                    </button>
                  </div>

                  {transcriptOpen === part.id && (
                    <div className="bg-amber-50 p-6 border-b border-gray-200 text-gray-800 text-sm leading-relaxed font-serif animate-in slide-in-from-top-2">
                       <div dangerouslySetInnerHTML={{ __html: part.transcript }} />
                    </div>
                  )}

                  <div className="p-6">
                    {part.statements && (
                        <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <strong className="block mb-2 text-blue-900">Aussagen:</strong>
                            <ul className="grid gap-2">
                                {part.statements.map(s => (
                                    <li key={s.id} className="text-sm"><span className="font-bold bg-white px-2 py-0.5 rounded border mr-2">{s.id}</span> {s.text}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {part.questions.map((q) => (
                      <QuestionCard 
                        key={q.id} 
                        data={q} 
                        onAnswer={(isCorrect) => handleAnswer(q.id, isCorrect)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'lesen':
        return (
          <div className="max-w-4xl mx-auto px-4 py-8 fade-in">
            <h2 className="text-3xl font-bold text-green-800 mb-8 border-b pb-4">Lesen</h2>
            <ReadingSection data={READING_DATA} onAnswer={handleAnswer} />
          </div>
        );

      case 'schreiben':
        return (
          <div className="max-w-6xl mx-auto px-4 py-8 fade-in">
            <h2 className="text-3xl font-bold text-amber-600 mb-8 border-b pb-4">Schreiben</h2>
            
            <div className="mb-8 bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-4 items-start">
               <div className="bg-white p-2 rounded-full text-blue-600 shadow-sm"><FileText size={20}/></div>
               <div>
                 <strong className="block text-blue-900 mb-1">Hinweis zur Bewertung</strong>
                 <p className="text-sm text-blue-800">
                   Wählen Sie Aufgabe A oder B. Schreiben Sie ca. 100 Wörter. 
                   Die KI-Bewertung prüft streng nach DTZ-Kriterien (Inhalt, Kommunikative Gestaltung, Wortschatz, Korrektheit).
                   Beim Verfehlen des Thema oder bei weniger als 20 Wörtern gibt es 0 Punkte.
                 </p>
               </div>
            </div>

            <div className="space-y-12">
               {WRITING_DATA.map(task => (
                   <div key={task.id} className="bg-gray-50 p-1 rounded-xl">
                       <WritingSection task={task} />
                   </div>
               ))}
            </div>
          </div>
        );

      case 'sprechen':
        return (
            <div className="max-w-5xl mx-auto px-4 py-8 fade-in">
              <h2 className="text-3xl font-bold text-purple-700 mb-8 border-b pb-4">Sprechen</h2>
              <div className="mb-8 text-gray-600">
                Nutzen Sie die "Redemittel" für Hilfe und vergleichen Sie Ihre Antwort mit der "Musterlösung".
              </div>
              <SpeakingSection parts={SPEAKING_DATA} />
            </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
      <Navigation currentSection={section} onNavigate={setSection} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <footer className="bg-gray-800 text-gray-400 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">Deutsch mit Hayford © 2023</p>
          <p className="text-xs">Dies ist eine Übungsanwendung für den DTZ. Modelltest 6.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;