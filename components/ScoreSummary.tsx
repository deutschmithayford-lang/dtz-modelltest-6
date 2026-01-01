import React from 'react';
import { Trophy } from 'lucide-react';

interface ScoreSummaryProps {
  score: number;
  maxScore: number;
}

const ScoreSummary: React.FC<ScoreSummaryProps> = ({ score, maxScore }) => {
   let level = "unter A2";
   let color = "text-red-600";
   
   if (score >= 33) { 
     level = "B1 erreicht"; 
     color = "text-green-600"; 
   } else if (score >= 20) { 
     level = "A2 erreicht"; 
     color = "text-yellow-600"; 
   }

   return (
     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-left max-w-2xl mx-auto mt-8">
       <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-800">
         <Trophy className="text-amber-500"/> Gesamtergebnis (Hören + Lesen)
       </h3>
       <div className="flex items-center justify-between mb-6">
         <div className="text-gray-600">Ihr aktuelles Ergebnis:</div>
         <div className="text-2xl font-bold text-blue-900">{score} / {maxScore}</div>
       </div>
       
       <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(score/maxScore)*100}%` }}></div>
          </div>
          <div className={`text-right mt-1 font-bold ${color}`}>{level}</div>
       </div>

       <div className="space-y-2 text-sm text-gray-700 bg-gray-50 p-4 rounded">
         <div className="flex justify-between border-b border-gray-200 pb-1">
            <span>33 - 45 Punkte</span>
            <span className="font-bold text-green-600">B1 erreicht</span>
         </div>
         <div className="flex justify-between border-b border-gray-200 pb-1">
            <span>20 - 32 Punkte</span>
            <span className="font-bold text-yellow-600">A2 erreicht</span>
         </div>
         <div className="flex justify-between">
            <span>0 - 19 Punkte</span>
            <span className="font-bold text-red-600">unter A2</span>
         </div>
       </div>
     </div>
   );
};

export default ScoreSummary;