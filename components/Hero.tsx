'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Star } from 'lucide-react';
export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-900 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-80"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-8">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs uppercase tracking-widest text-slate-300">
                Private Members Club
              </span>
            </div>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: 'easeOut'
        }} className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-tight mb-8">
            Curated connections for the{' '}
            <span className="text-amber-400 italic">exceptional</span>.
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4,
          ease: 'easeOut'
        }} className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Aura is an exclusive digital sanctuary designed for sophisticated
            adults seeking meaningful connections, intellectual discourse, and
            curated experiences.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6,
          ease: 'easeOut'
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Request Invitation
            </Button>
            <Button variant="ghost" size="lg">
              Explore Membership
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-slate-500">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </motion.div>
    </section>;
}