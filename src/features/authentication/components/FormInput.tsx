import type { InputHTMLAttributes } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
}

const FormInput = ({ label, error, register, ...props }: FormInputProps) => {
  return (
    <div className="space-y-1">
      <label className="block text-gray-300 text-xs">{label}</label>
      <input
        {...register}
        {...props}
        className="w-full px-3 py-2 border border-dark-stroke3 rounded-[5px] text-white placeholder-gray-500 focus:outline-none focus:border-[#6294FF] bg-transparent"
      />
      {error && <p className="text-red-400 text-xs">{error.message}</p>}
    </div>
  );
};

export default FormInput;
