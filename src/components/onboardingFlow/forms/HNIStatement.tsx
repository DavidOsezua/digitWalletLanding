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
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "react-router";

type StepProps = {
  setStep: (step: string) => void;
};

export const HNIStatement: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext<FormSchema>();
  const { mutateAsync: save, isPending: isSaving } = useOnboard();
  const [, setSearchParams] = useSearchParams();

  const onSubmit = async (data: Partial<FormSchema>) => {
    try {
      await save({ ...data, stepCompleted: 9 });
      setSearchParams({ s: "9" });
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
            High-Net-Worth Investor Statement
          </h3>
          <div className="space-y-6 text-sm text-dark-text-100 ">
            <p>
              Please confirm whether you qualify as a high-net-worth investor on
              the basis that <span className="font-bold">A</span> and
              <span className="font-bold"> B</span> apply to you
            </p>
            <p>In the last financial year you have:</p>

            {/* A. Annual Income */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FormField
                  control={form.control}
                  name="hasAnnualIncomeAbove100k"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="inline-block ">
                        A. An annual{" "}
                        <span className="font-bold">
                          income of £100,000 or more
                        </span>
                        ? (Does NOT include any one-off income)
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
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label className="text-xs font-normal" htmlFor="no">
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="netIncome"
                  render={({ field }) => (
                    <FormItem className="mt-2.5">
                      <FormLabel>
                        If yes, please specify your income (as defined above) to
                        the nearest £10,000 in the last financial year
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
            </div>

            {/* B. Net Assets */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FormField
                  control={form.control}
                  name="hasAnnualIncomeAbove250k"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="inline-block ">
                        B.{" "}
                        <span className="font-bold">
                          Net assets of £250,000 or more
                        </span>{" "}
                        ? Net assets do <span className="font-bold">NOT</span>{" "}
                        include: your home (primary residence), your pension (or
                        any pension withdrawals) or any rights under qualifying
                        contracts of insurance.
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
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label className="text-xs font-normal" htmlFor="no">
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="netAsset"
                  render={({ field }) => (
                    <FormItem className="mt-2.5 text-xs">
                      <FormLabel>
                        If yes, please specify your net assets (as defined
                        above) to the nearest £10,000 in the last financial
                        year
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
            </div>

            <div className="flex items-center space-x-2">
              <FormField
                control={form.control}
                name="qualifiedAsHNINotAppliedToMe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="inline-block ">
                      C) None of these apply to me.
                    </FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          disabled={
                            form.watch("hasAnnualIncomeAbove250k") === true ||
                            form.watch("hasAnnualIncomeAbove100k") === true
                          }
                          checked={field.value || false}
                          onCheckedChange={field.onChange}
                          className="size-3 rounded-full border border-gray-400 data-[state=checked]:bg-transparent data-[state=checked]:border-primary-300 flex items-center justify-center [&_svg]:hidden relative data-[state=checked]:after:content-[''] data-[state=checked]:after:absolute data-[state=checked]:after:inset-0.5 data-[state=checked]:after:rounded-full data-[state=checked]:after:bg-primary-300"
                        />
                        <span className="text-xs">Yes</span>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Confirmation Statement */}
            <div className="mt-8 space-y-4">
              <p>Please confirm the following statement:</p>
              <p className="leading-relaxed">
                <span className="font-semibold">
                  I accept that being a high-net-worth investor will expose me
                  to promotions for investment where there is a significant risk
                  of losing all the money I invest.
                </span>{" "}
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
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
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
              onClick={() => {
                setStep("business-form-8");
                setSearchParams({ s: "8" });
              }}
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
