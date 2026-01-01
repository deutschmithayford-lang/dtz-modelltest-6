import React, { useState } from 'react';
import { SpeakingPart } from '../types';
import { MessageCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

interface SpeakingSectionProps {
  parts: SpeakingPart[];
}

const SpeakingSection: React.FC<SpeakingSectionProps> = ({ parts }) => {
  const [openRedemittel, setOpenRedemittel] = useState<number | null>(null);
  const [openSolution, setOpenSolution] = useState<number | null>(null);

  const toggleRedemittel = (id: number) => setOpenRedemittel(openRedemittel === id ? null : id);
  const toggleSolution = (id: number) => setOpenSolution(openSolution === id ? null : id);

  return (
    <div className="space-y-12">
      {parts.map(part => (
        <div key={part.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="bg-purple-50 p-4 border-b border-purple-100 flex justify-between items-center">
             <h3 className="font-bold text-lg text-purple-900">{part.title}</h3>
          </div>
          
          <div className="p-6">
             <div className="mb-6 text-gray-700">
               <p className="mb-4 italic font-medium">{part.description}</p>
               {part.content}
             </div>

             {part.examinerQuestions && (
               <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                 <strong className="block text-blue-900 mb-2 flex items-center gap-2">
                   <HelpCircle size={16}/> Mögliche Prüferfragen:
                 </strong>
                 <ul className="list-disc pl-5 space-y-1 text-sm text-blue-800">
                   {part.examinerQuestions.map((q, i) => <li key={i}>{q}</li>)}
                 </ul>
               </div>
             )}

             <div className="grid md:grid-cols-2 gap-4 mt-6">
                {/* Redemittel Accordion */}
                <div>
                   <button 
                     onClick={() => toggleRedemittel(part.id)}
                     className="w-full flex items-center justify-between px-4 py-3 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-lg transition-colors font-medium"
                   >
                     <span className="flex items-center gap-2"><MessageCircle size={18}/> Redemittel anzeigen</span>
                     <span>{openRedemittel === part.id ? '−' : '+'}</span>
                   </button>
                   
                   {openRedemittel === part.id && part.redemittel && (
                     <div className="mt-2 p-4 border border-purple-100 rounded-lg bg-white animate-in slide-in-from-top-2">
                       {part.redemittel.map((group, idx) => (
                         <div key={idx} className="mb-3 last:mb-0">
                           <strong className="text-xs uppercase text-purple-500 font-bold block mb-1">{group.category}</strong>
                           <ul className="text-sm space-y-1 text-gray-700">
                             {group.phrases.map((phrase, pIdx) => (
                               <li key={pIdx} className="pl-2 border-l-2 border-purple-200">{phrase}</li>
                             ))}
                           </ul>
                         </div>
                       ))}
                     </div>
                   )}
                </div>

                {/* Sample Solution Accordion */}
                <div>
                   <button 
                     onClick={() => toggleSolution(part.id)}
                     className="w-full flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 text-green-900 rounded-lg transition-colors font-medium"
                   >
                     <span className="flex items-center gap-2"><CheckCircle2 size={18}/> Musterlösung anzeigen</span>
                     <span>{openSolution === part.id ? '−' : '+'}</span>
                   </button>
                   
                   {openSolution === part.id && part.sampleSolution && (
                     <div className="mt-2 p-4 border border-green-100 rounded-lg bg-white text-sm whitespace-pre-wrap text-gray-800 animate-in slide-in-from-top-2">
                       {part.sampleSolution}
                     </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakingSection;