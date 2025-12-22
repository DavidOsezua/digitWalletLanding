import { onboard } from "@/services/OnboardingService";
import { submitQuiz } from "@/services/QuizService";
import { useQuizStore } from "@/store/quizStore";
import type { QuizResponse } from "@/types/quiz";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useOnboard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: onboard,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["user"] });
    },
  });
};

export const useSubmitQuiz = () => {
  const { setQuizResponse } = useQuizStore();

  return useMutation({
    mutationFn: submitQuiz,
    onSuccess: (data: QuizResponse) => {
      setQuizResponse(data);
    },
  });
};
