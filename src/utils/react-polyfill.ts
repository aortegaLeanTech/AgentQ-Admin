/**
 * Este archivo proporciona compatibilidad con versiones posteriores de React (React 18.3+)
 * Ayuda a resolver problemas de importaciu00f3n en el proyecto.
 */

// Esta exportaciu00f3n garantiza que los mu00f3dulos que importan React directamente funcionen
// con la versiu00f3n 18.3+ de React (pre-release de React 19)
import React from 'react';
export default React;

// Tambiu00e9n exportamos los hooks comu00fanmente utilizados para mayor comodidad
export const { 
  useState, 
  useEffect, 
  useContext, 
  useRef, 
  useMemo, 
  useCallback,
  useReducer
} = React;
