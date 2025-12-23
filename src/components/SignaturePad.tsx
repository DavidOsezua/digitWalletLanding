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
  const [editMode, setEditMode] = useState(false); // New: Toggle between view/edit

  const sigCanvasRef = useRef<SignatureCanvas>(null);

  const currentValue = form.watch(name) as string; // Watch for base64 changes

  const clearSignature = () => {
    sigCanvasRef.current?.clear();
    form.setValue(name, undefined);
    setIsEmpty(true);
    setEditMode(true); // Switch to edit after clear
  };

  const saveSignature = () => {
    const dataURL = sigCanvasRef.current?.toDataURL();
    if (dataURL && !isEmpty) {
      form.setValue(name, dataURL);
      toast.success("Signature saved!");
      setEditMode(false); // Switch to view after save
    } else {
      toast.error("Please draw your signature first.");
    }
  };

  const editSignature = () => {
    form.setValue(name, undefined); 
    setEditMode(true);
    setIsEmpty(true);
  };

  // If value exists from BE (base64), show image; else show canvas
  if (currentValue && !editMode) {
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

  // Edit mode: Show canvas
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
