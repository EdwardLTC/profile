import React from 'react';
import { Resume } from '@/app/sections/resume';
import Link from 'next/link';
import { Footer } from '@/app/sections/footer';
import { Logo } from '@/app/components/logo';
import { ArrowLeft } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-200">
      <nav className="fixed top-0 left-0 w-full z-40 bg-gray-800/30 backdrop-blur-md border-b border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 text-gray-100 hover:text-emerald-400">
              <Logo />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to portfolio
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8 mb-2">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Resume
            </h1>
            <p className="text-gray-400 mt-1">
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

