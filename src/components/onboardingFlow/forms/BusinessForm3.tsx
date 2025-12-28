import { useFormContext } from "react-hook-form";
import { type FC } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { FormSchema } from "@/pages/Onboarding";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useOnboard } from "@/hooks/useMutations";
import { useSearchParams } from "react-router";

type StepProps = {
  setStep: (step: string) => void;
};

export const BusinessForm3: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext<FormSchema>();
  const { mutateAsync: save, isPending: isSaving } = useOnboard();
  const [, setSearchParams] = useSearchParams();

  const stepFields = [
    "hasRelativeHoldPoliticalPosition",
    "doesMemberBelongsToPEP",
    "politicalPositionDetails",
  ] as const;

  const onSubmit = async (data: Partial<FormSchema>) => {
    const isValid = await form.trigger(stepFields);
    if (!isValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
    try {
      await save({ ...data, stepCompleted: 3 });
      setSearchParams({ s: "4" });
      setStep("business-form-4");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <>
      <h3 className="text-xl font-medium">Business Form</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="hasRelativeHoldPoliticalPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Have you or any of your first-degree relatives held any
                      political position or membership in any political party?
                    </FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value === "yes")}
                      defaultValue={field.value ? "yes" : "no"}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-[#DAE1EA66]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="doesMemberBelongsToPEP"
                render={({ field }) => (
                  <FormItem className="dark">
                    <FormLabel>
                      Does any board member belong to the Politically Exposed
                      Persons (PEPs) category?
                    </FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value === "yes")}
                      defaultValue={field.value ? "yes" : "no"}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-[#DAE1EA66]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* {form.watch("hasRelativeHoldPoliticalPosition") ||
              (form.watch("doesMemberBelongsToPEP") && ( */}
            <FormField
              control={form.control}
              name="politicalPositionDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>If Yes, please provide details</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border-[#DAE1EA66] min-h-25"
                      placeholder="Enter description"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ))} */}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              type="button"
              variant={"outline"}
              onClick={() => {
                setStep("business-form-2");
                setSearchParams({ s: "2" });
              }}
              className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Go Back
            </Button>
            <Button
              type="submit"
              isLoading={isSaving}
              disabled={isSaving}
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
