export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="text-center text-red-500">
      <p>{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-lg"
      >
        Retry
      </button>
    </div>
  );
}