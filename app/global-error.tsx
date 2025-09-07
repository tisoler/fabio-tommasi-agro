'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        ¡Algo salió mal!
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        {error.message || 'Error al cargar la página'}
      </p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Reintentar
      </button>
    </div>
  );
}
