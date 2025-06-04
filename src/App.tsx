import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import CharacterSelection from './components/CharacterSelection';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';

const GameContainer: React.FC = () => {
  const { gameState } = useGame();
  
  return (
    <div className="font-sans">
      {!gameState.selectedCharacter ? (
        <CharacterSelection />
      ) : gameState.isGameOver ? (
        <ResultsScreen />
      ) : (
        <QuestionScreen />
      )}
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <GameContainer />
    </GameProvider>
  );
}

export default App;