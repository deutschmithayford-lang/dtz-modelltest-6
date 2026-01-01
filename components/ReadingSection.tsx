import React from 'react';
import { ReadingPart } from '../types';
import QuestionCard from './QuestionCard';

interface ReadingSectionProps {
  data: ReadingPart[];
  onAnswer: (questionId: number, isCorrect: boolean) => void;
}

const ReadingSection: React.FC<ReadingSectionProps> = ({ data, onAnswer }) => {
  return (
    <div className="space-y-12">
      {data.map((part) => (
        <div key={part.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 bg-green-50 border-b border-green-100">
            <h3 className="font-bold text-xl text-green-900">{part.title}</h3>
            <p className="text-green-800 text-sm mt-1">{part.description}</p>
          </div>

          <div className="p-6">
            {/* Render Reading Material */}
            {part.text && (
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 font-serif leading-relaxed text-gray-800 overflow-x-auto">
                <div dangerouslySetInnerHTML={{ __html: part.text }} />
              </div>
            )}
            
            {part.items && (
              <div className="mb-8 grid gap-4 grid-cols-1 md:grid-cols-2">
                 {part.items.map(item => (
                   <div key={item.id} className="p-3 bg-white border border-gray-200 rounded shadow-sm text-sm hover:bg-gray-50">
                     <strong className="text-green-700 block mb-1">Anzeige {item.id.toUpperCase()}</strong>
                     {item.text}
                   </div>
                 ))}
                 <div className="p-3 bg-gray-100 border border-gray-200 rounded shadow-sm text-sm text-center flex items-center justify-center font-bold text-gray-500">
                    Option X: Keine Anzeige passt
                 </div>
              </div>
            )}

            {/* Questions */}
            <div className="space-y-4">
               {part.questions.map((q) => (
                 <QuestionCard 
                   key={q.id} 
                   data={q} 
                   onAnswer={(isCorrect) => onAnswer(q.id, isCorrect)}
                 />
               ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadingSection;