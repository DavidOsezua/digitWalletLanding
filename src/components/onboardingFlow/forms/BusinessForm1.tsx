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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FormSchema } from "@/pages/Onboarding";
import { useOnboard } from "@/hooks/useMutations";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router";
import { countries } from "@/lib/countries";
import { nationalities } from "@/lib/nationalities";

type StepProps = {
  setStep: (step: string) => void;
};

export const BusinessForm1: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext<FormSchema>();
  const [, setSearchParams] = useSearchParams();
  const { mutateAsync: save, isPending: isSaving } = useOnboard();
  const stepFields = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "dateOfBirth",
    "addressLine1",
    "addressLine2",
    "city",
    "state",
    "zipCode",
    "country",
    "citizenship",
    "accountType",
    "companyType",
    "companyName",
    "companyNumber",
    "dateOfIncorporation",
  ] as const;
  const onSubmit = async (data: Partial<FormSchema>) => {
    console.log(data);
    const isValid = await form.trigger(stepFields);
    if (!isValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
    try {
      await save({ ...data, stepCompleted: 1 });
      setSearchParams({ s: "2" });
      setStep("business-form-2");
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
            <h3>Basic Profile</h3>
            <div className="flex gap-3 *:w-1/2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter first name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter last name"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="border-[#DAE1EA66]"
                      placeholder="Enter email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 *:w-1/2">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        className="border-[#DAE1EA66]"
                        placeholder="Enter phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        type="date"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <h3>Personal Address</h3>
            <div className="flex gap-3 *:w-1/2">
              <FormField
                control={form.control}
                name="addressLine1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address Line 1</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter address line 1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="addressLine2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address Line 2</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Enter address line 2"
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
                name="city"
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
                name="state"
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
            </div>
            <div className="flex gap-3 *:w-1/2">
              <FormField
                control={form.control}
                name="zipCode"
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
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-[#DAE1EA66] w-full">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="citizenship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-[#DAE1EA66] w-1/2">
                        <SelectValue placeholder="Select citizenship" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {nationalities.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-6 space-y-4">
            <h3>Account Setup</h3>
            <div className="flex gap-3 *:w-1/2">
              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-[#DAE1EA66]">
                          <SelectValue placeholder="Select account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-[#DAE1EA66]">
                          <SelectValue placeholder="Select company type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="plc">
                          Public Limited Company (PLC)
                        </SelectItem>
                        <SelectItem value="ltd">
                          Limited Liability Company (LTD)
                        </SelectItem>
                        <SelectItem value="llp">
                          Limited Liability Partnership (LLP)
                        </SelectItem>
                        <SelectItem value="rc">Royal Charter (RC)</SelectItem>
                        <SelectItem value="cic">
                          Community Interest Company (CIC)
                        </SelectItem>
                        <SelectItem value="rtm">
                          Right to Manage Company (RTM)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      className="border-[#DAE1EA66]"
                      placeholder="Please input N/A if not applicable"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 *:w-1/2">
              <FormField
                control={form.control}
                name="companyNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Number</FormLabel>
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Please input N/A if not applicable"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateOfIncorporation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Incorporation</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        className="border-[#DAE1EA66]"
                        placeholder="Please input N/A if not applicable"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              type="button"
              variant={"outline"}
              onClick={() => setStep("confirm")}
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
