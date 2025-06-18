import React, { useEffect, useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import CharacterSelection from './components/CharacterSelection';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';
<<<<<<< HEAD
import DesktopResultsScreen from './components/DesktopResultsScreen'; // æ¡Œæ©Ÿå°ˆç”¨
=======
import DesktopResultsScreen from './components/DesktopResultsScreen'; // ®à¾÷±M¥Î
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
      // æ©«å¼ç•«é¢ï¼ˆæ¡Œæ©Ÿæˆ–æ©«æ”¾å¹³æ¿ï¼‰
=======
      // ¾î¦¡µe­±¡]®à¾÷©Î¾î©ñ¥­ªO¡^
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
