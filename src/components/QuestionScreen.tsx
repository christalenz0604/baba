import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import ScorePaperProps from './ScorePaperProps';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from "lucide-react";
import { questionSets } from '../data/questions';

const QuestionScreen: React.FC = () => {
  const { gameState, getCurrentQuestion, answerQuestion } = useGame();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [showPoints, setShowPoints] = useState(false);
  const [pointsToAdd, setPointsToAdd] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [questionKey, setQuestionKey] = useState(0);
  const [showOptions, setShowOptions] = useState(true);

  const currentQuestion = getCurrentQuestion();
  const character = gameState.selectedCharacter;
  const totalQuestions = gameState.questionSetId ? questionSets[gameState.questionSetId].questions.length : 0;

  if (!currentQuestion || !character) return null;

  useEffect(() => {
    setSelectedOption(null);
    setHoveredOption(null);
    setShowPoints(false);
    setShowOptions(false);

    setTimeout(() => {
      setShowOptions(true);
      setQuestionKey(prev => prev + 1);
    }, 100);

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
      setTimeout(() => document.activeElement?.blur(), 50);
    }
    setTimeout(() => document.body.click(), 10);
  }, [currentQuestion.id]);

  const handleOptionClick = (points: number, isCorrect: boolean, optionId: string) => {
    if (selectedOption) return;
    setSelectedOption(optionId);
    setPointsToAdd(points);
    setShowPoints(true);
    setTimeout(() => {
      setSelectedOption(null);
      answerQuestion(points, isCorrect);
      setShowPoints(false);
    }, 1500);
  };

  const maxScore = 200;

  return (
    <div className="h-screen bg-contain bg-[url('/images/background_event.png')] bg-repeat-x bg-top py-6 px-4 font-pixel">
      <div className="max-w-xl mx-auto">
        <div className="flex flex-row justify-between items-center flex-wrap">
          <div className="flex items-center mr-4">
            <div className="w-16 h-16 rounded-0 overflow-hidden bg-[url('/images/Char_base.png')] bg-contain bg-cover bg-center">
              <img src={character.avatar} alt={character.name} className="w-full h-full object-cover" />
            </div>
            <div className="ml-4 font-pixel">
              <p className="text-gray-100 font-medium">{character.districts}</p>
              <p className="text-gray-100 font-medium">立法委員</p>
              <h3 className="font-semibold text-lg text-white">{character.name}</h3>
            </div>
          </div>
          <div className="flex shrink-0">
            <ScorePaperProps score={gameState.score} maxScore={maxScore} level={gameState.currentQuestionIndex+1} />
          </div>
        </div>

        <hr className="dotted-line" />
        <div className="flex flex-row justify-center gap-2 my-2">
          <p className="text-gray-100 font-pixel text-l flex items-center font-semibold">
            生存進度
            {Array(totalQuestions).fill(null).map((_, index) => (
              <img
                key={index}
                src={`/images/${index < gameState.currentQuestionIndex + 1 ? 'heart_red' : 'heart_white'}.png`}
                alt={`Heart ${index + 1}`}
                className="w-5 h-5 ml-1"
              />
            ))}
          </p>
        </div>
        <hr className="dotted-line mb-2" />

        {currentQuestion.image && (
          <div className="relative w-3/4 mx-auto h-40 overflow-hidden">
            <div className="absolute inset-0 m-auto aspect-[4/3] h-full">
              <img
                src={currentQuestion.image}
                alt={currentQuestion.text + '圖片'}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <motion.div
          className="relative question-color p-6 my-2"
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute -top-12 right-6 w-20 h-20 bg-[url('/images/aboutmore_2.png')] bg-contain bg-center bg-no-repeat text-white transition-colors duration-200 flex items-center justify-center font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
          />

          <AnimatePresence>
            {isLightboxOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={() => setIsLightboxOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">相關說明</h3>
                    <button
                      onClick={() => setIsLightboxOpen(false)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {currentQuestion.explanation?.image && (
                      <img
                        src={currentQuestion.explanation.image}
                        alt="相關說明圖片"
                        className="w-full rounded-lg"
                      />
                    )}
                    {currentQuestion.explanation?.text && (
                      <p className="text-gray-700">{currentQuestion.explanation.text}</p>
                    )}
                    {currentQuestion.explanation?.reference && (
                      <div className="pt-4 border-t">
                        <h4 className="font-medium text-gray-800 mb-2">參考資料</h4>
                        <a
                          href={currentQuestion.explanation.reference}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-700 flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          查看來源
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute -top-3 -left-3 bg-black px-3 py-1 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">事件{gameState.currentQuestionIndex + 1}</h2>
          </div>
          <p className="text-lg mb-4">{currentQuestion.text}</p>
        </motion.div>

        {showOptions && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`options-${questionKey}`}
              className="w-3/4 mx-auto space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOption === option.id;
                const isHovered = hoveredOption === option.id && !isSelected;

                const baseClass = "relative p-4 question-option-color cursor-pointer transition-all duration-300";
                const stateClass = isSelected
                  ? "shadow-[6px_6px_0px_#878787] bg-[#ffffff] border-[#65dbff]"
                  : isHovered
                  ? "shadow-[-4px_-4px_0px_#6b21a8]"
                  : "";

                return (
                  <motion.div
                    key={option.id}
                    className={`${baseClass} ${stateClass}`}
                    onClick={() => handleOptionClick(option.points, option.isCorrect, option.id)}
                    onMouseEnter={() => setHoveredOption(option.id)}
                    onMouseLeave={() => setHoveredOption(null)}
                    onTouchStart={() => setHoveredOption(option.id)}
                    onTouchEnd={() => setHoveredOption(null)}
                    whileTap={{ scale: 0.99 }}
                  >
                    <p className="text-gray-700">{option.text}</p>
                    <AnimatePresence>
                      {showPoints && isSelected && (
                        <motion.div
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 font-bold text-xl question-points-color"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          +{pointsToAdd}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default QuestionScreen;
