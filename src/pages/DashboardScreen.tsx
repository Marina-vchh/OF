import React from 'react';
import { motion } from 'framer-motion';
import { AvatarScroll } from '../components/AvatarScroll';
import { ProfileCard } from '../components/ProfileCard';
import { Search, Filter, Bell } from 'lucide-react';
const profiles = [{
  id: 1,
  name: 'Isabella',
  age: 24,
  bio: 'Art student by day, digital dreamer by night. I love deep conversations about philosophy and spontaneous adventures.',
  image: 'https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&w=800&auto=format&fit=crop',
  tags: ['Artistic', 'Playful'],
  isNew: true
}, {
  id: 2,
  name: 'Marcus',
  age: 29,
  bio: 'Fitness enthusiast and personal chef. Looking for someone to share healthy recipes and workout tips with.',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
  tags: ['Fitness', 'Cooking'],
  isNew: false
}, {
  id: 3,
  name: 'Sophia',
  age: 26,
  bio: "Tech entrepreneur building the future. When I'm not coding, I'm exploring virtual worlds.",
  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  tags: ['Smart', 'Ambitious'],
  isNew: true
}, {
  id: 4,
  name: 'Aria',
  age: 22,
  bio: "Music producer and DJ. Let's make some noise and create beautiful harmonies together.",
  image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop',
  tags: ['Music', 'Creative'],
  isNew: false
}, {
  id: 5,
  name: 'Lucas',
  age: 31,
  bio: 'Architect with a passion for sustainable design. I appreciate structure, beauty, and intelligent design.',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  tags: ['Design', 'Intellectual'],
  isNew: false
}, {
  id: 6,
  name: 'Eva',
  age: 25,
  bio: 'Fashion designer obsessed with textures and colors. I see the world as a canvas waiting to be painted.',
  image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800&auto=format&fit=crop',
  tags: ['Fashion', 'Style'],
  isNew: true
}];
export function DashboardScreen() {
  return <div className="min-h-screen bg-deep-900 text-lavender pb-20 md:pb-0 md:pl-64">
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-40 bg-deep-900/80 backdrop-blur-lg border-b border-lavender-faint px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-hotPink flex items-center justify-center">
            <span className="font-display font-bold text-white">E</span>
          </div>
          <span className="font-display font-bold text-lg text-white">
            EROS
          </span>
        </div>
        <button className="p-2 text-lavender hover:text-white">
          <Bell className="w-5 h-5" />
        </button>
      </header>

      <main className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
        {/* Top Bar (Desktop) */}
        <div className="hidden md:flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-1">
              Good Evening, Alex
            </h1>
            <p className="text-lavender-muted">
              Ready to connect with someone new?
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-lavender-muted" />
              <input type="text" placeholder="Search personas..." className="bg-deep-800 border border-lavender-faint rounded-full pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-hotPink/50 focus:ring-1 focus:ring-hotPink/50 w-64 transition-all" />
            </div>
            <button className="p-2.5 rounded-full bg-deep-800 border border-lavender-faint text-lavender hover:text-white hover:border-hotPink/50 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
            <button className="p-2.5 rounded-full bg-deep-800 border border-lavender-faint text-lavender hover:text-white hover:border-hotPink/50 transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-hotPink rounded-full border border-deep-900" />
            </button>
          </div>
        </div>

        {/* Stories/Avatars */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-display font-bold text-white">
              Recent Activity
            </h2>
            <button className="text-xs font-medium text-cyan hover:text-cyan-hover uppercase tracking-wider">
              View All
            </button>
          </div>
          <AvatarScroll />
        </section>

        {/* Main Grid */}
        <section>
          <div className="flex items-center gap-4 mb-6 overflow-x-auto no-scrollbar pb-2">
            {['Recommended', 'New Arrivals', 'Trending', 'Nearby'].map((tab, i) => <button key={tab} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${i === 0 ? 'bg-hotPink text-white shadow-lg shadow-hotPink/20' : 'bg-deep-800 text-lavender-muted hover:bg-deep-800/80 hover:text-white border border-lavender-faint'}`}>
                  {tab}
                </button>)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {profiles.map((profile, index) => <ProfileCard key={profile.id} index={index} {...profile} />)}
          </div>
        </section>
      </main>
    </div>;
}