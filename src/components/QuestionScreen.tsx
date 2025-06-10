import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import ScorePaperProps from './ScorePaperProps';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from "lucide-react";
import { questionSets } from '../data/questions';

const QuestionScreen: React.FC = () => {
  const { gameState, getCurrentQuestion, answerQuestion } = useGame();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showPoints, setShowPoints] = useState(false);
  const [pointsToAdd, setPointsToAdd] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [questionKey, setQuestionKey] = useState(0);

  const currentQuestion = getCurrentQuestion();
  const character = gameState.selectedCharacter;
  const totalQuestions = gameState.questionSetId ? questionSets[gameState.questionSetId].questions.length : 0;

  if (!currentQuestion || !character) return null;

  useEffect(() => {
    setSelectedOption(null);
    setShowPoints(false);
    setQuestionKey(prev => prev + 1);

    // 手動清除 hover 殘留樣式 (iOS 特殊處理)
    const els = document.querySelectorAll('.question-option-color');
    els.forEach((el) => {
      (el as HTMLElement).classList.remove('hover\:shadow-[-4px_-4px_0px_#6b21a8]');
    });
  }, [currentQuestion.id]);

  const handleOptionClick = (points: number, isCorrect: boolean, optionId: string) => {
    if (selectedOption) return;

    setSelectedOption(optionId);
    setPointsToAdd(points);
    setShowPoints(true);

    setTimeout(() => {
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
              <img 
                src={character.avatar} 
                alt={character.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 font-pixel">
              <p className="text-gray-100 font-medium">{character.districts}</p>
              <p className="text-gray-100 font-medium">立法委員</p>
              <h3 className="font-semibold text-lg text-white">{character.name}</h3>
            </div>
          </div>
          <div className="flex shrink-0">
            <ScorePaperProps score={gameState.score} maxScore={maxScore} />
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
                className="w-full h-full top-1/2 left-1/2 object-cover"
              />
            </div>
          </div>
        )}

        <div id="question-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={questionKey}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative question-color p-6 my-2"
              >
                <motion.button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute -top-12 right-6 w-20 h-20 bg-[url('/images/aboutmore_2.png')] bg-contain bg-center bg-no-repeat text-white transition-colors duration-200 flex items-center justify-center font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                />
                {/* ...其餘維持不動... */}
              </motion.div>

              <div className="w-3/4 mx-auto space-y-4">
                {currentQuestion.options.map((option) => (
                  <motion.div 
                    key={questionKey + '-' + option.id}
                    className={`relative p-4 question-option-color cursor-pointer transition-all duration-300 ${
                      selectedOption === option.id 
                        ? 'shadow-[6px_6px_0px_#878787] bg-[#ffffff] border-[#65dbff]' 
                        : ''
                    }`}
                    onClick={() => handleOptionClick(option.points, option.isCorrect, option.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <p className="text-gray-700">{option.text}</p>
                    <AnimatePresence>
                      {showPoints && selectedOption === option.id && (
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
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
