import React, { useEffect, useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import CharacterSelection from './components/CharacterSelection';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';
<<<<<<< HEAD
import DesktopResultsScreen from './components/DesktopResultsScreen'; // 桌機專用
=======
import DesktopResultsScreen from './components/DesktopResultsScreen'; // ����M��
>>>>>>> gmain
import './styles/pixel.css';
import { setImagePathVariables } from './utils/cssUtils';

const GameContainer: React.FC = () => {
  const { gameState } = useGame();
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);

  useEffect(() => {
    const checkLayout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
<<<<<<< HEAD
      // 橫式畫面（桌機或橫放平板）
=======
      // ��e���]����ξ�񥭪O�^
>>>>>>> gmain
      setIsDesktopLayout(width > height);
    };

    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

  return (
    <div className="font-sans">
      {!gameState.selectedCharacter ? (
        <CharacterSelection />
      ) : gameState.isGameOver ? (
        isDesktopLayout ? <DesktopResultsScreen /> : <ResultsScreen />
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
