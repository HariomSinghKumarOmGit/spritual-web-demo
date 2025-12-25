import React, { Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CrystalHero from './components/3d/CrystalHero';
import ProductGrid from './components/home/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-lumina-cream text-slate-800 selection:bg-lumina-gold/30">
      <Navbar />

      <main>
        <Suspense fallback={<div className="h-[80vh] flex items-center justify-center">Loading Crystal...</div>}>
          <CrystalHero />
        </Suspense>

        <ProductGrid />

        {/* Placeholder for Community Section */}
        <section className="py-24 bg-gradient-to-br from-lumina-lavender to-white text-center px-6">
          <h2 className="font-serif text-3xl mb-8">Join the Circle</h2>
          <p className="max-w-xl mx-auto text-slate-500 mb-8">
            Subscribe to our cosmic updates and receive a free crystal meditation guide.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-lumina-gold bg-white/80"
            />
            <button className="px-6 py-3 bg-slate-800 text-white rounded-full font-serif text-sm tracking-widest hover:bg-slate-700 transition-colors">
              JOIN
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
