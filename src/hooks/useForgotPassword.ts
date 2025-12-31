import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
import { requestOtp, resetPassword } from "../services/ForgotPasswordService";
import { useForgotPasswordStore } from "../store/forgotPasswordStore";

// Validate email exists in database (Step 1)
export const useValidateEmail = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: requestOtp,
    onSuccess: () => {
      // Email exists in database, proceed to reset password page
      navigate("/auth/reset-password");
    },
    onError: (error: unknown) => {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || "Email not found. Please check and try again."
        : "Email not found. Please check and try again.";
      toast.error(errorMessage);
    },
  });
};

// Send OTP to email (Step 2)
export const useRequestOtp = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: requestOtp,
    onSuccess: () => {
      toast.success("OTP sent to your email!");
      navigate("/auth/verify-otp");
    },
    onError: (error: unknown) => {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || "Failed to send OTP. Please try again."
        : "Failed to send OTP. Please try again.";
      toast.error(errorMessage);
    },
  });
};

export const useResetPassword = () => {
  const navigate = useNavigate();
  const { clearState } = useForgotPasswordStore();

  return useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      toast.success(data.message || "Password reset successful!");
      clearState();
      navigate("/auth/login");
    },
    onError: (error: unknown) => {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || "Failed to reset password. Please try again."
        : "Failed to reset password. Please try again.";
      toast.error(errorMessage);
    },
  });
};
