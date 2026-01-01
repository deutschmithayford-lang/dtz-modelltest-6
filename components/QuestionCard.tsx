import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Question } from '../types';

interface QuestionCardProps {
  data: Question;
  onAnswer?: (isCorrect: boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ data, onAnswer }) => {
  const [selected, setSelected] = useState<number | string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (val: number | string) => {
    if (showFeedback) return; // Prevent changing after answer
    setSelected(val);
    setShowFeedback(true);
    
    const correct = val === data.correct;
    if (onAnswer) {
      onAnswer(correct);
    }
  };

  const isCorrect = selected === data.correct;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-4 overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <span className="font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-full text-sm">
          {data.title}
        </span>
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-lg text-gray-800 mb-4">{data.question}</h4>
        
        <div className="space-y-2">
          {data.type === 'rf' ? (
            <div className="flex gap-3">
              {['richtig', 'falsch'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  disabled={showFeedback}
                  className={`flex-1 py-3 px-4 rounded border font-medium transition-all ${
                    showFeedback
                      ? opt === data.correct
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : opt === selected
                        ? 'bg-red-100 border-red-500 text-red-800'
                        : 'bg-gray-50 text-gray-400'
                      : 'border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </button>
              ))}
            </div>
          ) : (
            data.options?.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={showFeedback}
                className={`w-full text-left py-3 px-4 rounded border transition-all flex items-center ${
                  showFeedback
                    ? idx === data.correct
                      ? 'bg-green-100 border-green-500 text-green-800'
                      : idx === selected
                      ? 'bg-red-100 border-red-500 text-red-800'
                      : 'bg-gray-50 text-gray-400'
                    : 'border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                }`}
              >
                <span className="w-6 h-6 rounded-full border border-current mr-3 flex items-center justify-center text-xs font-bold opacity-70">
                  {String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </button>
            ))
          )}
        </div>

        {showFeedback && (
          <div className={`mt-4 p-4 rounded-md border-l-4 text-sm animate-in fade-in slide-in-from-top-2 ${isCorrect ? 'bg-green-50 border-green-500 text-green-800' : 'bg-red-50 border-red-500 text-red-800'}`}>
            <div className="flex items-start gap-2">
              {isCorrect ? <CheckCircle size={18} className="mt-0.5" /> : <XCircle size={18} className="mt-0.5" />}
              <div>
                <strong className="block mb-1">{isCorrect ? 'Richtig!' : 'Leider falsch.'}</strong>
                {data.explanation}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;