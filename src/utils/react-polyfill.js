/**
 * Polyfill mejorado para compatibilidad con React 19 y @preact/signals-react
 * Sigue el mismo enfoque modular que la soluciu00f3n de Tailwind CSS v4
 */

// Aplicar polyfill en cliente y servidor
function applyReactPolyfill() {
  try {
    // Crear un proxy para React que intercepte las importaciones
    const originalReact = require('react');
    
    // Verificar si ya tiene la propiedad interna
    if (originalReact.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) {
      return; // Ya existe, no hacer nada
    }
    
    // Mock de internals que @preact/signals-react necesita
    originalReact.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
      ReactCurrentOwner: { current: null },
      ReactCurrentDispatcher: { current: null },
      ReactCurrentBatchConfig: { transition: 0 },
      Scheduler: {},
      // Campos adicionales que podría necesitar @preact/signals-react
      ReactSharedInternals: {},
      ReactDOMSharedInternals: {}
    };
    
    // Asegurarse de que el export default también tenga los internals
    if (originalReact.default && !originalReact.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) {
      originalReact.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = 
        originalReact.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    }
    
    console.log('💡 React polyfill aplicado exitosamente');
  } catch (e) {
    console.error('⚠️ Error al aplicar React polyfill:', e);
  }
}

// Intentar aplicar en ambientes cliente y servidor
try {
  applyReactPolyfill();
} catch (e) {
  console.warn('No se pudo aplicar el polyfill en el contexto actual:', e);
}

// Si estamos en el navegador, aplicar también allí
if (typeof window !== 'undefined') {
  try {
    applyReactPolyfill();
  } catch (e) {
    console.warn('No se pudo aplicar el polyfill en el cliente:', e);
  }
}
