import {
  type AuthResponse,
  type LoginCredentials,
  type SignupCredentials,
  type SignUpResponse,
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
