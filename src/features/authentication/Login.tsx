import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useLogin } from "../../hooks/useAuth";
import Spinner from "../../components/Spinner";
import FormInput from "./components/FormInput";
import { emailRules, passwordRules } from "./utils/validationRules";
import PasswordInput from "./components/PasswordInput";
import AuthTabSwitch from "./components/AuthTabSwitch";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { mutate: loginUser, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    loginUser(data);
  };

  return (
    <>
      {/* Tab Switch */}
      <AuthTabSwitch />

      {/* Welcome Text */}
      <div className="">
        <h2 className="text-white text-xl font-semibold">Welcome Back!</h2>
        <p className="text-gray-400 text-[12px]">Login to DigitWallet</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
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
          showForgotPassword={true}
        />

        {/* Sign In Button */}
        <div className="space-y-1">
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 rounded-lg bg-primary-300 font-medium  cursor-pointer text-dark-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isPending ? <Spinner size="sm" /> : "Log In"}
          </button>

          {/* Sign Up Link */}
          <div className=" text-xs text-gray-400">
            Don't have an account?{" "}
            <Link to="/auth/signup" className="text-[#6294FF] hover:underline">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="relative">
          <div className="absolute inset-0 flex items-center ">
            <div className="w-full border-t border-[#2d3351]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#1e2339] text-gray-400">OR</span>
          </div>
        </div> */}

        {/* Google Sign In */}
        {/* <button
          type="button"
          className="w-full  rounded-lg border border-[#2d3351] text-white  hover:bg-[#2d3351] transition-colors flex items-center py-4 justify-center gap-2 cursor-pointer"
        >
          <Google />
          Continue with Google
        </button> */}
      </form>
    </>
  );
};

export default Login;
