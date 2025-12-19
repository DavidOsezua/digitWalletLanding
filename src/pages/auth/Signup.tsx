import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useState } from "react";
import Eye from "../../components/SvgComponent/Eye";
import { EyeClosed } from "lucide-react";
import Google from "../../components/SvgComponent/Google";

type SignupFormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormData>();

  const password = watch("password");

  const onSubmit = (data: SignupFormData) => {
    console.log("Signup data:", data);
    // Handle signup logic here
  };

  return (
    <>
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
        <div className="space-y-1">
          <label className="block text-gray-300 text-xs">First name</label>
          <input
            type="text"
            placeholder="e.g Demi"
            {...register("firstName", {
              required: "First name is required",
              maxLength: {
                value: 20,
                message: "",
              },
            })}
            className="w-full px-3 py-2 b border border-dark-stroke3 rounded-[5px] text-white placeholder-gray-500 focus:outline-none focus:border-[#6294FF]"
          />
          {errors.firstName && (
            <p className="text-red-400 text-xs mt-1">
              {errors.firstName?.message}
            </p>
          )}
        </div>

        {/* Lastname Field */}
        <div className="space-y-1">
          <label className="block text-gray-300 text-xs">Last name</label>
          <input
            type="text"
            placeholder="e.g  Rose"
            {...register("lastName", {
              required: "Last name is required",
              maxLength: {
                value: 20,
                message: "",
              },
            })}
            className="w-full px-3 py-2 b border border-dark-stroke3 rounded-[5px] text-white placeholder-gray-500 focus:outline-none focus:border-[#6294FF]"
          />
          {errors.lastName && (
            <p className="text-red-400 text-xs">{errors.lastName?.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <label className="block text-gray-300 text-xs">Email</label>
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
            <p className="text-red-400 text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <label className="block text-gray-300 text-xs ">Password</label>
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
              className="w-full px-3 py-2 b border border-dark-stroke3 rounded-[5px] text-white placeholder-gray-500 focus:outline-none focus:border-[#6294FF]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showPassword ? <Eye /> : <EyeClosed />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-400 text-xs">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-1">
          <label className="block text-gray-300 text-xs">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-3 py-2 b border border-dark-stroke3 rounded-[5px] text-white placeholder-gray-500 focus:outline-none focus:border-[#6294FF]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showConfirmPassword ? <Eye /> : <EyeClosed />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-400 text-xs">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Sign Up Button */}
        <div className="space-y-1">
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary-300 font-medium  cursor-pointer text-dark-text transition-colors"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <div className=" text-xs text-gray-400">
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
