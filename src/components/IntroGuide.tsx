import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import useTypewriter from '../context/Typewriter';
import { AnimatePresence, motion } from 'framer-motion';

interface IntroGuideProps {
  onContinue: () => void;
}

const IntroGuide: React.FC<IntroGuideProps> = ({ onContinue }) => {
  const { gameState } = useGame();
  const character = gameState.selectedCharacter;
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  
  if (!character) return null;
  
  const text = [
    `${character.name} 歡迎進入國會派對！`,
    "接下來你將面對各種關於國會生涯的重要抉擇。",
    `請試著用 ${character.name} 的角度思考，在國會活到最後一刻！`
  ];
  
  const introText = useTypewriter(
    text,
    75,
    1000,
    false, // 不 loop
    () => setDone(true) // 動畫完成後呼叫
  );

  const handleSkip = () => {
    setSkipAnimation(true);
    setDone(true);
    setFadeOut(true);
  };

  // 自動觸發轉場動畫再進入下一頁
  useEffect(() => {
    if (done && !skipAnimation) {
      setTimeout(() => setFadeOut(true), 1000);
    }
  }, [done, skipAnimation]);

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        onContinue();
      }, 800);
    }
  }, [fadeOut, onContinue]);
  
  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          className="flex flex-col items-center justify-center h-screen bg-[#f0f0f0] px-4 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          <h1 className="text-3xl font-bold mb-4">遊戲說明</h1>
          <p className="text-lg mb-6 text-center max-w-xl whitespace-pre-wrap leading-relaxed font-pixel">
            {skipAnimation ? text.join('\n') : introText}
            {!skipAnimation && <span className="animate-pulse">▍</span>}
          </p>
          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-12 px-4 py-2 bg-gray-600 text-white hover:bg-gray-700 transition-colors text-sm font-pixel"
          >
            跳過
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroGuide;