import { useAuthStore } from "@/store/authStore";
import {
  type AuthResponse,
  type LoginCredentials,
  type SignupCredentials,
  type SignUpResponse,
  type User,
} from "../types/auth";
import { apiInstance } from "./api";

export const login = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  const response = await apiInstance.post<AuthResponse>(
    "/auth/login",
    credentials
  );
  return response.data;
};

export const register = async (
  credentials: SignupCredentials
): Promise<SignUpResponse> => {
  const response = await apiInstance.post<SignUpResponse>(
    "/auth/register",
    credentials
  );
  return response.data;
};

export const getUser = async (): Promise<{ user: User }> => {
  const response = await apiInstance.get<{ user: User }>("/user");
  useAuthStore.setState({ user: response.data.user });
  return response.data;
};
