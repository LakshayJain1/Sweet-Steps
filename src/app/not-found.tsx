import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md px-6">
        <h1 className="text-8xl font-bold text-pink-accent/50">404</h1>
        <h2 className="text-3xl font-heading">Page not found</h2>
        <p className="text-neutral-500 text-lg">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold-accent font-bold hover:text-brown-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
