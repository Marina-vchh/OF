import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
const avatars = [{
  id: 1,
  name: 'Create',
  image: null,
  isCreate: true
}, {
  id: 2,
  name: 'Elena',
  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  status: 'online'
}, {
  id: 3,
  name: 'Sarah',
  image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
  status: 'offline'
}, {
  id: 4,
  name: 'Yuki',
  image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop',
  status: 'online'
}, {
  id: 5,
  name: 'Zara',
  image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=200&auto=format&fit=crop',
  status: 'online'
}, {
  id: 6,
  name: 'Maya',
  image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop',
  status: 'offline'
}, {
  id: 7,
  name: 'Chloe',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  status: 'online'
}, {
  id: 8,
  name: 'Nina',
  image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop',
  status: 'offline'
}];
export function AvatarScroll() {
  return <div className="w-full overflow-x-auto pb-4 pt-2 no-scrollbar">
      <div className="flex items-start gap-4 px-1">
        {avatars.map((avatar, index) => <motion.button key={avatar.id} initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: index * 0.05
      }} className="flex flex-col items-center gap-2 group min-w-[72px]">
            <div className={`relative w-[72px] h-[72px] rounded-full p-[2px] transition-transform duration-300 group-hover:scale-105 ${avatar.isCreate ? 'border-2 border-dashed border-lavender-muted hover:border-hotPink' : 'bg-gradient-to-tr from-hotPink to-purple-500'}`}>
              <div className="w-full h-full rounded-full overflow-hidden bg-deep-800 flex items-center justify-center border-2 border-deep-900">
                {avatar.isCreate ? <Plus className="w-6 h-6 text-lavender-muted group-hover:text-hotPink transition-colors" /> : <img src={avatar.image || ''} alt={avatar.name} className="w-full h-full object-cover" />}
              </div>

              {!avatar.isCreate && avatar.status === 'online' && <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-cyan rounded-full border-2 border-deep-900 shadow-sm" />}
            </div>
            <span className={`text-xs font-medium tracking-wide ${avatar.isCreate ? 'text-lavender-muted group-hover:text-hotPink' : 'text-lavender group-hover:text-white'}`}>
              {avatar.name}
            </span>
          </motion.button>)}
      </div>
    </div>;
}