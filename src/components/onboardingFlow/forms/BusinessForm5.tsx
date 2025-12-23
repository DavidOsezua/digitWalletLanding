import { useFormContext } from "react-hook-form";
import { useState, type FC } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { CloudUpload } from "lucide-react";
import type { FormSchema } from "@/pages/Onboarding";
import toast from "react-hot-toast";
import { useOnboard } from "@/hooks/useMutations";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router";

type StepProps = {
  setStep: (step: string) => void;
};

export const BusinessForm5: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext<FormSchema>();
  const [, setSearchParams] = useSearchParams();
  const { mutateAsync: save, isPending: isSaving } = useOnboard();
  const stepFields = [
    "proofOfIdentity",
    "companyProofOfAddress",
    "proofOfFunds1",
    "proofOfFunds2",
    "certificateOfIncorporation",
    "articlesOfAssociation",
    "registerOfDirectors",
    "authorizedSignatoryList",
    "shareholderList",
    "organizationalChartOfOwnership",
  ] as const;

  const onSubmit = async (data: Partial<FormSchema>) => {
    console.log("Validation errors:", form.formState.errors);
    const isValid = await form.trigger(stepFields);
    if (!isValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }
    try {
      await save({ ...data, stepCompleted: 5 });
      setSearchParams({ s: "7" });
      setStep("business-form-6");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <>
      <h3 className="text-xl font-medium">Upload Documents</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 items-start gap-4 mt-6">
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
                      inputId="proofOfIdentity-upload"
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please upload any of your documents if you are applying as
                    individual
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyProofOfAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Proof of Address (Dated within last 3 months)
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      inputId="companyProofOfAddress-upload"
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please upload any of your documents if you are applying as
                    individual (e.g., utility bill, bank statement issued within
                    last 3 months)
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="proofOfFunds1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proof of Funds ONE</FormLabel>
                  <FormControl>
                    <FileUpload
                      inputId="proofOfFunds1-upload"
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please upload TWO proofs of funds/wealth (Bank statement,
                    investment confirmations, service agreements, invoices,
                    payslips, loan agreements, sale agreements, dividend
                    statements etc)
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="proofOfFunds2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Proof of Funds TWO</FormLabel>
                  <FormControl>
                    <FileUpload
                      inputId="proofOfFunds2-upload"
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please upload TWO proofs of funds/wealth (Bank statement,
                    investment confirmations, service agreements, invoices,
                    payslips, loan agreements, sale agreements, dividend
                    statements etc)
                  </FormDescription>
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
                      inputId="certificateOfIncorporation-upload"
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please upload N/A if you are applying as individual
                  </FormDescription>
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
                      inputId="articlesOfAssociation-upload"
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please upload N/A if you are applying as individual (signed
                    by director or authorised signatory signed by director)
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registerOfDirectors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Upload your Register of Directors (signed by a director)
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      inputId="registerOfDirectors-upload"
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please upload N/A if you are applying as individual
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="authorizedSignatoryList"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Upload your copy of authorised signatory list (signed by a
                    director)
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      inputId="authorizedSignatoryList-upload"
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please upload N/A if you are applying as individual
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shareholderList"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Upload your shareholder list (signed by a director)
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      inputId="shareholderList-upload"
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please upload N/A if you are applying as individual
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organizationalChartOfOwnership"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Upload your Company organizational chart with percentage of
                    ownership
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      inputId="organizationalChartOfOwnership-upload"
                      onChange={(url) => field.onChange(url)}
                      accept="image/*,application/pdf"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Please upload N/A if you are applying as individual
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Button
              type="button"
              variant={"outline"}
              onClick={() => setStep("business-form-4")}
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

interface FileUploadProps {
  inputId?: string;
  onChange: (url: string) => void;
  accept?: string;
  multiple?: boolean;
}

const FileUpload: FC<FileUploadProps> = ({
  inputId = "file-input",
  onChange,
  accept = "image/*,application/pdf",
  multiple = false,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  // Cloudinary config
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_UPLOAD_PRESET = import.meta.env
    .VITE_CLOUDINARY_UPLOAD_PRESET;

  const openUploadWidget = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("cloud_name", CLOUDINARY_CLOUD_NAME);

    setIsUploading(true);

    fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.secure_url) {
          const url = data.secure_url;
          setCurrentUrl(url);
          onChange(url);
        } else {
          console.error("Upload failed:", data);
          toast.error("Upload failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Upload error:", err);
        toast.error("Upload failed. Please try again.");
      })
      .finally(() => setIsUploading(false));
  };

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
      const file = e.dataTransfer.files[0];
      if (multiple) {
        // Handle multiple if needed, but current props suggest single
        Array.from(e.dataTransfer.files).forEach(openUploadWidget);
      } else {
        openUploadWidget(file);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      openUploadWidget(file);
      e.target.value = ""; // Reset input for re-selection
    }
  };

  // Optional: Preview uploaded file
  const previewUrl = currentUrl ? (
    <div className="mt-2 p-2 border flex items-center gap-2.5 border-gray-100 rounded text-xs">
      <p className="font-medium">Uploaded:</p>
      <a
        href={currentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View File
      </a>
    </div>
  ) : null;

  return (
    <div className="space-y-2">
      <div
        className={`relative border-2 border-dashed rounded border-[#DAE1EA66] p-6 text-center bg-[#1E2440] cursor-pointer hover:border-[#819AD5] transition-colors ${
          dragActive ? "border-blue-400 bg-blue-50/10" : ""
        } ${isUploading ? "opacity-70 cursor-not-allowed" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() =>
          !isUploading && document.getElementById(inputId)?.click()
        }
      >
        <input
          id={inputId}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          disabled={isUploading}
        />
        {isUploading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            <p className="text-sm text-white">Uploading...</p>
          </div>
        ) : (
          <div className="flex gap-4 justify-center items-center">
            <CloudUpload className="h-8 w-8 text-[#6294FF]" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">
                Browse Files
              </p>
              <p className="text-xs text-gray-400">or Drag and drop files</p>
            </div>
          </div>
        )}
      </div>
      {previewUrl}
    </div>
  );
};
