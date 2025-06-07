import React, { useState } from 'react';
import { characters } from '../data/characters';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';


const CharacterSelection: React.FC = () => {
  const { selectCharacter } = useGame();
  const gameTitle="《國會派對：生存之亂》";
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
          className="text-3xl md:text-4xl font-pixel font-bold text-center text-indigo-800 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {gameTitle}
        </motion.h1>

        <motion.p
          className="text-center font-pixel text-gray-600 mb-10"
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
            className="mx-auto w-3/4 overflow-hidden mb-4"
          >
            <div className="p-5 font-pixel dialog-box">
              <p className="text-gray-600" style={{ whiteSpace: 'pre-line' }}>{character.description}</p>
            </div>
          </motion.div>

            <div className="h-64 overflow-hidden">
              <img
                src={character.avatar}
                alt={character.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="relative w-3/4 p-5 mx-auto text-center">
              <button
                onClick={prev}
                className="absolute left-[-0.5rem] top-1/2 transform -translate-y-1/2 p-2 w-10 h-10 bg-no-repeat bg-contain bg-center"
                aria-label="Previous character"
                style={{ backgroundImage: `url('/baba_test/images/arrow_L.png')` }}
              >
                {/* <ChevronLeft className="w-6 h-6 text-gray-600" /> */}
              </button>

              <button
                onClick={next}
                className="absolute right-[-0.5rem] top-1/2 transform -translate-y-1/2 p-2 w-10 h-10 bg-no-repeat bg-contain bg-center"
                aria-label="Next character"
                style={{ backgroundImage: `url('/baba_test/images/arrow_R.png')` }}
              >
                {/* <ChevronRight className="w-6 h-6 text-gray-600" /> */}
              </button>
              <div className="p-3 w-full mx-auto bg-white rounded-0 flex flex-col justify-center items-center mb-2">
              <p className="text-gray-600" style={{ whiteSpace: 'pre-line' }}>你選擇的是</p>
              {/* <img></img> */}
              <ChevronDown className="w-6 h-6 text-black-600" />
              <h3 className="text-xl font-pixel font-semibold text-gray-800 text-center mb-2">{character.name}</h3>
              </div>


            </div>
            <div className="relative p-5 mx-auto text-center">
              <button
                  onClick={() => selectCharacter(character)}
                  className="btn-pixel w-3/4 py-3 px-4 tracking-wider text-lg "
                >
                  確認角色
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;