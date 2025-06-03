import React from 'react';

interface ScoreTreeProps {
  score: number;
  maxScore: number;
}

const ScoreTree: React.FC<ScoreTreeProps> = ({ score, maxScore }) => {
  // Calculate growth percentage (limit to 100%)
  const growthPercentage = Math.min((score / maxScore) * 100, 100);
  
  // Define tree states based on growth
  const getTreeState = () => {
    if (growthPercentage < 20) return '無名小卒';
    if (growthPercentage < 40) return '小有名氣';
    if (growthPercentage < 60) return '樹大招風';
    if (growthPercentage < 80) return '人人喊打';
    return '天怒人怨';
  };

  // Determine height based on growth (between 50px and 200px)
  const treeHeight = 50 + (growthPercentage / 100) * 150;
  
  // Change colors based on growth
  const trunkColor = `rgb(139, 69, ${Math.floor(19 + (growthPercentage / 100) * 20)})`;
  const leafColor = `rgb(${Math.floor(34 + (100 - growthPercentage) / 100 * 100)}, 
                         ${Math.floor(139 + (growthPercentage / 100) * 50)}, 
                         ${Math.floor(34 + (100 - growthPercentage) / 100 * 30)})`;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-2 text-center">
        <span className="text-lg font-semibold">{getTreeState()}</span>
        <div className="text-sm text-gray-600">累積人民的怒氣值: {score}</div>
      </div>
      
      <div className="relative" style={{ height: `${treeHeight}px`, transition: 'height 0.5s ease-in-out' }}>
        {/* Tree trunk */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-sm"
          style={{ 
            width: '10px', 
            height: `${treeHeight * 0.7}px`, 
            backgroundColor: trunkColor,
            transition: 'height 0.5s ease-in-out, background-color 0.5s ease-in-out'
          }}
        ></div>
        
        {/* Tree leaves */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"
          style={{ 
            width: `${40 + (growthPercentage / 100) * 60}px`, 
            height: `${40 + (growthPercentage / 100) * 60}px`, 
            backgroundColor: leafColor,
            bottom: `${treeHeight * 0.4}px`,
            transition: 'width 0.5s ease-in-out, height 0.5s ease-in-out, background-color 0.5s ease-in-out, bottom 0.5s ease-in-out'
          }}
        ></div>
      </div>
      
      {/* Ground */}
      <div 
        className="w-full h-4 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-700 rounded-lg mt-2"
      ></div>
    </div>
  );
};

export default ScoreTree;