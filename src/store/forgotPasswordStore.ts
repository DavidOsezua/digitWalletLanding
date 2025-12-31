import { create } from "zustand";

interface ForgotPasswordState {
  email: string;
  newPassword: string;
  setEmail: (email: string) => void;
  setNewPassword: (password: string) => void;
  clearState: () => void;
}

export const useForgotPasswordStore = create<ForgotPasswordState>((set) => ({
  email: "",
  newPassword: "",
  setEmail: (email) => set({ email }),
  setNewPassword: (password) => set({ newPassword: password }),
  clearState: () => set({ email: "", newPassword: "" }),
}));
