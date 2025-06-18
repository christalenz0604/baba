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
    <div className="min-h-screen bg-[url('/images/background.png')] bg-repeat-x bg-[length:auto_100%] bg-top bg-local py-6 px-4 font-pixel">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-4">
        {/* Logo */}
        <motion.div
          className="w-full md:w-[200px] flex justify-center items-center h-full mb-4 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/images/logo.png" alt="logo" className="w-1/2 md:w-full h-auto" />
        </motion.div>

        {/* 角色選擇區塊 */}
        <div className="w-full md:flex-1 relative max-w-md mx-auto">
          {/* 角色描述框 */}
          <motion.div
            key={character.id}
            className="mx-auto w-full overflow-hidden mb-4"
          >
            <div className="p-2 font-pixel dialog-box relative">
              <img src="/images/corner_LT.png" className="absolute top-0 left-0 w-20 h-20 corner-img" alt="Top Left" />
              <img src="/images/corner_RT.png" className="absolute top-0 right-0 w-20 h-20 corner-img" alt="Top Right" />
              <img src="/images/corner_LB.png" className="absolute bottom-0 left-0 w-20 h-20 corner-img" alt="Bottom Left" />
              <img src="/images/corner_RB.png" className="absolute bottom-0 right-0 w-20 h-20 corner-img" alt="Bottom Right" />
              <p className="text-gray-600 p-2" style={{ whiteSpace: 'pre-line' }}>{character.description}</p>
            </div>
          </motion.div>

          {/* 角色圖片 */}
          <div className="h-64 overflow-hidden office-character mb-4">
            <img
              src={character.avatar}
              alt={character.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* 按鈕 + 資訊區：手機直式 / 桌機橫式 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mt-6">
            {/* ← 左按鈕 */}
            <button
              onClick={prev}
              className="w-12 h-20 bg-no-repeat bg-contain bg-center"
              aria-label="Previous character"
              style={{ backgroundImage: `url('/images/arrow_L.gif')` }}
            />

            {/* 中間角色資訊 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="width-60 border-4 border-black rounded-0 flex flex-col justify-center items-center"></div>
              <div className="width-65 h-2 bg-white border-x-8 border-black rounded-0 flex flex-col justify-center items-center"></div>
              <div className="width-70 h-2 bg-white border-x-8 border-black rounded-0 flex flex-col justify-center items-center"></div>
              <div className="w-3/4 bg-white border-x-8 border-black rounded-0 flex flex-col justify-center items-center">
                <p className="text-gray-600" style={{ whiteSpace: 'pre-line' }}>你選擇的是</p>
                <ChevronDown className="w-6 h-4 text-black-600" />
                <h3 className="text-xl font-pixel font-semibold text-center mb-2 name-plate">{character.name}</h3>
              </div>
              <div className="width-70 h-2 bg-white border-x-8 border-black rounded-0 flex flex-col justify-center items-center"></div>
              <div className="width-65 h-2 bg-white border-x-8 border-black rounded-0 flex flex-col justify-center items-center"></div>
              <div className="width-60 border-4 border-black rounded-0 flex flex-col justify-center items-center"></div>

              <button
                onClick={() => selectCharacter(character)}
                className="btn-pixel w-3/4 mt-4 py-3 px-4 tracking-wider text-lg"
              >
                確認角色
              </button>
            </div>

            {/* → 右按鈕 */}
            <button
              onClick={next}
              className="w-12 h-20 bg-no-repeat bg-contain bg-center"
              aria-label="Next character"
              style={{ backgroundImage: `url('/images/arrow_R.gif')` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;
