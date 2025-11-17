import withPWAInit from "@ducanh2912/next-pwa";
// 1. Importamos la constante de fase de Next.js
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

// 2. Exportamos una FUNCIÓN en lugar de un objeto
export default (phase) => {
  // 3. Verificamos la fase actual
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;

  // 4. Inicializamos el 'wrapper' de PWA
  const withPWA = withPWAInit({
    dest: "public",
    
    // --- LA CORRECCIÓN CLAVE ---
    // Usamos nuestra variable 'isDevelopment' basada en la 'phase'
    disable: isDevelopment,
    // -------------------------

    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    workboxOptions: {
      disableDevLogs: true,
    },
  });

  // 5. Esta es la configuración base de Next.js
  const config = {
    reactStrictMode: true,
    transpilePackages: ["@repo/ui"],
  };

  // 6. Retornamos la configuración envuelta en la PWA
  return withPWA(config);
};