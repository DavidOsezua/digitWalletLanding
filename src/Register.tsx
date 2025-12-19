import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { useState, type FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Checkbox } from "./components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { CloudUpload } from "lucide-react";

type StepProps = {
  setStep: (step: string) => void;
};

const FileUpload: FC<{
  onChange: (url: string) => void;
  accept?: string;
  multiple?: boolean;
}> = ({ onChange, accept = "*", multiple = false }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle upload to Cloudinary here and call onChange with URL
      // Placeholder: uploadToCloudinary(e.dataTransfer.files[0]).then(onChange);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle upload to Cloudinary here and call onChange with URL
      // Placeholder: uploadToCloudinary(e.target.files[0]).then(onChange);
    }
  };

  return (
    <div
      className={`relative border-2 border-dashed rounded border-[#DAE1EA66] p-6 text-center bg-[#1E2440] cursor-pointer hover:border-[#819AD5] transition-colors ${
        dragActive ? "border-blue-400 bg-blue-50/10" : ""
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => document.getElementById("file-input")?.click()}
    >
      <input
        id="file-input"
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
      />
      <div className="flex gap-4 justify-center items-center">
        <CloudUpload className="h-8 w-8 text-[#6294FF]" />
        <div>
          <p className="text-sm font-semibold text-white mb-1">Browse Files</p>
          <p className="text-xs text-gray-400">Drag and drop files</p>
        </div>
      </div>
    </div>
  );
};

const Register = () => {
  const businessForm = useForm();
  const [step, setStep] = useState("confirm");
  return (
    <div className="py-6 px-4">
      <div className="rounded-xl p-4 md:p-6 max-w-3xl mx-auto border border-[#49525333] text-white bg-[#161b33]">
        <FormProvider {...businessForm}>
          <form>
            {step === "confirm" && <Confirm setStep={setStep} />}
            {step === "business-form-1" && <BusinessForm1 setStep={setStep} />}
            {step === "business-form-2" && <BusinessForm2 setStep={setStep} />}
            {step === "business-form-3" && <BusinessForm3 setStep={setStep} />}
            {step === "business-form-4" && <BusinessForm4 setStep={setStep} />}
            {step === "business-form-5" && <BusinessForm5 setStep={setStep} />}
            {step === "business-form-6" && <BusinessForm6 setStep={setStep} />}
            {step === "business-form-7" && <BusinessForm7 setStep={setStep} />}
            {step === "business-form-8" && <BusinessForm8 setStep={setStep} />}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

const Confirm: FC<StepProps> = ({ setStep }) => {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="lg:text-4xl text-2xl text-white">
        Do you wish to continue with your investment journey?
      </h3>

      <p className="mt-4">
        You will now be entered into a 24 hour cooling-off period as required by
        UK regulations. Please feel free to browse, but during this 24 hour
        cooling-off period you will not be able to engage with our services.
        <br />
        While you wait, we will ask you to complete a few steps. You must
        complete these to enable you to engage with our services.
      </p>

      <Link className="font-semibold mt-2 text-[#6294FF]" to="/register">
        Click to learn more
      </Link>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Go Back
        </button>
        <button
          onClick={() => setStep("business-form-1")}
          className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Next
        </button>
      </div>
    </>
  );
};

const BusinessForm1: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext();
  return (
    <>
      <h3 className="text-xl font-medium">Business Form</h3>
      <Form {...form}>
        <form>
          <div className="space-y-4">
            <h3>Basic Profile</h3>
            <div className="flex gap-3 *:grow">
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
            <div className="flex gap-3 *:grow">
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
            <div className="flex gap-3 *:grow">
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
            <div className="flex gap-3 *:grow">
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
            <div className="flex gap-3 *:grow">
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
                    <FormControl>
                      <Input
                        className="border-[#DAE1EA66]"
                        placeholder="Select a country"
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
              name="citizenship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Citizenship</FormLabel>
                  <FormControl>
                    <Input
                      className="border-[#DAE1EA66]"
                      placeholder="Please Select"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-6 space-y-4">
            <h3>Account Setup</h3>
            <div className="flex gap-3 *:grow">
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
                        <SelectItem value="personal">Personal</SelectItem>
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
                        <SelectItem value="None">None</SelectItem>
                        <SelectItem value="llc">LLC</SelectItem>
                        <SelectItem value="corporation">Corporation</SelectItem>
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
            <div className="flex gap-3 *:grow">
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
            <button
              type="button"
              onClick={() => setStep("confirm")}
              className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Go Back
            </button>
            <button
              type="button"
              onClick={() => setStep("business-form-2")}
              className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Next
            </button>
          </div>
        </form>
      </Form>
    </>
  );
};

const BusinessForm2: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext();
  return (
    <>
      <h3 className="text-xl font-medium">Business Form</h3>
      <Form {...form}>
        <form>
          <div className="mt-6 space-y-4">
            <h3>Company Address</h3>
            <div className="flex gap-3 *:grow">
              <FormField
                control={form.control}
                name="companyAddressLine1"
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
                name="companyAddressLine2"
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
            </div>
            <div className="flex gap-3 *:grow">
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
            </div>
            <div className="flex gap-3 *:grow">
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
                        {/* Add more countries as needed */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex gap-3 *:grow">
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
                name="percentageOwnership"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Percentage of Company Ownership (25%+)
                    </FormLabel>
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
            </div>
            <div className="flex gap-3 *:grow">
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
            </div>
            <div className="flex gap-3 *:grow">
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
                        {/* Add more options as needed */}
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
            </div>
            <div className="flex gap-3 *:grow">
              <FormField
                control={form.control}
                name="annualIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Income</FormLabel>
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
                name="otherIncome"
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
            </div>
            <FormField
              control={form.control}
              name="businessActivities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description of Business Activities</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border-[#DAE1EA66] min-h-[100px]"
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
            <button
              type="button"
              onClick={() => setStep("business-form-1")}
              className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Go Back
            </button>
            <button
              type="button"
              onClick={() => setStep("business-form-3")}
              className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Next
            </button>
          </div>
        </form>
      </Form>
    </>
  );
};

const BusinessForm3: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext();
  return (
    <>
      <h3 className="text-xl font-medium">Business Form</h3>
      <Form {...form}>
        <form>
          <div className="space-y-4">
            <div className="flex gap-3 *:grow">
              <FormField
                control={form.control}
                name="politicalPositionOrMembership"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Have you or any of your first-degree relatives held any
                      political position or membership in any political party?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-[#DAE1EA66]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="boardMemberPEP"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Does any board member belong to the Politically Exposed
                      Persons (PEPs) category?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-[#DAE1EA66]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="pepDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>If Yes, please provide details</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border-[#DAE1EA66] min-h-[100px]"
                      placeholder="Enter description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep("business-form-2")}
              className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Go Back
            </button>
            <button
              type="button"
              onClick={() => setStep("business-form-4")}
              className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Next
            </button>
          </div>
        </form>
      </Form>
    </>
  );
};

const BusinessForm4: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext();
  return (
    <>
      <h3 className="text-xl font-medium">Business Form</h3>
      <Form {...form}>
        <form>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="accountCurrency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account currency required</FormLabel>
                  <FormControl>
                    <div className="flex flex-wrap gap-2">
                      <label className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value?.includes("GBP")}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...(field.value || []), "GBP"]
                              : field.value?.filter((v: string) => v !== "GBP");
                            field.onChange(newValue);
                          }}
                        />
                        <span>GBP (£)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value?.includes("EUR")}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...(field.value || []), "EUR"]
                              : field.value?.filter((v: string) => v !== "EUR");
                            field.onChange(newValue);
                          }}
                        />
                        <span>EUR (€)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value?.includes("USD")}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...(field.value || []), "USD"]
                              : field.value?.filter((v: string) => v !== "USD");
                            field.onChange(newValue);
                          }}
                        />
                        <span>USD ($)</span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 *:grow">
              <FormField
                control={form.control}
                name="purposeOfAccount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose of opening the account</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-[#DAE1EA66]">
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="investment">Investment</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        {/* Add more as needed */}
                      </SelectContent>
                    </Select>
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
              name="countriesPaymentsFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Countries you expect to send payments from
                  </FormLabel>
                  <FormControl>
                    <Textarea
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
              name="expectedMonthlyTransactions"
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
              name="realBeneficiary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Real Beneficiary</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full border-[#DAE1EA66]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="accountHolder">
                        The account holder is the real beneficiary of the fund
                        deposited with DigitalWallet s.r.o
                      </SelectItem>
                      <SelectItem value="someoneElse">
                        The real beneficiary of the fund deposited with
                        DigitalWallet s.r.o is for someone else
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 *:grow">
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
                        <SelectItem value="GB">British</SelectItem>
                        <SelectItem value="US">American</SelectItem>
                        {/* Add more */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="relationshipNature"
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
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep("business-form-3")}
              className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Go Back
            </button>
            <button
              type="button"
              onClick={() => setStep("business-form-5")}
              className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Next
            </button>
          </div>
        </form>
      </Form>
    </>
  );
};

const BusinessForm5: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext();
  return (
    <>
      <h3 className="text-xl font-medium">Upload Documents</h3>
      <Form {...form}>
        <form>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <FormField
              control={form.control}
              name="proofOfIdentity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Proof of Identity (Passport/Driver's License)
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-sm text-gray-400 mt-1">
                    Please upload any of your documents if you are applying as
                    individual
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="proofOfAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Proof of Address (Dated within last 3 months)
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-sm text-gray-400 mt-1">
                    Please upload any of your documents if you are applying as
                    individual (e.g., utility bill, bank statement issued within
                    last 3 months)
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="certificateOfIncorporation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Upload your Certificate of Incorporation
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-sm text-gray-400 mt-1">
                    Please upload N/A if you are applying as individual
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="articlesOfAssociation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload your Articles of Association</FormLabel>
                  <FormControl>
                    <FileUpload
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-sm text-gray-400 mt-1">
                    Please upload N/A if you are applying as individual (signed
                    by director or authorised signatory signed by director)
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registerOfDirectors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Upload Register of Directors (signed by director)
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-sm text-gray-400 mt-1">
                    Please upload N/A if you are applying as individual
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registerOfShareholders"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Upload Shareholder list (signed by director)
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-sm text-gray-400 mt-1">
                    Please upload N/A if you are applying as individual
                  </p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organizationalChart"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Upload company organizational chart with percentage
                    ownership
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-sm text-gray-400 mt-1">
                    Please upload N/A if you are applying as individual
                  </p>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep("business-form-4")}
              className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Go Back
            </button>
            <button
              type="button"
              onClick={() => setStep("business-form-6")}
              className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Next
            </button>
          </div>
        </form>
      </Form>
    </>
  );
};

const BusinessForm6: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext();
  return (
    <>
      <h3 className="text-xl font-medium">Certification</h3>
      <Form {...form}>
        <form>
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
                name="certFirstName"
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
                name="certLastName"
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
              name="certDate"
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
            <button
              type="button"
              onClick={() => setStep("business-form-5")}
              className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Go Back
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setStep("business-form-7")}
              className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Next
            </button>
          </div>
        </form>
      </Form>
    </>
  );
};

const BusinessForm7: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext();
  const { watch } = form;
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const fullName = `${firstName || ""} ${lastName || ""}`.trim() || "User";

  const handleProceed = () => {
    setStep("business-form-8");
  };

  const handleClose = () => {
    // Close account or navigate away
    setStep("confirm"); // Or navigate to dashboard/close
  };

  return (
    <>
      <div className="text-white bg-[#161b33] rounded-xl p-6">
        <p className="text-lg font-medium mb-4">
          {fullName}, this is a high-risk investment. How would you feel if you
          lost the money you're about to invest? Take 2 minutes to{" "}
          <Link to="/risk-assessment" className="text-[#6294FF] underline">
            learn more
          </Link>
          .
        </p>
        <p className="text-sm mb-6">Would you like to proceed?</p>
        <div className="flex gap-4 justify-start text-sm mb-6">
          <div>
            <div>Yes</div>
            <button
              onClick={handleProceed}
              className="bg-[#6294FF] text-white font-semibold px-4 py-2 mt-2 rounded-full transition-colors"
            >
              Take the assessment
            </button>
          </div>
          <div>
            <div>No</div>
            <button
              onClick={handleClose}
              className="border border-[#6294FF] text-[#6294FF] font-semibold px-4 py-2 mt-2 rounded-full transition-colors"
            >
              Close Account
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="/website" className="text-[#6294FF] text-sm">
            Checkout our website
          </Link>
        </div>
      </div>
    </>
  );
};

const BusinessForm8: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext();
  const investorType = form.watch("investorType");

  const investorDetails = {
    "high-net-worth":
      "High-net-worth Investor: You have an annual salary of £100k or more OR net assets of £250k or more",
    sophisticated:
      "Sophisticated Investor: In the last 3 years you have received a certificate from an authorised firm confirming you understand the risks involved with cryptocurrency investments.",
    restricted:
      "Restricted Investor: In the last 12 months, you invested 10% or less of your net assets in high-risk investments AND in the next 12 months you intend to limit your investment in high-risk investments to less than 10% of your total net assets",
  };

  return (
    <>
      <h3 className="text-xl font-medium">Investor Type</h3>
      <Form {...form}>
        <form>
          <div className="mt-6 space-y-4">
            <FormField
              control={form.control}
              name="investorType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    To begin with, what kind of investor are you?
                  </FormLabel>
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
                      <SelectItem value="high-net-worth">
                        High-net-worth Investor
                      </SelectItem>
                      <SelectItem value="sophisticated">
                        Sophisticated Investor
                      </SelectItem>
                      <SelectItem value="restricted">
                        Restricted Investor
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {investorType && (
              <div className="mt-4 bg-[#161b33]/50 rounded ">
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
            <button
              type="button"
              onClick={() => setStep("business-form-7")}
              className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Go Back
            </button>

            <button
              type="button"
              onClick={() => setStep("business-form-9")} // Assuming next step
              className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Next
            </button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Register;
