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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import type { FormSchema } from "@/pages/Onboarding";
import toast from "react-hot-toast";
import { useOnboard } from "@/hooks/useMutations";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router";
import { nationalities } from "@/lib/nationalities";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type StepProps = {
  setStep: (step: string) => void;
};

export const BusinessForm4: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext<FormSchema>();
  const [, setSearchParams] = useSearchParams();

  const { mutateAsync: save, isPending: isSaving } = useOnboard();
  const stepFields = [
    "currencies",
    "purposeOfAccount",
    "expectedAnnualVolume",
    "countriesOfTransaction",
    "expectedNumberOfMonthlyTransactions",
    "isAccountHolderBeneficialOwner",
    "nationality",
    "natureOfRelationWithAccountHolder",
    "beneficiaryFirstName",
    "beneficiaryLastName",
  ] as const;

  const onSubmit = async (data: Partial<FormSchema>) => {
    const isValid = await form.trigger(stepFields);
    if (!isValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
    try {
      await save({ ...data, stepCompleted: 4 });
      setSearchParams({ s: "5" });
      setStep("business-form-5");
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
            <FormField
              control={form.control}
              name="currencies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account currency required</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full border-[#DAE1EA66]">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="USD">USD ($)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 *:w-1/2">
              <FormField
                control={form.control}
                name="purposeOfAccount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose of opening the account</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectedAnnualVolume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Expected annual volume of dealings with DigitalWallet (£)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="border-[#DAE1EA66]"
                        placeholder="Enter amount"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="countriesOfTransaction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Countries you expect to send payments from
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={3}
                      className="border-[#DAE1EA66]"
                      placeholder="Enter description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expectedNumberOfMonthlyTransactions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected number of monthly transactions</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="border-[#DAE1EA66]"
                      placeholder="Enter number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isAccountHolderBeneficialOwner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I, the undersigned, hereby certify that</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) =>
                        field.onChange(value === "accountHolder")
                      }
                      defaultValue={
                        field.value ? "accountHolder" : "someoneElse"
                      }
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="accountHolder" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          The account holder is the real beneficiary of the fund
                          deposited with DigitalWallet s.r.o
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="someoneElse" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          The real beneficiary of the fund deposited with
                          DigitalWallet s.r.o is for someone else
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!form.watch("isAccountHolderBeneficialOwner") && (
              <>
                <div className="flex gap-3 *:w-1/2">
                  <FormField
                    control={form.control}
                    name="nationality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nationality</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full border-[#DAE1EA66]">
                              <SelectValue placeholder="Please select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {nationalities.map((nationality) => (
                              <SelectItem
                                key={nationality.value}
                                value={nationality.value}
                              >
                                {nationality.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="natureOfRelationWithAccountHolder"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Nature of the relationship with the account holder
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="border-[#DAE1EA66]"
                            placeholder="Enter description"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-3 *:w-1/2">
                  <FormField
                    control={form.control}
                    name="beneficiaryFirstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            {...field}
                            className="border-[#DAE1EA66]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="beneficiaryLastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input
                            className="border-[#DAE1EA66]"
                            placeholder="Doe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              type="button"
              variant={"outline"}
              onClick={() => {
                setStep("business-form-3");
                setSearchParams({ s: "3" });
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
