import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useState } from "react";
import Eye from "../../components/SvgComponent/Eye";
import { EyeClosedIcon } from "lucide-react";
import Google from "../../components/SvgComponent/Google";
import { useLogin } from "@/hooks/useAuth";
import toast from "react-hot-toast";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const { mutateAsync: login, isPending } = useLogin();

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login data:", data);
    try {
      await login(data);
      toast.success("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      {/* Welcome Text */}
      <div className="">
        <h2 className="text-white text-xl font-semibold">Welcome Back!</h2>
        <p className="text-gray-400 text-[12px]">Login to DigitWallet</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        {/* Email Field */}
        <div className="space-y-1">
          <label className="block text-gray-300 text-xs ">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-3 py-2 b border border-dark-stroke3 rounded-[5px] text-white placeholder-gray-500 focus:outline-none focus:border-[#6294FF]"
          />
          {errors.email && (
            <p className="text-red-400 text-xs ">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <label className="block text-gray-300 text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-3 py-2 rounded-lg bg-[#161b33] border border-[#2d3351] text-white placeholder-gray-500 focus:outline-none focus:border-[#6294FF]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showPassword ? <Eye /> : <EyeClosedIcon />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">
              {errors.password.message}
            </p>
          )}

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-[#6294FF] text-xs hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Sign In Button */}
        <div className="space-y-1">
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary-300 font-medium  cursor-pointer text-dark-text transition-colors"
          >
            {isPending ? "Loading..." : "Sign In"}
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
        <div className="relative">
          <div className="absolute inset-0 flex items-center ">
            <div className="w-full border-t border-[#2d3351]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#1e2339] text-gray-400">OR</span>
          </div>
        </div>

        {/* Google Sign In */}
        <button
          type="button"
          className="w-full  rounded-lg border border-[#2d3351] text-white  hover:bg-[#2d3351] transition-colors flex items-center py-4 justify-center gap-2 cursor-pointer"
        >
          <Google />
          Continue with Google
        </button>
      </form>
    </>
  );
};

export default Login;
