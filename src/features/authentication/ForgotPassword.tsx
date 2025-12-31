import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import FormInput from "./components/FormInput";
import FormButton from "./components/FormButton";
import { emailRules } from "./utils/validationRules";
import { useForgotPasswordStore } from "../../store/forgotPasswordStore";

type ForgotPasswordFormData = {
  email: string;
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { setEmail } = useForgotPasswordStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();

  const onSubmit = (data: ForgotPasswordFormData) => {
    setEmail(data.email);
    navigate("/auth/reset-password");
  };

  return (
    <>
      {/* Back Button */}
      <button
        onClick={() => navigate("/auth/login")}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Welcome Text */}
      <div>
        <h2 className="text-white text-xl font-semibold">Set New Password</h2>
        <p className="text-gray-400 text-sm">
          Enter email address to reset password below
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        <FormInput
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          register={register("email", emailRules)}
          error={errors.email}
        />

        <FormButton type="submit">Continue</FormButton>
      </form>
    </>
  );
};

export default ForgotPassword;
