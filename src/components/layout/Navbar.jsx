import React from 'react';
import { ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lumina-aqua to-lumina-lavender flex items-center justify-center border border-white">
            <div className="w-2 h-2 rounded-full bg-lumina-gold animate-pulse shadow-[0_0_10px_#FFD700]" />
          </div>
          <span className="font-serif text-xl tracking-widest text-slate-800 font-medium">
            LUMINA CRYSTALS
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 font-serif text-sm tracking-wide text-slate-600">
          {['Crystals', 'Rituals', 'Jewelry', 'Learn'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-amber-500 transition-colors duration-300 hover:text-glow"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-lumina-gold/50 transition-all duration-300 text-xs tracking-wider uppercase bg-white/50 hover:bg-white">
            Connect Oracle
          </button>

          <div className="flex items-center gap-4 text-slate-600">
            <button className="hover:text-lumina-gold transition-colors">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <button className="hover:text-lumina-gold transition-colors">
              <User size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
