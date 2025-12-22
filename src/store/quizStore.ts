import { persist } from "zustand/middleware";
import type { QuizResponse } from "../types/quiz";
import { create } from "zustand";

interface QuizState {
  quizResponse: QuizResponse | null;
  setQuizResponse: (response: QuizResponse | null) => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      quizResponse: null,
      setQuizResponse: (response) => set({ quizResponse: response }),
    }),
    {
      name: "quiz-storage",
    }
  )
);
