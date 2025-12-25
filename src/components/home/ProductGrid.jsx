import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Amethyst Cluster",
    description: "Protection • Intuition • Spirituality",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1567605973956-6a978f142371?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Clear Quartz Point",
    description: "Clarity • Amplification • Healing",
    price: "$32.00",
    image: "https://images.unsplash.com/photo-1596521943633-8c43fc46e911?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Rose Quartz Palm",
    description: "Love • Compassion • Peace",
    price: "$28.00",
    image: "https://images.unsplash.com/photo-1598563391854-463032488a03?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Black Tourmaline",
    description: "Grounding • Protection • Shielding",
    price: "$24.00",
    image: "https://images.unsplash.com/photo-1616787869689-53b0e1635d79?q=80&w=1000&auto=format&fit=crop"
  }
];

const ProductCard = ({ product }) => (
  <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(224,242,247,0.6)] transition-all duration-500 border border-white/50">
    <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
        <button className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-red-400 backdrop-blur-md shadow-sm">
          <Heart size={18} />
        </button>
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-serif text-lg text-slate-800 mb-1">{product.name}</h3>
      <p className="text-xs text-slate-400 font-sans tracking-wide uppercase mb-3">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-serif text-lg text-slate-800">{product.price}</span>
        <button className="opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-xs font-bold tracking-widest text-slate-500 hover:text-lumina-gold uppercase border-b border-transparent hover:border-lumina-gold pb-0.5">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const ProductGrid = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="crystals">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-serif text-4xl text-slate-800">Sacred Tools</h2>
        <p className="text-slate-500 max-w-md mx-auto">
          Hand-selected crystals to elevate your vibration and transform your space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
