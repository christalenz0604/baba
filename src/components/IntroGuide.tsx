import React, { useEffect, useRef, useState } from 'react';
import { useGame } from '../context/GameContext';
import useTypewriter from '../landing/useTypewriter';
import { AnimatePresence, motion } from 'framer-motion';
import { getImagePath } from '../utils/pathUtils';

import { useAudio } from '../components/AudioProvider';
import { MuteToggleButton } from '../components/MuteToggleButton';

interface IntroGuideProps {
  onContinue: () => void;
}

const IntroGuide: React.FC<IntroGuideProps> = ({ onContinue }) => {
  const { gameState } = useGame();
  const character = gameState.selectedCharacter;
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [forceFinish, setForceFinish] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const text = [
    `歡迎進入國會派對！`,
    `你將以國民黨立法委員的身分前進國會。`,
    "面對各種關於國會生涯的重要抉擇，",
    `請試著用為黨為民的角度思考，`,
    "努力在國會活到最後一刻！"
  ];

  const introText = useTypewriter(text, 75, 1000, false, () => setDone(true), forceFinish);


  const handleSkip = () => {
    setForceFinish(true); // 終止動畫
    setDone(true);        // 標記為已完成
  };

  const handleClickToContinue = () => {
    if (done) {
      setFadeOut(true); // 啟動淡出動畫
    }
  };

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        onContinue();
      }, 800);
    }
  }, [fadeOut, onContinue]);

  return (
    <>
      <MuteToggleButton />
      <AnimatePresence>
        {!fadeOut && (
          <div
            className="h-[calc(var(--vh,1vh)_*100)] flex flex-col bg-[#90a5c2] overflow-hidden"
            onClick={handleClickToContinue}
          >
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
                    <div className="absolute bottom-0 right-0 w-16 h-16">
                      <img
                        src={getImagePath('/images/intro/KMT_Rolling.gif')}
                        alt="kmt_rolling"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <div className="w-32 mb-4">
                      <img
                        src={getImagePath('/images/blue_lawmaker.gif')}
                        alt="avatar"
                        className="w-full object-contain"
                      />
                    </div>

                    <h1 className="text-3xl font-bold mb-4">遊戲說明</h1>

                    <p
                      className="text-lg max-w-xl whitespace-pre-wrap leading-relaxed mb-6"
                      dangerouslySetInnerHTML={{
                        __html: introText
                          .split('\n')
                          .map((line, index) => {
                            const formatted = line.replace(
                              /國民黨立法委員/g,
                              '<span class="font-bold underline text-yellow-300">國民黨立法委員</span>'
                            );
                            return index === introText.split('\n').length - 1 && !done
                              ? `${formatted}<span class="animate-pulse">◍</span>`
                              : formatted;
                          })
                          .join('<br/>'),
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skip button */}
            {!done && (
              <div className="absolute top-4 right-4 z-50">
                <button onClick={handleSkip} className="skip-button">
                  Skip
                </button>
              </div>
            )}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IntroGuide;
