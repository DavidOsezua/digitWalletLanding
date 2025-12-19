import axios from "axios";
import { useAuthStore } from "../store/authStore";

const API_BASE_URL = "https://digitsystembackend.net:5813";

export const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
