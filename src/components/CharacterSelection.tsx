import React, { useState } from 'react';
import { characters } from '../data/characters';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';


const CharacterSelection: React.FC = () => {
  const { selectCharacter } = useGame();
  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % characters.length);
  };

  const character = characters[currentIndex];
  return (
    <div className="min-h-screen bg-contain bg-[url('/images/background.png')] bg-repeat-x bg-top py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-pixel font-bold text-center text-indigo-800 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/images/logo.png" alt="logo" className="mx-auto w-1/2 h-auto" />
        </motion.h1>

        <div className="relative max-w-md mx-auto">

          <motion.div
            key={character.id}
            className="mx-auto w-full overflow-hidden mb-4"
          >

            <div className="p-2 font-pixel dialog-box">
              {/* 四個角的圖片 */}
              <img src="/images/corner_LT.png"     className="absolute top-0 left-0 w-20 h-20" alt="Top Left" />
              <img src="/images/corner_RT.png"    className="absolute top-0 right-0 w-20 h-20" alt="Top Right" />
              <img src="/images/corner_LB.png"  className="absolute bottom-0 left-0 w-20 h-20" alt="Bottom Left" />
              <img src="/images/corner_RB.png" className="absolute bottom-0 right-0 w-20 h-20" alt="Bottom Right" />

              {/* 中間文字 */}
              <p className="text-gray-600 p-2" style={{ whiteSpace: 'pre-line' }}>{character.description}</p>
            </div>
          </motion.div>

            <div className="h-64 overflow-hidden office-character">
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
                style={{ backgroundImage: `url('/images/arrow_L.png')` }}
              >
                {/* <ChevronLeft className="w-6 h-6 text-gray-600" /> */}
              </button>

              <button
                onClick={next}
                className="absolute right-[-0.5rem] top-1/2 transform -translate-y-1/2 p-2 w-10 h-10 bg-no-repeat bg-contain bg-center"
                aria-label="Next character"
                style={{ backgroundImage: `url('/images/arrow_R.png')` }}
              >
                {/* <ChevronRight className="w-6 h-6 text-gray-600" /> */}
              </button>
              <div className="width-60 mx-auto border-4 border-black rounded-0 flex flex-col justify-center items-center"></div>
              <div className="width-65 mx-auto h-2 bg-white border-x-8 border-black rounded-0 flex flex-col justify-center items-center"></div>
              <div className="width-70 mx-auto h-2 bg-white border-x-8 border-black rounded-0 flex flex-col justify-center items-center"></div>
              <div className="w-3/4 mx-auto bg-white border-x-8 border-black rounded-0 flex flex-col justify-center items-center">
                <p className="text-gray-600" style={{ whiteSpace: 'pre-line' }}>你選擇的是</p>
                {/* <img></img> */}
                <ChevronDown className="w-6 h-4 text-black-600" />
                <h3 className="text-xl font-pixel font-semibold text-center mb-2 name-plate">{character.name}</h3>
              </div>
              <div className="width-70 mx-auto h-2 bg-white border-x-8 border-black rounded-0 flex flex-col justify-center items-center"></div>
              <div className="width-65 mx-auto h-2 bg-white border-x-8 border-black rounded-0 flex flex-col justify-center items-center"></div>
              <div className="width-60 mx-auto border-4 border-black rounded-0 flex flex-col justify-center items-center"></div>

            </div>
            <div className="relative py-0 px-5 mx-auto text-center">
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
