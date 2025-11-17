import type { Metadata, Viewport } from "next";
import "./globals.css"

// Metadatos para el SEO y la PWA
export const metadata: Metadata = {
  title: "DermiNutri UCE",
  description: "Sistema de Gestión Dermatológica",
  manifest: "/manifest.json",
};

// Configuración del Viewport para la experiencia móvil
export const viewport: Viewport = {
  themeColor: "#003366",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Añadimos 'suppressHydrationWarning' para que las extensiones
    // de navegador (como la de Brave) no rompan la app.
    <html lang="es" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}