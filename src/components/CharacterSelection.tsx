import React from 'react';
import { characters } from '../data/characters';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';

const CharacterSelection: React.FC = () => {
  const { selectCharacter } = useGame();
  const gameTitle="《2025立院生存指南》";
  const gameDescription="你能保證不被罷免並成功留在立法院嗎？\n每做一個決定 連署人數會增加 加快被罷免速度\n結局:  成功生存！也符合罷免的資格";

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {gameDescription}

        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {characters.map((character) => (
            <motion.div
              key={character.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={character.avatar} 
                  alt={character.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{character.name}</h3>
                <p className="text-gray-600 mb-4">{character.description}</p>
                
                <button
                  onClick={() => selectCharacter(character)}
                  className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  選擇
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;