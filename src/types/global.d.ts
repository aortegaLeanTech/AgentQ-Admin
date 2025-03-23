// React y ReactDOM
declare module 'react' {
  import * as React from 'react';
  export = React;
  export as namespace React;
  
  export const createContext: any;
  export const useContext: any;
  export const useEffect: any;
  export const useState: any;
  export const useRef: any;
  export const useMemo: any;
  export const useCallback: any;
  export const Fragment: any;
  export const memo: any;
  export const forwardRef: any;
}

declare module 'react-dom' {
  import * as ReactDOM from 'react-dom';
  export = ReactDOM;
  export as namespace ReactDOM;
}

// Material UI
declare module '@mui/material/styles';
declare module '@mui/material/CssBaseline';
declare module '@mui/material' {
  // Card components
  export const Card: React.ComponentType<CardProps>;
  export const CardContent: React.ComponentType<CardContentProps>;
  export const CardHeader: React.ComponentType<CardHeaderProps>;
  export const CardActions: React.ComponentType<CardActionsProps>;
  
  // Layout components
  export const Box: React.ComponentType<any>;
  export const Container: React.ComponentType<any>;
  export const Grid: React.ComponentType<any>;
  export const Paper: React.ComponentType<any>;
  export const CssBaseline: React.ComponentType<any>;
  
  // Navigation components
  export const AppBar: React.ComponentType<any>;
  export const Toolbar: React.ComponentType<any>;
  export const Drawer: React.ComponentType<any>;
  export const List: React.ComponentType<any>;
  export const ListItem: React.ComponentType<any>;
  export const ListItemIcon: React.ComponentType<any>;
  export const ListItemText: React.ComponentType<any>;
  export const ListItemButton: React.ComponentType<any>;
  export const Divider: React.ComponentType<any>;
  
  // Typography components
  export const Typography: React.ComponentType<any>;
  
  // Form components
  export const Button: React.ComponentType<any>;
  export const TextField: React.ComponentType<any>;
  export const FormControl: React.ComponentType<any>;
  export const FormHelperText: React.ComponentType<any>;
  export const InputLabel: React.ComponentType<any>;
  export const MenuItem: React.ComponentType<any>;
  export const Select: React.ComponentType<any>;
  export const Switch: React.ComponentType<any>;
  export const Checkbox: React.ComponentType<any>;
  export const IconButton: React.ComponentType<any>;
  export const Tooltip: React.ComponentType<any>;
  
  // Feedback components
  export const Snackbar: React.ComponentType<any>;
  export const Alert: React.ComponentType<any>;
  export const CircularProgress: React.ComponentType<any>;
  export const LinearProgress: React.ComponentType<any>;
  
  // Interface definitions
  export interface CardProps {
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
  }
  
  export interface CardHeaderProps {
    title?: React.ReactNode;
    subheader?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }
  
  export interface CardContentProps {
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
  }
  
  export interface CardActionsProps {
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
  }
}

// Next.js
declare module 'next' {
  import * as Next from 'next';
  export = Next;
  export as namespace Next;
  export interface Metadata {
    title?: string;
    description?: string;
    [key: string]: any;
  }
}

declare module 'next/font/google' {
  export function Inter(options: any): any;
  export function Geist(options: any): any;
  export function Geist_Mono(options: any): any;
}

// Testing
declare module 'vitest/config' {
  import * as VitestConfig from 'vitest/config';
  export = VitestConfig;
  export as namespace VitestConfig;
  export const defineConfig: any;
}

declare module '@vitejs/plugin-react' {
  import * as PluginReact from '@vitejs/plugin-react';
  export = PluginReact;
  export as namespace PluginReact;
}

declare module 'vitest' {
  export const vi: {
    fn: () => any;
    mock: (path: string, factory?: any) => any;
    [key: string]: any;
  };
  
  global {
    function describe(name: string, fn: () => void): void;
    function it(name: string, fn: () => void): void;
    function expect(actual: any): any;
  }
}

// React Hook Form
declare module 'react-hook-form' {
  export const useForm: <T>(config?: any) => UseFormReturn<T>;
  
  export interface UseFormReturn<T> {
    register: (name: string, options?: any) => any;
    formState: {
      errors: Record<string, any>;
    };
    handleSubmit: (onSubmit: (data: T) => void) => (e?: React.BaseSyntheticEvent) => void;
    [key: string]: any;
  }
}

// Other modules
declare module 'next-themes';
declare module '@preact/signals-react';
declare module 'zustand';
declare module 'zustand/middleware';
declare module '@tanstack/react-query';
declare module '@tanstack/react-query-devtools';
declare module '@testing-library/react';
declare module '@testing-library/user-event';
declare module '@testing-library/jest-dom';

// Node.js globals
declare global {
  namespace NodeJS {
    interface Global {
      [key: string]: any;
    }
  }
  
  var __dirname: string;
  var React: any;
}

// Path
declare module 'path' {
  export function join(...paths: string[]): string;
  export function resolve(...paths: string[]): string;
  export as namespace path;
}
