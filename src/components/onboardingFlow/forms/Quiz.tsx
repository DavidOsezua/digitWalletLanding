import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import toast from "react-hot-toast";
import { useSubmitQuiz } from "@/hooks/useMutations";
import { useGetQuiz, useGetUser } from "@/hooks/useQueries";
import type { Question } from "@/types/quiz";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/authStore";
import { useLogout } from "@/hooks/useAuth";
import { useEffect, type FC } from "react";
import Throbber from "@/components/ui/throbber";
import { useQuizStore } from "@/store/quizStore";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

type StepProps = {
  setStep: (step: string) => void;
};

const quizSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.number(),
      selectedOptionId: z
        .number({
          required_error: "Please select an option",
        })
        .min(1, "Please select a valid option"),
    })
  ),
});

type QuizFormData = z.infer<typeof quizSchema>;

export const Quiz: FC<StepProps> = ({ setStep }) => {
  const { quizResponse } = useQuizStore();
  const { user } = useAuthStore();
  if (quizResponse === null) {
    return <QuizForm setStep={setStep} />;
  }
  if (quizResponse?.score.passed) {
    return <QuizSuccess score={quizResponse.score.scorePercentage} />;
  }
  if (!quizResponse?.score.passed && user?.totalAttempts === 1) {
    return <QuizFailFirstAttempt />;
  }
  if (!quizResponse?.score.passed && user?.totalAttempts === 2) {
    return <QuizFailSecondAttempt />;
  }
};

const QuizForm: FC<StepProps> = ({ setStep }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: submitQuiz, isPending: isSubmitting } = useSubmitQuiz();
  useGetUser();
  const { data: quiz, isLoading: isLoadingQuiz } = useGetQuiz();
  const form = useForm<QuizFormData>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      answers: [],
    },
  });

  useEffect(() => {
    if (quiz?.quiz?.questions) {
      form.reset({
        answers: quiz.quiz.questions.map((q) => ({
          questionId: q.id,
          selectedOptionId: undefined,
        })),
      });
    }
  }, [quiz, form]);

  const onSubmit = async (data: QuizFormData) => {
    try {
      await submitQuiz({
        quizId: quiz?.quiz.id ?? 0,
        answers: data.answers.filter((a) => a.selectedOptionId),
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  if (isLoadingQuiz) {
    return (
      <div className="w-full h-32 flex items-center justify-center">
        <Throbber />
      </div>
    );
  }
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-8">
          {quiz?.quiz.questions.map((question, index) => (
            <QuizItem key={question.id} question={question} index={index} />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Button
            type="button"
            variant={"outline"}
            onClick={() => setStep("business-form-8")}
            className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Go Back
          </Button>
          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
            className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors hover:bg-primary-300/90"
          >
            Continue
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

const QuizItem = ({
  question,
  index,
}: {
  question: Question;
  index: number;
}) => {
  const form = useFormContext();
  return (
    <div key={question.id} className="">
      <FormField
        control={form.control}
        name={`answers.${index}.selectedOptionId`}
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-sm font-semibold">
              {question?.question}
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={(value) => {
                  field.onChange(parseInt(value));
                }}
                value={field.value?.toString()}
                className="grid grid-cols-2 gap-2"
              >
                {question?.options.map((option) => (
                  <FormItem
                    key={option.id}
                    className="flex items-start space-x-2 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem
                        id={option.id.toString()}
                        value={option.id.toString()}
                      />
                    </FormControl>
                    <Label
                      htmlFor={option.id.toString()}
                      className="font-normal text-xs"
                    >
                      {option.text}
                    </Label>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

const QuizSuccess = ({ score }: { score: number }) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="text-xl">
        Hi, {user?.firstName}
        <br />
        Thanks for completing your Appropriateness Assesment
      </h3>
      <div className="mt-4 font-semibold text-xl">
        Result: Passed ({score}%)
      </div>
      <p className="mt-4">
        You've demonstrated a sufficient understanding of the risks involved in
        dealing with qualifying cryptoassests. You are now eligble to access and
        use DigitWallet's services.
        <br />
        <br />
        You can now proceed to your account and begin exploring our platform.{" "}
        <br />
        <br />
        If you have any questions or would like support, our team is here to
        help. <br />
        <br />
        <span className="font-semibold">DigitWallet Support</span>
      </p>
      <div className="mt-6 flex justify-end">
        <Button
          onClick={() => navigate("/ukfinance")}
          className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors hover:bg-primary-300/90"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

const QuizFailSecondAttempt = () => {
  const { user } = useAuthStore();
  const logout = useLogout();

  return (
    <div>
      <h3 className="text-xl">
        Hi, {user?.firstName}
        <br />
        Thanks for completing your Appropriateness Assessment
      </h3>
      <div className="mt-4 font-semibold text-xl">Result: Not Passed</div>
      <p className="mt-4">
        Your responses suggest that you may not fully understand the key risks
        involved in engaging with qualifying cryptoassets. The FCA's financial
        promotion rules require us to be unable to offer access to our services
        at this time.
        <br />
        <br />
        You can take this test again after 24 hours have passed.
        <br />
        <br />
        If you have any questions or would like support, our team is here to
        help. <br />
        <br />
        <span className="font-semibold">DigitWallet Support</span>
      </p>
      <div className="flex justify-end">
        <Button
          type="button"
          variant={"outline"}
          onClick={() => logout}
          className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

const QuizFailFirstAttempt = () => {
  const { user } = useAuthStore();
  const logout = useLogout();
  const { setQuizResponse } = useQuizStore();

  return (
    <div>
      <h3 className="text-xl">
        Hi, {user?.firstName}
        <br />
        Thanks for completing your Appropriateness Assessment
      </h3>
      <div className="mt-4 font-semibold text-xl">Result: Not Passed</div>
      <p className="mt-4">
        Your responses suggest that you may not fully understand the key risks
        involved in engaging with qualifying cryptoassets. As part of our
        regulatory obligations, and in line with the FCA's financial promotion
        rules, we're unable to offer access to our services at this time.
        <br />
        <br />
        You can take the test one more time before needing to wait 24 hours to
        try again.
        <br />
        <br />
        We encourage you to review educational resources to deepen your
        understanding of the risks and features associated with cryptoassets.
        Once you have the opportunity to retake the assessment.
        <br />
        <br />
        If you have any questions or need support, our team is here to help.{" "}
        <br />
        <br />
        <span className="font-semibold">DigitWallet Support</span>
      </p>
      <div className="mt-4 flex items-center justify-between">
        <Button
          onClick={() => setQuizResponse(null)}
          className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors hover:bg-primary-300/90"
        >
          Try Again
        </Button>
        <Button
          type="button"
          variant={"outline"}
          onClick={() => logout}
          className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Log out
        </Button>
      </div>
    </div>
  );
};
