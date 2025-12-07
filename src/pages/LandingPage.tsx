import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { CTA } from '../components/CTA';
export function LandingPage() {
  return <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-amber-500/30 selection:text-amber-200">
      <Header />
      <main>
        <Hero />
        <Features />

        {/* Quote Section - Adding a small interstitial for pacing */}
        <section className="py-24 bg-slate-900 border-y border-slate-800">
          <div className="container mx-auto px-6 text-center">
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-serif italic text-slate-300 leading-relaxed">
                "Sophistication is not just about what you wear or where you go,
                but who you share those moments with."
              </p>
              <footer className="mt-8 text-sm uppercase tracking-widest text-amber-500">
                — The Aura Manifesto
              </footer>
            </blockquote>
          </div>
        </section>

        <CTA />
      </main>

      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-900/50 rounded-sm flex items-center justify-center">
              <span className="text-amber-500 font-serif font-bold text-xs">
                A
              </span>
            </div>
            <span className="text-sm font-serif font-bold tracking-tight text-slate-500">
              AURA
            </span>
          </div>

          <div className="flex gap-8 text-xs text-slate-600 uppercase tracking-wider">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Contact
            </a>
          </div>

          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} Aura. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
}