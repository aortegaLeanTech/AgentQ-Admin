import { type ClassValue, clsx } from "clsx";

// Función simplificada sin tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
