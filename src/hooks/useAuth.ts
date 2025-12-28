import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore";
import { login, register } from "../services/AuthService";
import type { AuthResponse, SignUpResponse } from "../types/auth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  return useMutation({
    mutationFn: login,
    onSuccess: (data: AuthResponse) => {
      setAuth(data.user, data.accessToken);
      toast.success("Login successful!");
      navigate("/myaccount/dashboard");
    },
    onError: (error: unknown) => {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || "Login failed. Please try again."
        : "Login failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};

export const useSignUp = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: (data: SignUpResponse) => {
      toast.success(data.message || "Registration successful!");
      navigate("/auth/login");
    },
    onError: (error: unknown) => {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message ||
          "Registration failed. Please try again."
        : "Registration failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  return () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/auth/login");
  };
};
