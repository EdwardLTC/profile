import React from 'react';
import { Resume } from '@/app/sections/resume';
import Link from 'next/link';
import { Footer } from '@/app/sections/footer';
import { Logo } from '@/app/components/logo';
import { ThemeToggle } from '@/app/components/theme-toggle';
import { ArrowLeft } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="bg-gradient-to-br from-page-from via-page-via to-page-to min-h-screen text-foreground">
      <nav className="fixed top-0 left-0 w-full z-40 bg-background/70 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400">
              <Logo />
            </Link>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <ArrowLeft size={16} />
                Back to portfolio
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8 mb-2">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Resume
            </h1>
            <p className="text-muted-foreground mt-1">
              A print-friendly version of my experience, projects, and skills.
            </p>
          </div>

          <Resume />
        </div>
      </main>

      <Footer />
    </div>
  );
}

