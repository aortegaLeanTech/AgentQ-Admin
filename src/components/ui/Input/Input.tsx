import React from 'react';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField';

export interface InputProps extends Omit<TextFieldProps, 'variant'> {
  helper?: string;
  variant?: 'outlined' | 'filled' | 'standard';
}

export const Input = ({
  label,
  error,
  helperText,
  helper,
  className = '',
  variant = 'outlined',
  fullWidth = true,
  ...props
}: InputProps) => {
  return (
    <TextField
      label={label}
      error={!!error}
      helperText={error || helper || helperText}
      variant={variant}
      fullWidth={fullWidth}
      className={`${className}`}
      {...props}
    />
  );
};
