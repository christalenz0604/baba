import React, { useEffect, useRef, useState } from 'react';
import { useGame } from '../context/GameContext';
import useTypewriter from '../context/Typewriter';
import { AnimatePresence, motion } from 'framer-motion';
import { getImagePath } from '../utils/pathUtils';

interface IntroGuideProps {
  onContinue: () => void;
}

const IntroGuide: React.FC<IntroGuideProps> = ({ onContinue }) => {
  const { gameState } = useGame();
  const character = gameState.selectedCharacter;
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageWrapperRef = useRef<HTMLDivElement>(null);

  if (!character) return null;

  const text = [
    `歡迎進入國會派對！`,
    `你將以 ${character.name} 的角色前進國會。`,
    "面對各種關於國會生涯的重要抉擇，",
    `請試著用 ${character.name} 的角度思考，`,
    "努力在國會活到最後一刻！"
  ];

  const introText = useTypewriter(text, 75, 1000, false, () => setDone(true));

  const handleSkip = () => {
    setSkipAnimation(true);
    setDone(true);
    setFadeOut(true);
  };

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
        <div className="h-[calc(var(--vh,1vh)_*100)] flex flex-col bg-[#90a5c2] overflow-hidden">
          <motion.div
            className="flex flex-col flex-grow relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-full flex items-center justify-center px-4 font-pixel text-white">
              <div className="relative w-full max-w-screen-md" ref={imageWrapperRef}>
                <img
                  src={getImagePath('/images/intro/intro_bg.webp')}
                  alt="intro_bg"
                  className="w-full h-auto object-contain pointer-events-none"
                  onLoad={() => setImageLoaded(true)}
                />

                {imageLoaded && (
                  <>
                    {/* .gif 放進圖片內部右下角 */}
                    <div className="absolute bottom-0 right-0 w-16 h-16">
                      <img
                        src={getImagePath('/images/intro/KMT_Rolling.gif')}
                        alt="kmt_rolling"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </>
                )}

                {/* 內容置中 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <div className="w-32 mb-4">
                    <img
                      src={character.portrait}
                      alt="avatar"
                      className="w-full object-contain"
                    />
                  </div>

                  <h1 className="text-3xl font-bold mb-4">遊戲說明</h1>

                  <p className="text-lg max-w-xl whitespace-pre-wrap leading-relaxed mb-6">
                    {introText.split('\n').map((line, index, arr) => (
                      <span key={index} className="inline-block">
                        {line}
                        {index === arr.length - 1 && !done && (
                          <span className="animate-pulse">◍</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>


          </motion.div>
            {/* Skip button */}
            <div>
              <button
                onClick={handleSkip}
                className="skip-button"
              >
                Skip
              </button>
            </div>

        </div>
      )}
    </AnimatePresence>
  );
};

export default IntroGuide;
