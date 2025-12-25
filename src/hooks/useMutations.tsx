import { onboard } from "@/services/OnboardingService";
import { updateProfile } from "@/services/ProfileService";
import { submitQuiz } from "@/services/QuizService";
import { useQuizStore } from "@/store/quizStore";
import type { QuizResponse } from "@/types/quiz";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

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

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["user"] });
      toast.success("Profile updated!");
    },
    onError: () => {
      toast.error("Failed to update profile!");
    },
  });
};
