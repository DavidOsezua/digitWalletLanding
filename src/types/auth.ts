import type { OnboardingResponse } from "./onboarding";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  hasPassedQuiz: boolean;
  lastAttemptedAt: string | null;
  totalAttempts: number;
  onboarding: OnboardingResponse["onboarding"] | null;
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

export interface SignUpResponse {
  message: string;
}
