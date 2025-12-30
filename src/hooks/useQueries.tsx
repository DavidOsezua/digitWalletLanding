import { getUser } from "@/services/AuthService";
import { getIpAdress } from "@/services/OnboardingService";
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

export const useGetIp = () =>
  useQuery({
    queryKey: ["ip"],
    queryFn: getIpAdress,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: true,
    refetchInterval: false,
  });
