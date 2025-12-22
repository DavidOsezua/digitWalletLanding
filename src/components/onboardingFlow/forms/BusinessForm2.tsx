import { useFormContext } from "react-hook-form";
import { type FC } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { FormSchema } from "@/pages/Onboarding";
import toast from "react-hot-toast";
import { useOnboard } from "@/hooks/useMutations";
import { Button } from "@/components/ui/button";

type StepProps = {
  setStep: (step: string) => void;
};

export const BusinessForm2: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext<FormSchema>();
  const { mutateAsync: save, isPending: isSaving } = useOnboard();
  const onSubmit = async (data: Partial<FormSchema>) => {
    try {
      await save({ ...data, stepCompleted: 2 });
      setStep("business-form-3");
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
          <div className="mt-6 space-y-4">
            <h3>Company Address</h3>
            <div className="grid grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name="companyAddress1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address Line 1</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter street address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyAddress2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address Line 2</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter street address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyCity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter city"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyState"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State/Province</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter state/province"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyZipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal/Zip Code</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter postal/zip code"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyCountry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-[#DAE1EA66]">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="GB">United Kingdom</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-6 space-y-4 grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="positionInCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position in Company</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Please input N/A if applying as individual"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="percentageOfOwnership"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Percentage of Company Ownership (25%+)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="border-[#DAE1EA66]"
                        placeholder="Please input N/A if applying as individual"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ipAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IP Address</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter IP address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter website url"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="employmentStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employment Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || "employed"}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-[#DAE1EA66]">
                          <SelectValue placeholder="Select employment status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="self-employed">
                          Self-Employed
                        </SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Role</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter role"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="annualIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Income</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="border-[#DAE1EA66]"
                        placeholder="Please input N/A if applying as individual"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sourceOfFunds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Other Source of Income</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Please input N/A if applying as individual"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="descriptionOfBusinessActivity"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Description of Business Activities</FormLabel>
                    <FormControl>
                      <Textarea
                        className="border-[#DAE1EA66] min-h-25"
                        placeholder="Please input N/A if applying as individual"
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
                onClick={() => setStep("business-form-1")}
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
          </div>
        </form>
      </Form>
    </>
  );
};
