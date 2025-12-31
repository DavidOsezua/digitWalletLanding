import { apiInstance } from "./api";

interface RequestOtpResponse {
  message: string;
}

interface ResetPasswordRequest {
  email: string;
  otp: number;
  newPassword: string;
}

interface ResetPasswordResponse {
  message: string;
}

export const requestOtp = async (email: string): Promise<RequestOtpResponse> => {
  const response = await apiInstance.get<RequestOtpResponse>(
    `/auth/otp?email=${email}`
  );
  return response.data;
};

export const resetPassword = async (
  data: ResetPasswordRequest
): Promise<ResetPasswordResponse> => {
  const response = await apiInstance.put<ResetPasswordResponse>(
    "/auth/forget-password",
    data
  );
  return response.data;
};
