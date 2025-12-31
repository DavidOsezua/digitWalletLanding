import { useState } from "react";
import { Link } from "react-router";
import Eye from "../../../components/SvgComponent/Eye";
import { EyeClosedIcon } from "lucide-react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  showForgotPassword?: boolean;
  forgotPasswordLink?: string;
}

const PasswordInput = ({
  label,
  placeholder = "Enter password",
  error,
  register,
  showForgotPassword = false,
  forgotPasswordLink = "/auth/forgot-password",
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1">
      <label className="block text-gray-300 text-xs">{label}</label>
      <div className="relative">
        <input
          {...register}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-dark-stroke3 rounded-[5px] text-white placeholder-gray-500 focus:outline-none focus:border-[#6294FF] bg-transparent"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
        >
          {showPassword ? <Eye /> : <EyeClosedIcon />}
        </button>
      </div>

      <div className="flex justify-end items-center">
        {showForgotPassword && (
          <Link
            to={forgotPasswordLink}
            className="text-[#6294FF] text-xs hover:underline"
          >
            Forgot Password?
          </Link>
        )}
      </div>
      {error && <p className="text-red-400 text-xs">{error.message}</p>}
    </div>
  );
};

export default PasswordInput;
