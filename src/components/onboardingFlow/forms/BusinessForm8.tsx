import { useFormContext } from "react-hook-form";
import { type FC } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FormSchema } from "@/pages/Onboarding";
import { Button } from "@/components/ui/button";
import { useOnboard } from "@/hooks/useMutations";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router";

interface StepProps {
  setStep: (step: string) => void;
}

export const BusinessForm8: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext<FormSchema>();
  const investorType = form.watch("investorType");

  const investorDetails = {
    "high-net-worth":
      "High-net-worth Investor: You have an annual salary of £100k or more OR net assets of £250k or more",
    sophisticated:
      "Sophisticated Investor: In the last 3 years you have received a certificate from an authorised firm confirming you understand the risks involved with cryptocurrency investments.",
    restricted:
      "Restricted Investor: In the last 12 months, you invested 10% or less of your net assets in high-risk investments AND in the next 12 months you intend to limit your investment in high-risk investments to less than 10% of your total net assets",
  };

  const { mutateAsync: save, isPending: isSaving } = useOnboard();
  const [, setSearchParams] = useSearchParams();
  const stepFields = ["investorType"] as const;

  const onSubmit = async (data: Partial<FormSchema>) => {
    const isValid = await form.trigger(stepFields);
    if (!isValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
    try {
      await save({ ...data, stepCompleted: 9,  });
      if (investorType === "high-net-worth") {
        setSearchParams({ s: "9" });
        setStep("hni-statement");
      }
      if (investorType === "restricted") {
        setSearchParams({ s: "10" });
        setStep("ri-statement");
      }
      if (investorType === "sophisticated") {
        setSearchParams({ s: "11" });
        setStep("si-statement");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name="investorType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    To begin with, what kind of investor are you?
                  </FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select investor type">
                        {field.value === "high-net-worth" &&
                          "High-net-worth Investor"}
                        {field.value === "sophisticated" &&
                          "Sophisticated Investor"}
                        {field.value === "restricted" && "Restricted Investor"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="max-w-2xl">
                      <SelectItem value="high-net-worth">
                        <div className="flex flex-col">
                          <span className="font-medium">
                            High-net-worth Investor
                          </span>
                          <span className="text-sm text-muted-foreground">
                            You have an annual salary of £100k or more OR net
                            assets of £250k or more
                          </span>
                        </div>
                      </SelectItem>
                      <SelectItem value="sophisticated">
                        <div className="flex flex-col">
                          <span className="font-medium">
                            Sophisticated Investor
                          </span>
                          <span className="text-sm text-muted-foreground">
                            In the last 3 years you have received a certificate
                            from an authorised firm confirming you understand
                            the risks involved with cryptocurrency investments.
                          </span>
                        </div>
                      </SelectItem>
                      <SelectItem value="restricted">
                        <div className="flex flex-col">
                          <span className="font-medium">
                            Restricted Investor
                          </span>
                          <span className="text-sm text-muted-foreground">
                            In the last 12 months, you invested 10% or less of
                            your net assets in high-risk investments AND in the
                            next 12 months you intend to limit your investment
                            in high-risk investments to less than 10% of your
                            total net assets
                          </span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {investorType && (
              <div className="mt-2 bg-[#161b33]/50 rounded ">
                <p className="text-sm text-white">
                  {
                    investorDetails[
                      investorType as keyof typeof investorDetails
                    ]
                  }
                </p>
              </div>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              type="button"
              variant={"outline"}
              onClick={() => {
                setStep("business-form-7");
                setSearchParams({ s: "7" });
              }}
              className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Go Back
            </Button>
            <Button
              type="submit"
              isLoading={isSaving}
              className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors hover:bg-primary-300/90"
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
