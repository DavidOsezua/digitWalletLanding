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
import toast from "react-hot-toast";
import { useOnboard } from "@/hooks/useMutations";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SignaturePad } from "@/components/SignaturePad";

type StepProps = {
  setStep: (step: string) => void;
};

export const RIStatement: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext<FormSchema>();
  const { mutateAsync: save, isPending: isSaving } = useOnboard();

  const onSubmit = async (data: Partial<FormSchema>) => {
    try {
      await save({ ...data, stepCompleted: 9 });
      setStep("statement-result");
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
          <h3 className="text-xl font-medium mb-6">
            Restricted Investor Statement
          </h3>
          <div className="space-y-6 text-sm text-dark-text-100 ">
            <p className="">
              Please confirm whether you qualify as a restricted investor on the
              basis that <span className="font-bold">A</span> and{" "}
              <span className="font-bold">B</span> apply to you.
            </p>
            <p>In the last financial year you have:</p>

            {/* A. Annual Income */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FormField
                  control={form.control}
                  name="hasInvestedLessThan10PercentInHighRiskAssets"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="inline-block ">
                        A. In the{" "}
                        <span className="font-bold">past twelve months</span>,
                        have you invested less than 10% of your net assets in
                        high-risk investments (as defined below)?
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          className="mt-2.5"
                          onValueChange={(value) =>
                            field.onChange(value === "yes")
                          }
                          defaultValue={
                            field.value === true
                              ? "yes"
                              : field.value === false
                              ? "no"
                              : undefined
                          }
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label
                              className="text-xs font-normal"
                              htmlFor="yes"
                            >
                              Yes (I have invested less than 10% of my net
                              assets)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label className="text-xs font-normal" htmlFor="no">
                              No (I have invested more than 10% of my net
                              assets)
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              {form.watch("hasInvestedLessThan10PercentInHighRiskAssets") && (
                <div className="">
                  <FormField
                    control={form.control}
                    name="percentageInvestedInLast12Months"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel>
                          Over the last twelve months roughly what percentage of
                          your net assets have you invested in high-risk
                          investments (as defined below)?
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            className="border-[#DAE1EA66] w-48"
                            placeholder="Enter amount"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>

            {/* B. Net Assets */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FormField
                  control={form.control}
                  name="intendsToInvestLessThan10PercentInHighRiskAssets"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="inline-block ">
                        B.In the
                        <span className="font-bold">
                          {" "}
                          next twelve months
                        </span>{" "}
                        do you intend to limit your investment in high-risk
                        investments (as defined below) to less than 10% of your
                        net assets?
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          className="mt-2.5 text-xs"
                          onValueChange={(value) =>
                            field.onChange(value === "yes")
                          }
                          defaultValue={
                            field.value === true
                              ? "yes"
                              : field.value === false
                              ? "no"
                              : undefined
                          }
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label
                              className="text-xs font-normal"
                              htmlFor="yes"
                            >
                              Yes (I intend to invest less than 10% of my net
                              assets)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label className="text-xs font-normal" htmlFor="no">
                              No (I intend to invest more than 10% of my net
                              assets)
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              {form.watch(
                "intendsToInvestLessThan10PercentInHighRiskAssets"
              ) && (
                <div className="">
                  <FormField
                    control={form.control}
                    name="percentageIntendToInvestInNext12Months"
                    render={({ field }) => (
                      <FormItem className="mt-2.5 text-xs">
                        <FormLabel>
                          Please specify your net assets (as defined above) to
                          the nearest £10,000 in the last financial year.
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            className="border-[#DAE1EA66] w-48"
                            placeholder="Enter amount"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>

            {/* Confirmation Statement */}
            <div className="mt-8 space-y-4">
              <p>Please confirm the following statement:</p>
              <p className="leading-6">
                Putting all your money into a single business or type of
                investment is risky. Spreading your money across different
                investments make you less dependent on any one to do well. You
                should not invest more than 10% of your net assets in high-risk
                investments. Doing so could expose you to significant losses.
                <br />
                For the purpose of this statement, net assets do NOT include:
                your home (primary residence) your pension (or any pension
                withdrawals) or any rights under qualifying contracts of
                insurance.
                <br />
                For the purpose of this statement, high-risk investments are:
                peer-to-peer (P2P) loans, investments based crowdfunding, units
                in a long term asset fund, cryptoassets (such as bitcoin);
                cryptoasset exchange traded notes; and unlisted debt and equity
                (such as companies not listed on an exchange like the London
                Stock Exchange).
                <br /> I confirm I qualify as a restricted investor on the basis
                that the following applies to me: Over the last 12 months I have
                invested the previously mentioned percentage of my net assets in
                high-risk investments AND in the next 12 months I intend to
                limit my investment in high-risk investments to less than the
                previously mentioned percentage of my total net assets.
                <br />{" "}
                <span className="font-bold">
                  {" "}
                  I accept that being a restricted investor will expose me to
                  promotions for investment where there is a risk of losing all
                  the money I invest.
                </span>
                I am aware that it is open to me to seek professional advice
                before making any investment in a high-risk investment.
              </p>
            </div>

            {/* Date and Name */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <FormField
                control={form.control}
                name="assesmentDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Today's date</FormLabel>
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

            {/* Signature */}
            <SignaturePad name="assesmentSignature" label="Signature" />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep("business-form-8")}
              className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Go Back
            </Button>

            <Button
              type="submit"
              disabled={isSaving}
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
