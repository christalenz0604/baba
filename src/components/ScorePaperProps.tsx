import React from 'react';

interface ScorePaperProps {
  score: number;
  maxScore: number;
  level: number;
}

const ScoreTree: React.FC<ScorePaperProps> = ({ score, maxScore, level }) => {

  return (
    <div className="flex flex-row p-4">
      <div className="mb-2">
        <div className="text-sm text-gray-100 font-pixel font-semibold">累積人民的怒氣值</div>
        <div className="flex items-center text-sm text-gray-100 font-pixel font-semibold">
          <img src={`/images/question/staement_lv${level}.png`} alt="連署書數量" className="w-10 h-auto mr-2" />
          <span className="text-sm text-gray-100 font-pixel font-semibold">x {score}</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreTree;