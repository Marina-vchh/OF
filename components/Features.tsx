'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, GlassWater, Globe } from 'lucide-react';
const features = [{
  icon: <Shield className="w-6 h-6" />,
  title: 'Verified Privacy',
  description: 'Your discretion is paramount. Our military-grade encryption and strict verification process ensure a sanctuary free from intrusion.'
}, {
  icon: <Users className="w-6 h-6" />,
  title: 'Curated Community',
  description: 'Every member is hand-selected by our committee to ensure a community of accomplished, like-minded individuals.'
}, {
  icon: <GlassWater className="w-6 h-6" />,
  title: 'Exclusive Events',
  description: "Access to private soirées, gallery openings, and intimate gatherings in the world's most desirable locations."
}, {
  icon: <Globe className="w-6 h-6" />,
  title: 'Global Access',
  description: "Whether you're in New York, London, or Tokyo, connect with members who share your lifestyle and standards."
}];
export function Features() {
  return <section className="py-32 bg-slate-950 relative overflow-hidden" id="philosophy">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Section Header */}
          <div className="md:w-1/3">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                The Art of <br />
                <span className="text-amber-500 italic">Belonging</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                We believe that true luxury lies in the quality of one's
                company. Aura is not just an app; it is a gateway to a life
                well-lived, surrounded by those who understand the nuance of
                sophistication.
              </p>
              <div className="h-1 w-20 bg-amber-500/30"></div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="group">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-sm bg-slate-900 border border-slate-800 text-amber-500 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}