import React, { useEffect, useState } from 'react';
import { characters } from '../data/characters';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { getImagePath } from '../utils/pathUtils';
import { useAudio } from '../components/AudioProvider';
import { MuteToggleButton } from '../components/MuteToggleButton';
import { pushToDataLayer } from '../utils/gtm.ts'

const CharacterSelection: React.FC = () => {
  const { selectCharacter } = useGame();
  const [currentIndex, setCurrentIndex] = useState(0);
  // 監聽頁面載入，發送虛擬頁面瀏覽事件 (如果 App.tsx 沒有負責處理 App 內部的頁面瀏覽，這裡可以補上)
  // 如果 App.tsx 已經處理了從 /main 到 /game/character_selection 的 page_view，這裡可以省略
  useEffect(() => {
    pushToDataLayer({
      event: 'select_character',
      pageTitle: '角色選擇頁面'
    });
    console.log('GTM Event: 虛擬頁面瀏覽 (角色選擇頁) 事件已推送！');
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % characters.length);
  };
  const character = characters[currentIndex];

    // 處理確認角色選擇並推送 GTM 事件
  const handleSelectCharacter = () => {
    selectCharacter(character); // 呼叫遊戲上下文中的選角函數

    // GTM 追蹤：推送 'select_character' 事件
    pushToDataLayer({
      event: 'click_btn_select_character', // 自訂事件名稱
      character_id: character.id, // 選定的角色 ID
      character_name: character.name, // 選定的角色名稱
      // 您可以根據需要添加其他角色屬性，例如 character_type, character_score 等
    });
    console.log('GTM Event: 選擇角色 (select_character) 事件已推送！', {
      character_id: character.id,
      character_name: character.name,
    });
  };

  return (
    <>
	<MuteToggleButton />
    <div className="full-height flex flex-col overflow-auto">
    <div className="flex flex-col items-center justify-start flex-grow bg-[url('/images/background.webp')] bg-top bg-repeat-x bg-[length:auto_100%] bg-scroll font-pixel relative">

      
      {/* ✅ 固定 logo */}
      <img
        src={getImagePath('images/logo.webp')}
        alt="logo"
        className="mx-auto h-auto mb-2 mt-2 w-[clamp(10rem,20vw,15rem)]"
      />

      <div className="flex flex-col md:flex-row justify-center items-start w-full gap-4 px-4">
        {/* 左側角色展示框 */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <motion.div
            key={character.id}
            className="mx-auto w-full overflow-hidden mb-4 min-h-[170px]"
          >
            <div className="p-2 font-pixel dialog-box relative">
              <img src={getImagePath('images/corner_LT.webp')} className="absolute top-0 left-0 aspect-[1] corner-img" alt="Top Left" />
              <img src={getImagePath('images/corner_RT.webp')} className="absolute top-0 right-0 aspect-[1] corner-img" alt="Top Right" />
              <img src={getImagePath('images/corner_LB.webp')} className="absolute bottom-0 left-0 aspect-[1] corner-img" alt="Bottom Left" />
              <img src={getImagePath('images/corner_RB.webp')} className="absolute bottom-0 right-0 aspect-[1] corner-img" alt="Bottom Right" />

              <p className="text-gray-600 p-2" style={{ whiteSpace: 'pre-line' }}>
                {character.description}
              </p>
            </div>
          </motion.div>

          <div 
            style={{
              backgroundImage: `url(${getImagePath("/images/office_bg.gif")})`
            }}     
		    className="h-60 md:h-80 overflow-hidden office-character w-full relative"
		  >
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
              className="absolute left-[-0.5rem] top-1/2 transform -translate-y-1/2 p-2 w-10 h-20 bg-no-repeat bg-contain bg-center md:hidden"
              aria-label="Previous character"
              style={{ backgroundImage: `url(${getImagePath('images/arrow_L.gif')})` }}
            />

            <button
              onClick={next}
              className="absolute right-[-0.5rem] top-1/2 transform -translate-y-1/2 p-2 w-10 h-20 bg-no-repeat bg-contain bg-center md:hidden"
              aria-label="Next character"
              style={{ backgroundImage: `url(${getImagePath('images/arrow_R.gif')})` }}
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
              onClick={handleSelectCharacter}
              className="btn-pixel w-3/4 py-3 px-4 tracking-wider text-lg xs:py-1 max-[375px]:py-1"
            >
              確認角色
            </button>
          </div>
        </div>
      </div>
    </div>
	</div>
	</>
  );
};

export default CharacterSelection;
