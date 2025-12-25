import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-lumina-aqua/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg tracking-widest">LUMINA</h3>
          <p className="text-sm text-slate-500 leading-relaxed font-sans">
            Ethically sourced tools for your spiritual journey. Awaken your inner radiance with our curated collection.
          </p>
        </div>

        {/* Links */}
        {['Shop', 'About', 'Support'].map((section) => (
          <div key={section} className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-slate-400">
              {section}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400">© 2024 Lumina Crystals. All rights reserved.</p>
        <div className="flex items-center gap-6 text-slate-400">
          <Instagram size={18} className="hover:text-lumina-gold cursor-pointer transition-colors" />
          <Facebook size={18} className="hover:text-lumina-gold cursor-pointer transition-colors" />
          <Twitter size={18} className="hover:text-lumina-gold cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
