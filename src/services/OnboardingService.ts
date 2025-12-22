import type {
  OnboardingCredentials,
  OnboardingResponse,
} from "@/types/onboarding";
import { apiInstance } from "./api";

export const onboard = async (
  credentials: OnboardingCredentials
): Promise<OnboardingResponse> => {
  const response = await apiInstance.post<OnboardingResponse>(
    "/user/onboard",
    credentials
  );
  return response.data;
};
