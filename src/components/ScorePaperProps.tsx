import React from 'react';
import { getImagePath } from '../utils/pathUtils';

interface ScorePaperProps {
  score: number;
  maxScore: number;
  level: number;
}

const ScoreTree: React.FC<ScorePaperProps> = ({ score, maxScore, level }) => {

  return (
    <div className="flex flex-row p-4">
      <div className="mb-2">
        <div className="text-base text-gray-100 font-pixel font-semibold">累積的連署書</div>
        <div className="flex items-center text-lg text-gray-100 font-pixel font-semibold">
          <img src={getImagePath(`/images/question/staement_lv${level}.png`)} alt="連署書數量" className="w-12 h-auto mr-2" />
          <span className="text-sm text-gray-100 font-pixel font-semibold">x {score}</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreTree;