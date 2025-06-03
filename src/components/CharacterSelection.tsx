import React, { useState } from 'react';
import { characters } from '../data/characters';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const CharacterSelection: React.FC = () => {
  const { selectCharacter } = useGame();
  const gameTitle="《2025立院生存指南》";
  const gameDescription="選擇一位立法委員在立法院闖蕩，根據該名立法委員做過的事回答問題，罷免對的人！";
  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % characters.length);
  };

  const character = characters[currentIndex];
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {gameTitle}
        </motion.h1>

        <motion.p
          className="text-center text-gray-600 mb-10"
          style={{ whiteSpace: 'pre-line' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {gameDescription}
        </motion.p>

        <div className="relative max-w-md mx-auto">
          <motion.div
            key={character.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-64 overflow-hidden">
              <img
                src={character.avatar}
                alt={character.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{character.name}</h3>
              <p className="text-gray-600 mb-4" style={{ whiteSpace: 'pre-line' }}>{character.description}</p>

              <button
                onClick={() => selectCharacter(character)}
                className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                選擇
              </button>
            </div>
          </motion.div>

          <div className="flex justify-between mt-4">
            <button
              onClick={prev}
              className="w-1/2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100"
            >
              <ChevronLeft className="inline-block mr-1" /> 上一位
            </button>
            <button
              onClick={next}
              className="w-1/2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100"
            >
              下一位 <ChevronRight className="inline-block ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;