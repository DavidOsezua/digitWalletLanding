import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useSignUp } from "../../hooks/useAuth";
import FormInput from "./components/FormInput";
import PasswordInput from "./components/PasswordInput";
import FormButton from "./components/FormButton";
import AuthTabSwitch from "./components/AuthTabSwitch";
import {
  emailRules,
  passwordRules,
  firstNameRules,
  lastNameRules,
  confirmPasswordRules,
} from "./utils/validationRules";

type SignupFormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
};

const Signup = () => {
  const { mutate: signupUser, isPending } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormData>();

  const password = watch("password");

  const onSubmit = (data: SignupFormData) => {
    const { confirmPassword, ...signupData } = data;
    signupUser(signupData);
  };

  return (
    <>
      {/* Tab Switch */}
      <AuthTabSwitch />

      {/* Welcome Text */}
      <div className="">
        <h2 className="text-white text-xl font-semibold">Create Account</h2>
        <p className="text-gray-400 text-sm">
          We just need a bit more information. Please enter your details and get
          started.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        {/* Firstname Field */}
        <FormInput
          label="First name"
          type="text"
          placeholder="e.g Demi"
          register={register("firstName", firstNameRules)}
          error={errors.firstName}
        />

        {/* Lastname Field */}
        <FormInput
          label="Last name"
          type="text"
          placeholder="e.g Rose"
          register={register("lastName", lastNameRules)}
          error={errors.lastName}
        />

        {/* Email Field */}
        <FormInput
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          register={register("email", emailRules)}
          error={errors.email}
        />

        {/* Password Field */}
        <PasswordInput
          label="Password"
          register={register("password", passwordRules)}
          error={errors.password}
        />

        {/* Confirm Password Field */}
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm password"
          register={register("confirmPassword", confirmPasswordRules(password))}
          error={errors.confirmPassword}
        />

        {/* Sign Up Button */}
        <div className="space-y-1">
          <FormButton isLoading={isPending}>
            {isPending ? "Creating account..." : "Sign Up"}
          </FormButton>

          {/* Login Link */}
          <div className="text-xs text-gray-400">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-[#6294FF] hover:underline">
              Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
