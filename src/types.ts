export interface Character {
  id: string;
  name: string;
  districts: string;
  avatar: string;
  description: string;
  questionSetId: string;
  score: number;
  resultCharacterImages: ResultCharacterImage;
}
export interface ResultCharacterImage {
  success: string;
  fail: string;
}

export interface Option {
  id: string;
  text: string;
  points: number;
  isCorrect: boolean;
}

export interface QuestionExplanation {
  image?: string;
  text?: string;
  reference?: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  image?: string;
  description?: string;
  explanation?: QuestionExplanation;
}

export interface QuestionSet {
  id: string;
  questions: Question[];
}

export interface GameState {
  selectedCharacter: Character | null;
  currentQuestionIndex: number;
  score: number;
  isGameOver: boolean;
  questionSetId: string | null;
}
