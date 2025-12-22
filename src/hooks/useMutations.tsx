import { onboard } from "@/services/OnboardingService";
import { submitQuiz } from "@/services/QuizService";
import { useQuizStore } from "@/store/quizStore";
import type { QuizResponse } from "@/types/quiz";
import { useMutation } from "@tanstack/react-query";

export const useOnboard = () =>
  useMutation({
    mutationFn: onboard,
  });

export const useSubmitQuiz = () => {
  const { setQuizResponse } = useQuizStore();

  return useMutation({
    mutationFn: submitQuiz,
    onSuccess: (data: QuizResponse) => {
      setQuizResponse(data);
    },
  });
};
