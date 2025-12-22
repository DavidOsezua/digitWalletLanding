import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore";
import { login, register } from "../services/AuthService";
import type { AuthResponse } from "../types/auth";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  return useMutation({
    mutationFn: login,
    onSuccess: (data: AuthResponse) => {
      setAuth(data.user, data.accessToken);
      navigate("/dashboard");
    },
    onError: (error: never) => {
      console.error("Login failed:", error);
    },
  });
};

export const useSignUp = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  return useMutation({
    mutationFn: register,
    onSuccess: (data: AuthResponse) => {
      setAuth(data.user, data.accessToken);
      navigate("/");
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  return () => {
    logout();
    navigate("/auth/login");
  };
};
