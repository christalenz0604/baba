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


const GameContainer: React.FC = () => {
  const { gameState, startGame } = useGame();
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const access = localStorage.getItem('baba_access_granted') === 'yes';
    const timestamp = parseInt(localStorage.getItem('baba_access_time') || '0', 10);
    const now = Date.now();
    const expired = now - timestamp > 3 * 60 * 60 * 1000; // 三小時

    if ((!access || expired) && needPassword) {
      localStorage.removeItem('baba_access_granted');
      localStorage.removeItem('baba_access_time');
      navigate('/'); // 轉回登入頁
    }
  }, [navigate]);


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

  return (
    <div className="font-sans">
      {!gameState.selectedCharacter ? (
        <CharacterSelection />
      ) : !gameState.hasStartedGame ? (
        <IntroGuide onContinue={startGame} />
      ) : gameState.isGameOver ? (
        <ResponsiveResultsScreen />
      ) : (
        <QuestionScreen />
      )}
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
