import React from 'react';

interface ScorePaperProps {
  score: number;
  maxScore: number;
}

const ScoreTree: React.FC<ScorePaperProps> = ({ score, maxScore }) => {
  // Calculate growth percentage (limit to 100%)
  // const growthPercentage = Math.min((score / maxScore) * 100, 100);
  
  // Define tree states based on growth
  // const getTreeState = () => {
  //   if (growthPercentage < 20) return '無名小卒';
  //   if (growthPercentage < 40) return '小有名氣';
  //   if (growthPercentage < 60) return '樹大招風';
  //   if (growthPercentage < 80) return '人人喊打';
  //   return '天怒人怨';
  // };

  return (
    <div className="flex flex-row p-4">
      <div className="mb-2">
        <div className="text-sm text-gray-100 font-pixel font-semibold">累積人民的怒氣值</div>
        <div className="flex items-center text-sm text-gray-100 font-pixel font-semibold">
          <img src="/baba_test/images/question/staement.png" alt="連署書數量" className="w-10 h-auto mr-2" />
          <span className="text-sm text-gray-100 font-pixel font-semibold">x {score}</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreTree;