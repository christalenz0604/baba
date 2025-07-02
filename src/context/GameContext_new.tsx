import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Character, GameState, Question } from '../types';
import { questionSets, CommonQuestions } from '../data/questions_new';

interface GameContextType {
  gameState: GameState;
  selectCharacter: (character: Character) => void;
  answerQuestion: (points: number, isCorrect: boolean) => void;
  getCurrentQuestion: () => Question | null;
  restartGame: () => void;
  startGame: () => void;
  mergedQuestions: Question[];
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


function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function mergeQuestionSet(characterId: string, desiredCount = 10): Question[] {
  const personalKey = questionSets[characterId];
  const personalSet = personalKey?.questions || [];

  const personalIds = new Set(personalSet.map(q => q.id));
  const remainingCommon = CommonQuestions.filter(q => !personalIds.has(q.id));

  const needMore = desiredCount - personalSet.length;
  const commonSubset = remainingCommon.slice(0, Math.max(0, needMore));

  return shuffleArray([...personalSet, ...commonSubset]);
}



export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const [mergedQuestions, setMergedQuestions] = useState<Question[]>([]);

  const selectCharacter = (character: Character) => {
	const merged = mergeQuestionSet(character.questionSetId, 10);
    setGameState({
      ...initialGameState,
      selectedCharacter: character,
      questionSetId: character.questionSetId,
      hasStartedGame: true,
    });
	setMergedQuestions(merged);
  };

  const answerQuestion = (points: number, isCorrect: boolean) => {
    setGameState((prevState) => {
      // Add points to the score
      const newScore = prevState.score + points;
      
      if (isCorrect) {
        // If correct, move to the next question
        const nextQuestionIndex = prevState.currentQuestionIndex + 1;
        const isGameOver = nextQuestionIndex >= mergedQuestions.length;
        
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
    if (gameState.isGameOver) return null;
    return mergedQuestions[gameState.currentQuestionIndex] || null;
  };

/*
  const getCurrentQuestion = (): Question | null => {
    if (!gameState.questionSetId || gameState.isGameOver) return null;
    
    const questionSet = questionSets[gameState.questionSetId];
    if (!questionSet) return null;
    
    return questionSet.questions[gameState.currentQuestionIndex] || null;
  };
*/

  const restartGame = () => {
    setGameState(initialGameState);
    setMergedQuestions([]);
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
        startGame,
        mergedQuestions
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