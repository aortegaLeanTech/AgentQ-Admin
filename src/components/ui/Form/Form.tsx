import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface FormProps {
  children: React.ReactNode | ((methods: UseFormReturn<any>) => React.ReactNode);
  formMethods: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  className?: string;
}

export const Form = ({
  children,
  formMethods,
  onSubmit,
  className = '',
}: FormProps) => {
  const { handleSubmit } = formMethods;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${className}`}>
      {typeof children === 'function' ? children(formMethods) : children}
    </form>
  );
};

interface FormFieldProps {
  children: React.ReactNode;
  label?: string;
  error?: string;
  className?: string;
}

export const FormField = ({
  children,
  label,
  error,
  className = '',
}: FormFieldProps) => {
  return (
    <div className={`form-field ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-darkblue-700 dark:text-darkblue-200 mb-1">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};
