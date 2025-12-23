import { useFormContext } from "react-hook-form";
import { useRef, useState, type FC } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import SignatureCanvas from "react-signature-canvas";
import type { FormSchema } from "@/pages/Onboarding";
import toast from "react-hot-toast";

export const SignaturePad: FC<{ name: keyof FormSchema; label: string }> = ({
  name,
  label,
}) => {
  const form = useFormContext<FormSchema>();
  const [isEmpty, setIsEmpty] = useState(true);

  const sigCanvasRef = useRef<SignatureCanvas>(null);

  const clearSignature = () => {
    sigCanvasRef.current?.clear();
    form.setValue(name, undefined);
    setIsEmpty(true);
  };

  const saveSignature = () => {
    const dataURL = sigCanvasRef.current?.toDataURL();
    if (dataURL && !isEmpty) {
      form.setValue(name, dataURL);
      toast.success("Signature saved!");
    } else {
      toast.error("Please draw your signature first.");
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 bg-gray-50 min-h-37.5 flex flex-col">
              <SignatureCanvas
                ref={sigCanvasRef}
                canvasProps={{
                  className: "w-full h-32 border border-gray-300 rounded",
                }}
                onEnd={() =>
                  setIsEmpty(sigCanvasRef.current?.isEmpty() ?? false)
                }
              />
              <div className="flex gap-2 mt-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-dark-text"
                  onClick={clearSignature}
                >
                  Clear
                </Button>
                <Button type="button" size="sm" onClick={saveSignature}>
                  Sign Here
                </Button>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
