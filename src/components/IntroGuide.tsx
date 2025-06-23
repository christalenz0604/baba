import React, { useEffect, useState } from 'react';
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

    if (!character) return null;

    const text = [
        `歡迎進入國會派對！`,
        `你將以 ${character.name} 的角色前進國會。`,
        "面對各種關於國會生涯的重要抉擇，",
        `請試著用 ${character.name} 的角度思考，`,
        "努力在國會活到最後一刻！"
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
                <div className="full-height">
                <motion.div
                    className="flex flex-col items-center justify-center relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-center justify-center w-full flex-grow bg-[#90a5c2]">
                        <div className="relative w-full h-[300px] md:h-[600px] flex flex-col items-center justify-center font-pixel text-white bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${getImagePath('/images/intro/intro_bg.webp')})` }}>
                            <div className="relative flex w-32 h-auto justify-center">
                                <img src={character.portrait} alt="avater img" className="w-full flex-grow object-cover" />
                            </div>
                            <h1 className="relative flex text-3xl font-bold mb-4">遊戲說明</h1>
                            <p className="relative flex flex-col text-lg mb-6 text-center max-w-xl whitespace-pre-wrap leading-relaxed">
                                {introText.split('\n').map((line, index, arr) => (
                                    <span key={index} className="inline-block">
                                        {line}
                                        {/* 只在最後一行加上游標 */}
                                        {index === arr.length - 1 && !done && <span className="animate-pulse">▍</span>}
                                    </span>
                                ))}
                            </p>
                            <div className="absolute bottom-2 md:bottom-4 right-10 md:right-[28vw]">
                                <img src={getImagePath('/images/intro/KMT_Rolling.gif')} alt="kmt_rolling" className="w-full flex-grow object-cover" />
                            </div>
                        </div>
                    </div>
                    {/* Skip Button */}
                    <button
                        onClick={handleSkip}
                        className="absolute bottom-12 px-4 py-2 bg-gray-600 text-white hover:bg-gray-700 transition-colors text-sm font-pixel safe-footer"
                    >
                        Skip
                    </button>
                </motion.div>
				</div>
            )}
        </AnimatePresence>
    );
};

export default IntroGuide;