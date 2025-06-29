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

  const [allowClick, setAllowClick] = useState(false);

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

  useEffect(() => {
    if (done) {
      setTimeout(() => setAllowClick(true), 500);
    }
  }, [done]);


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
              className="flex flex-col flex-grow items-center justify-center relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative border-[16px] border-white rounded-none inline-block max-h-[90vh] overflow-hidden">
                <img
                  src={getImagePath('/images/intro/intro_bg3.webp')}
                  alt="intro_bg"
                  className="w-full object-contain max-h-[90vh]"
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
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="w-32 mb-4">
                  <img
                    src={getImagePath('/images/blue_lawmaker.gif')}
                    alt="avatar"
                    className="w-3/5 object-contain mx-auto md:w-full"
                  />
                </div>

                <h1 className="text-3xl font-bold mb-4 text-white">遊戲說明</h1>

                <p
                  className="text-base xs:text-lg text-white md:text-xl max-w-xl whitespace-pre-wrap leading-relaxed mb-6"
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
                {allowClick && (
                  <div className="prompt text-white">
                    點擊任一處繼續
                  </div>
                )}
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
