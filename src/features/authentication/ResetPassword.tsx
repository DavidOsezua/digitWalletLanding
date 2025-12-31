import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import PasswordInput from "./components/PasswordInput";
import FormButton from "./components/FormButton";
import { passwordRules, confirmPasswordRules } from "./utils/validationRules";
import { useForgotPasswordStore } from "../../store/forgotPasswordStore";
import { useRequestOtp } from "../../hooks/useForgotPassword";

type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const { email, setNewPassword } = useForgotPasswordStore();
  const { mutate: sendOtp, isPending } = useRequestOtp();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordFormData>();

  const password = watch("password");

  // Redirect if no email
  if (!email) {
    navigate("/auth/forgot-password");
    return null;
  }

  const onSubmit = (data: ResetPasswordFormData) => {
    setNewPassword(data.password);
    sendOtp(email);
  };

  return (
    <>
      {/* Back Button */}
      <button
        onClick={() => navigate("/auth/forgot-password")}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Welcome Text */}
      <div>
        <h2 className="text-white text-xl font-semibold">Forgot Password?</h2>
        <p className="text-gray-400 text-sm">
          Kindly enter your new password below
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        <PasswordInput
          label="Password"
          placeholder="Enter password"
          register={register("password", passwordRules)}
          error={errors.password}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Enter password"
          register={register("confirmPassword", confirmPasswordRules(password))}
          error={errors.confirmPassword}
        />

        <FormButton type="submit" isLoading={isPending}>
          {isPending ? "Sending OTP..." : "Reset password"}
        </FormButton>
      </form>
    </>
  );
};

export default ResetPassword;
