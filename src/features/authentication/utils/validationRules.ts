export const emailRules = {
  required: "Email is required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid emai address",
  },
};

export const passwordRules = {
  required: "Password is required",
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters",
  },
};

export const firstNameRules = {
  required: "First name is required",
  maxLength: {
    value: 20,
    message: "First name is too long",
  },
};

export const lastNameRules = {
  required: "Last name is required",
  maxLength: {
    value: 20,
    message: "Last name is too long",
  },
};

export const confirmPasswordRules = (password: string) => ({
  required: "Please confirm your password",
  validate: (value: string) => value === password || "Passwords do not match",
});
