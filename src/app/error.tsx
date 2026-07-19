"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-red-400">ERROR</p>
      <h1 className="mt-3 text-3xl font-semibold text-content-primary">Something went wrong</h1>
      <p className="mt-2 max-w-md text-sm text-content-secondary">
        An unexpected error occurred while rendering this view.
      </p>
      <button
        type="button"
        onClick={reset}
        className="focus-ring mt-6 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-base-950"
      >
        Try again
      </button>
    </main>
  );
}
