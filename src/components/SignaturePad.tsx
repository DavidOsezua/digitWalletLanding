import { useFormContext } from "react-hook-form";
import { useRef, useState, useEffect, type FC } from "react";
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
  const [editMode, setEditMode] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  const sigCanvasRef = useRef<SignatureCanvas>(null);

  const currentValue = form.watch(name) as string;

  // Reset showCanvas when value changes (e.g., from BE load)
  useEffect(() => {
    if (currentValue) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowCanvas(false);
      setEditMode(false);
    }
  }, [currentValue]);

  const clearSignature = () => {
    sigCanvasRef.current?.clear();
    form.setValue(name, undefined);
    setIsEmpty(true);
    setShowCanvas(true); // Ensure canvas shows after clear
    setEditMode(true);
  };

  const saveSignature = () => {
    const dataURL = sigCanvasRef.current?.toDataURL();
    if (dataURL && !isEmpty) {
      form.setValue(name, dataURL);
      toast.success("Signature saved!");
      setShowCanvas(false); // Switch back to view mode after save
      setEditMode(false);
    } else {
      toast.error("Please draw your signature first.");
    }
  };

  const editSignature = () => {
    form.setValue(name, undefined);
    setShowCanvas(true);
    setEditMode(true);
    setIsEmpty(true);
  };

  const handlePlaceholderClick = () => {
    setShowCanvas(true);
  };

  if (currentValue && !editMode && !showCanvas) {
    return (
      <FormField
        control={form.control}
        name={name}
        render={() => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-4 bg-gray-50 min-h-37.5 flex flex-col">
                <img
                  src={currentValue}
                  alt="Signature"
                  className="w-full h-32 object-contain border border-gray-300 rounded"
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
                  <Button type="button" size="sm" onClick={editSignature}>
                    Edit Signature
                  </Button>
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  if (!showCanvas) {
    // Initial placeholder design
    return (
      <FormField
        control={form.control}
        name={name}
        render={() => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div
                className="border-2 border-[#DAE1EA66] rounded p-6 bg-dark-primary-50 flex flex-col items-center justify-center text-bg min-h-23 max-w-70 cursor-pointer hover:bg-dark-primary-50/90 transition-colors"
                onClick={handlePlaceholderClick}
              >
                <p className="text-gray-600 text-center  text-sm font-medium">
                  Sign here
                </p>
                <div>
                  <img src="/signature.svg" alt="signature" />
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  // Canvas mode
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
                  Save Signature
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
