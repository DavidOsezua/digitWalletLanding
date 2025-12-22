import { useFormContext } from "react-hook-form";
import { type FC } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FormSchema } from "@/pages/Onboarding";
import { Button } from "@/components/ui/button";
import { useOnboard } from "@/hooks/useMutations";
import toast from "react-hot-toast";

type StepProps = {
  setStep: (step: string) => void;
};

export const BusinessForm6: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext<FormSchema>();
  const { mutateAsync: save, isPending: isSaving } = useOnboard();
  const onSubmit = async (data: Partial<FormSchema>) => {
    try {
      await save({ ...data, stepCompleted: 7 });
      setStep("business-form-7");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <>
      <h3 className="text-xl font-medium">Certification</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mt-6 space-y-4">
            <p className="text-sm leading-relaxed">
              I, the undersigned, certify that the above information is true and
              authentic to date and the documents presented are true and
              complete. I also authorize DigitalWallet s.r.o. to make all
              necessary inquiries to confirm the information.
              <br />
              <br />
              We further authorize DigitalWallet s.r.o. to disclose and share
              any information and agree to the regulatory requirements,
              including due diligence and updates to the information, and agree
              to provide any additional information or documents referred to
              above.
              <br />
              <br />
              I/We declare that money laundering operations are illegal.
              Therefore, DigitalWallet s.r.o. shall not use this account for
              general special terms. I also give my consent to the use of this
              account.
            </p>
            <div className="flex gap-3 *:grow">
              <FormField
                control={form.control}
                name="undertakerFirstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input className="border-[#DAE1EA66]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="undertakerLastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input className="border-[#DAE1EA66]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="undertakerDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Today's date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      className="border-[#DAE1EA66]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              type="button"
              variant={"outline"}
              onClick={() => setStep("business-form-5")}
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
