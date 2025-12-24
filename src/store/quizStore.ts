import type { QuizResponse } from "../types/quiz";
import { create } from "zustand";

interface QuizState {
  quizResponse: QuizResponse | null;
  setQuizResponse: (response: QuizResponse | null) => void;
}

export const useQuizStore = create<QuizState>()((set) => ({
  quizResponse: null,
  setQuizResponse: (response) => set({ quizResponse: response }),
}));
