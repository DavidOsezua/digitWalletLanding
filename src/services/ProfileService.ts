import { apiInstance } from "./api";

export const updateProfile = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}) => {
  const response = await apiInstance.put("/user", data);
  return response.data;
};
