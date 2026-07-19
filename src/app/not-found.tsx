import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-content-primary">Route not found</h1>
      <p className="mt-2 max-w-md text-sm text-content-secondary">
        This path does not resolve to any service. Try heading back to the main system.
      </p>
      <Link
        href="/"
        className="focus-ring mt-6 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-base-950"
      >
        Back to home
      </Link>
    </main>
  );
}
