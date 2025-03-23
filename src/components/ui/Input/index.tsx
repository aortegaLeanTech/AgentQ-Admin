/**
 * Input
 * 
 * Componente especializado para campos de input que previene errores de hidrataciu00f3n
 * causados por extensiones de navegador que modifican los campos, especialmente email.
 * 
 * Sigue el mismo enfoque modular usado para validaciones y Tailwind CSS v4.
 */

'use client';

import React from 'react';
import { TextField } from '@mui/material';
// Importar el tipo correcto desde el módulo específico
import type { TextFieldProps } from '@mui/material/TextField';

// Interface para el componente de Input
type InputProps = Omit<TextFieldProps, 'type'> & {
  name: string;
};

/**
 * Input - Componente funcional que evita problemas de hidrataciu00f3n
 * 
 * Usa el mismo enfoque modular que aplicaste para:
 * 1. Sistema de validaciu00f3n (/schemas)
 * 2. Soluciu00f3n Tailwind CSS v4
 */
const Input: React.FC<InputProps> = (props) => {
  // Estado para controlar si estamos en el cliente
  const [mounted, setMounted] = React.useState(false);
  
  // Equivalente a componentDidMount
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  const { name, ...restProps } = props;
  
  // En el servidor o durante la hidrataciu00f3n inicial (SSR)
  if (!mounted) {
    return (
      <div 
        suppressHydrationWarning
        className="mui-text-field-placeholder" 
        style={{ 
          height: '56px', 
          border: '1px solid #ccc', 
          borderRadius: '4px',
          backgroundColor: '#f9f9f9'
        }} 
      />
    );
  }
  
  // En el cliente, despuu00e9s de la hidrataciu00f3n
  return (
    <TextField
      type="text"
      name={name}
      autoComplete="email"
      variant="outlined"
      fullWidth
      // Utilizando rest props para mayor flexibilidad
      {...restProps}
    />
  );
};

export { Input };
