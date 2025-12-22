export type Quiz = {
  id: number;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  questions: Question[];
}

export type Question = {
  id: number;
  question: string;
  options: Option[];
}

export type Option = {
  id: number;
  text: string;
}

export type QuizResponse = {
  message: string;
  score: {
    correctAnswers: number;
    totalQuestions: number;
    scorePercentage: number;
    passed: boolean;
  };
}