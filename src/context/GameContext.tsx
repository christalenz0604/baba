import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Character, GameState, Question } from '../types';
import { questionSets } from '../data/questions';

interface GameContextType {
  gameState: GameState;
  selectCharacter: (character: Character) => void;
  answerQuestion: (points: number, isCorrect: boolean) => void;
  getCurrentQuestion: () => Question | null;
  restartGame: () => void;
  startGame: () => void;
}

const initialGameState: GameState = {
  selectedCharacter: null,
  currentQuestionIndex: 0,
  score: 0,
  isGameOver: false,
  questionSetId: null,
  hasStartedGame: false,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const selectCharacter = (character: Character) => {
    setGameState({
      ...initialGameState,
      selectedCharacter: character,
      questionSetId: character.questionSetId,
      hasStartedGame: false,
    });
  };

  const answerQuestion = (points: number, isCorrect: boolean) => {
    setGameState((prevState) => {
      // Add points to the score
      const newScore = prevState.score + points;
      
      if (isCorrect) {
        // If correct, move to the next question
        const nextQuestionIndex = prevState.currentQuestionIndex + 1;
        const isGameOver = !prevState.questionSetId || 
          nextQuestionIndex >= questionSets[prevState.questionSetId].questions.length;
        
        return {
          ...prevState,
          score: newScore,
          currentQuestionIndex: nextQuestionIndex,
          isGameOver,
        };
      } else {
        // If incorrect, end the game
        return {
          ...prevState,
          score: newScore,
          isGameOver: true,
        };
      }
    });
  };

  const getCurrentQuestion = (): Question | null => {
    if (!gameState.questionSetId || gameState.isGameOver) return null;
    
    const questionSet = questionSets[gameState.questionSetId];
    if (!questionSet) return null;
    
    return questionSet.questions[gameState.currentQuestionIndex] || null;
  };

  const restartGame = () => {
    setGameState(initialGameState);
  };

  const startGame = () => {
    setGameState((prevState) => ({
      ...prevState,
      hasStartedGame: true,
    }));
  };

  return (
    <GameContext.Provider 
      value={{ 
        gameState, 
        selectCharacter, 
        answerQuestion, 
        getCurrentQuestion, 
        restartGame,
        startGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};