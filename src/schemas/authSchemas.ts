// Validation schemas for authentication forms
export type LoginFormData = {
  email: string;
  password: string;
};

// Defines validation rules for the login form
export const loginValidationRules = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Enter a valid email address',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters long',
    },
  },
};

// Defines validation rules for the registration form
export type RegisterFormData = LoginFormData & {
  name: string;
  confirmPassword: string;
};

export const registerValidationRules = {
  ...loginValidationRules,
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters long',
    },
  },
  confirmPassword: {
    required: 'Password confirmation is required',
    validate: (value: string, formValues: RegisterFormData) =>
      value === formValues.password || 'Passwords do not match',
  },
};

// Defines validation rules for the password recovery form
export type RecoverPasswordFormData = {
  email: string;
};

export const recoverPasswordValidationRules = {
  email: loginValidationRules.email,
};
