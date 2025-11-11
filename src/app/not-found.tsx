import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground max-w-md">
        The page you were looking for doesn&rsquo;t exist or may have been
        moved. Please check the URL or return to the dashboard.
      </p>
      <Link
        href="/"
        className="text-primary hover:text-primary/80 underline-offset-4 hover:underline"
      >
        Go back home
      </Link>
    </main>
  );
}
