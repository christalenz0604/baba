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
    <div className="h-screen flex flex-col items-center justify-start bg-[url('/images/background.png')] bg-repeat-x bg-[length:auto_100%] bg-top bg-local font-pixel relative">
      
      {/* ✅ 固定 logo */}
      <img
        src="/images/logo.png"
        alt="logo"
        className="h-1/4 w-auto my-4"
      />

      {/* ✅ 下方角色選擇區 */}
      <div className="flex-grow flex flex-col justify-center items-center w-full px-4">
        <div className="relative max-w-md w-full">

          <motion.div
            key={character.id}
            className="mx-auto w-full overflow-hidden mb-4"
          >
            <div className="p-2 font-pixel dialog-box relative">
              {/* 四個角圖片 */}
              <img src="/images/corner_LT.png" className="absolute top-0 left-0 w-20 h-20 corner-img" alt="Top Left" />
              <img src="/images/corner_RT.png" className="absolute top-0 right-0 w-20 h-20 corner-img" alt="Top Right" />
              <img src="/images/corner_LB.png" className="absolute bottom-0 left-0 w-20 h-20 corner-img" alt="Bottom Left" />
              <img src="/images/corner_RB.png" className="absolute bottom-0 right-0 w-20 h-20 corner-img" alt="Bottom Right" />

              <p className="text-gray-600 p-2" style={{ whiteSpace: 'pre-line' }}>
                {character.description}
              </p>
            </div>
          </motion.div>

          <div className="h-48 overflow-hidden office-character">
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
              className="absolute left-[-0.5rem] top-1/2 transform -translate-y-1/2 p-2 w-10 h-20 bg-no-repeat bg-contain bg-center"
              aria-label="Previous character"
              style={{ backgroundImage: `url('/images/arrow_L.gif')` }}
            />

            <button
              onClick={next}
              className="absolute right-[-0.5rem] top-1/2 transform -translate-y-1/2 p-2 w-10 h-20 bg-no-repeat bg-contain bg-center"
              aria-label="Next character"
              style={{ backgroundImage: `url('/images/arrow_R.gif')` }}
            />

            {/* 選擇角色展示框 */}
            <div className="width-60 mx-auto border-4 border-black flex flex-col items-center"></div>
            <div className="width-65 mx-auto h-2 bg-white border-x-8 border-black flex flex-col items-center"></div>
            <div className="width-70 mx-auto h-2 bg-white border-x-8 border-black flex flex-col items-center"></div>

            <div className="w-3/4 mx-auto bg-white border-x-8 border-black flex flex-col items-center">
              <p className="text-gray-600" style={{ whiteSpace: 'pre-line' }}>你選擇的是</p>
              <ChevronDown className="w-6 h-4 text-black-600" />
              <h3 className="text-xl font-pixel font-semibold text-center mb-2 name-plate">{character.name}</h3>
            </div>

            <div className="width-70 mx-auto h-2 bg-white border-x-8 border-black flex flex-col items-center"></div>
            <div className="width-65 mx-auto h-2 bg-white border-x-8 border-black flex flex-col items-center"></div>
            <div className="width-60 mx-auto border-4 border-black flex flex-col items-center"></div>
          </div>

          <div className="relative px-5 mx-auto text-center">
            <button
              onClick={() => selectCharacter(character)}
              className="btn-pixel w-3/4 py-3 px-4 tracking-wider text-lg"
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
