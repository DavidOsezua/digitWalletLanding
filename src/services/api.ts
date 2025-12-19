import axios from "axios";

const API_BASE_URL = "https://digitsystembackend.net:5813";

export const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authorizedInstance = axios.create({
  baseURL: API_BASE_URL,

  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer`,
  },
});

authorizedInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer`;
  return config;
});

export const login = async () => {};

export const register = async () => {};
