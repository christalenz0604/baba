import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import ScoreTree from './ScoreTree';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, ExternalLink, X } from "lucide-react";


const QuestionScreen: React.FC = () => {
  const { gameState, getCurrentQuestion, answerQuestion } = useGame();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showPoints, setShowPoints] = useState(false);
  const [pointsToAdd, setPointsToAdd] = useState(0);
  const [expandedOption, setExpandedOption] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentQuestion = getCurrentQuestion();
  const character = gameState.selectedCharacter;
  
  if (!currentQuestion || !character) return null;

  const handleOptionClick = (points: number, isCorrect: boolean, optionId: string) => {
    if (selectedOption) return; // Prevent multiple selections
    
    setSelectedOption(optionId);
    setPointsToAdd(points);
    setShowPoints(true);
    
    // Delay moving to next question to show the points animation
    setTimeout(() => {
      answerQuestion(points, isCorrect);
      setSelectedOption(null);
      setShowPoints(false);
      setExpandedOption(null);
    }, 1500);
  };

  const toggleExplanation = (optionId: string) => {
    setExpandedOption(expandedOption === optionId ? null : optionId);
  };

  // Maximum possible score (for the tree visualization)
  const maxScore = 200;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Character and score display */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500">
              <img 
                src={character.avatar} 
                alt={character.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg text-gray-800">{character.name}</h3>
              <p className="text-indigo-600 font-medium">人民累積的怒氣值: {gameState.score}</p>
            </div>
          </div>
          
          {/* Tree visualization */}
          <div className="w-40">
            <ScoreTree score={gameState.score} maxScore={maxScore} />
          </div>
        </div>
          {/* Progress indicator */}
        <p className="text-center text-gray-600 mt-2">
          生存進度 {gameState.currentQuestionIndex + 1} / 12
        </p>
        <div className="w-full bg-gray-200 rounded-full h-3.5 mb-6">
          <div 
            className="bg-indigo-600 h-3.5 rounded-full transition-all duration-500"
            style={{ width: `${((gameState.currentQuestionIndex + 1) / 12) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-6 mb-6"
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            第{gameState.currentQuestionIndex + 1}題
          </h2>
          <p className="text-gray-700 text-lg mb-4">{currentQuestion.text}</p>
          {/* Options */}
          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <motion.div 
                key={option.id}
                className={`relative p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedOption === option.id 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                }`}
                onClick={() => handleOptionClick(option.points, option.isCorrect, option.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <p className="text-gray-700">{option.text}</p>
                
                {/* Points animation */}
                <AnimatePresence>
                  {showPoints && selectedOption === option.id && (
                    <motion.div 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 font-bold text-xl text-green-500"
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

        {/* Explanation Button */}
        <motion.button
          onClick={() => setIsLightboxOpen(true)}
          className="w-full mt-4 p-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center font-medium"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          查看相關說明
        </motion.button>

        {/* Lightbox */}
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


      </div>
    </div>
  );
};

export default QuestionScreen;