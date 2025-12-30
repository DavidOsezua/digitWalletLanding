import type {
  OnboardingCredentials,
  OnboardingResponse,
} from "@/types/onboarding";
import { apiInstance } from "./api";
import axios from "axios";

export const onboard = async (
  credentials: OnboardingCredentials
): Promise<OnboardingResponse> => {
  const response = await apiInstance.post<OnboardingResponse>(
    "/user/onboard",
    credentials
  );
  return response.data;
};

export const getIpAdress = async (): Promise<{ ip: string }> => {
  const response = await axios
    .get<{ ip: string }>("https://api.ipify.org/?format=json")
    .catch((error) => {
      console.error(error);
      throw error;
    });
  return response.data;
};
