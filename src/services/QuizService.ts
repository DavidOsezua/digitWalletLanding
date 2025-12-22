import { apiInstance } from "./api";
import type { Quiz, QuizResponse } from "@/types/quiz";

export const getQuiz = async (): Promise<{ quiz: Quiz }> => {
  const response = await apiInstance.get<{ quiz: Quiz }>("/user/quiz");
  return response.data;
};

export const submitQuiz = async (data: {
  quizId: number;
  answers: Array<{ questionId: number; selectedOptionId: number }>;
}): Promise<QuizResponse> => {
  const response = await apiInstance.put<QuizResponse>("/user/quiz", data);
  return response.data;
};
