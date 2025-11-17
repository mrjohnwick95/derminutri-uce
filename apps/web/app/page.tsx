/*
 * Esta es la página de bienvenida (El "Hola Mundo").
 * Hemos borrado todas las importaciones de "@repo/ui" para que sea 100% limpia.
 * Solo usa HTML y Tailwind CSS.
 */
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center">
      
      {/* Icono de bienvenida */}
      <div className="mb-6 rounded-full bg-blue-100 p-6">
        <span className="text-6xl">🏥</span>
      </div>

      <h1 className="mb-2 text-3xl font-extrabold text-blue-900">
        DermiNutri UCE
      </h1>
      
      <p className="mb-8 text-gray-600 max-w-xs mx-auto">
        Sistema de Triaje Digital y Bienestar Universitario.
        <br/>
        <span className="text-xs text-gray-400 mt-2 block">Versión 1.0 (Base PWA)</span>
      </p>

      {/* Botones de acción (aún no funcionales) */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button className="w-full rounded-xl bg-blue-800 py-4 text-lg font-semibold text-white shadow-lg transition-all active:scale-95 hover:bg-blue-700">
          Soy Estudiante
        </button>
        
        <button className="w-full rounded-xl border-2 border-blue-200 bg-white py-4 text-lg font-semibold text-blue-800 shadow-sm transition-all active:scale-95 hover:bg-blue-50">
          Soy Personal Administrativo
        </button>
      </div>

      {/* Instrucciones para instalar la PWA */}
      <div className="mt-12 rounded-lg bg-yellow-50 p-4 text-xs text-yellow-800 border border-yellow-200 max-w-xs">
        📲 <strong>Instalar App:</strong>
        <br />
        {/* * Corregimos el error de JSX.
          * El carácter ">" debe ser escapado como "&gt;" dentro de JSX 
          * para que no se interprete como el cierre de una etiqueta HTML.
          */}
        Android: Menú Chrome &gt; Instalar App
        <br />
        iOS: Compartir &gt; Agregar a Inicio
      </div>

    </main>
  );
}