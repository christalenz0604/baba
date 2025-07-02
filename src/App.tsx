import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameProvider, useGame } from './context/GameContext';
import CharacterSelection from './components/CharacterSelection';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';
import DesktopResultsScreen from './components/DesktopResultsScreen'; // For Desktop PC size
import ResponsiveResultsScreen from './components/ResponsiveResultsScreen'; // merge the results
import './styles/pixel.css';
import { setImagePathVariables } from './utils/cssUtils';
import IntroGuide from './components/IntroGuide';
import { needPassword } from './types.ts';
import { pushToDataLayer } from './utils/gtm.ts'


const GameContainer: React.FC = () => {
  const { gameState, startGame } = useGame();
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    const checkLayout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // for Desktop PC size
      setIsDesktopLayout(width > 767);
    };

    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

  // GTM: 在遊戲正式開始時推送 'game_start' 事件
  // 判斷遊戲開始的條件是當 gameState.hasStartedGame 從 false 變為 true 時
  useEffect(() => {
    if (gameState.hasStartedGame) {
      pushToDataLayer({
        event: 'game_start', // GTM 自訂事件名稱
        game_name: '國會派對', // 自訂遊戲名稱，建議在 GA4 中註冊為自訂維度
        // 您也可以在這裡添加其他與遊戲開始相關的參數
      });
      console.log('GTM Event: 遊戲正式開始 (game_start) 事件已推送！');
    }
  }, [gameState.hasStartedGame]); // 監聽 hasStartedGame 狀態的變化

  return (
    <div className="font-sans">
      {!gameState.hasStartedGame 
        ? (<IntroGuide onContinue={startGame} />)
		: !gameState.selectedCharacter 
	      ? (<CharacterSelection />)   
		  : gameState.isGameOver 
		    ? (<ResponsiveResultsScreen />) 
			: (<QuestionScreen />)
	  }
    </div>
  );
};

function App() {
  useEffect(() => {
    setImagePathVariables();
  }, []);

  return (
    <GameProvider>
      <GameContainer />
    </GameProvider>
  );
}

export default App;
