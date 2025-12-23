import { getUser } from "@/services/AuthService";
import { getQuiz } from "@/services/QuizService";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

export const useGetQuiz = () =>
  useQuery({
    queryKey: ["quiz"],
    queryFn: getQuiz,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: true,
    refetchInterval: false,
  });
