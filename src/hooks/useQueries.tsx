import { getQuiz } from "@/services/QuizService";
import { useQuery } from "@tanstack/react-query";

export const useGetQuiz = () =>
  useQuery({
    queryKey: ["quiz"],
    queryFn: getQuiz,
  });
