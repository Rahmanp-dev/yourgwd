import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BOUTIQUES = [
  {
    name: 'Aanya Ethnic Boutique',
    slug: 'aanya-ethnic-cyberabad',
    phone: '919876543210',
    niche: 'Boutique and Ethnic Clothing',
    theme: {
      bg: 'bg-rose-50',
      text: 'text-rose-900',
      accent: 'text-rose-600',
      buttonBg: 'bg-rose-600',
      buttonHover: 'hover:bg-rose-700',
      cardBg: 'bg-white',
      fontHeading: 'font-serif',
      fontBody: 'font-sans',
      style: 'glassmorphism'
    }
  },
  {
    name: 'Zoya Designer Wear',
    slug: 'zoya-designs-hyd',
    phone: '919876543211',
    niche: 'Boutique and Ethnic Clothing',
    theme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-950',
      accent: 'text-emerald-700',
      buttonBg: 'bg-emerald-800',
      buttonHover: 'hover:bg-emerald-900',
      cardBg: 'bg-white',
      fontHeading: 'font-serif',
      fontBody: 'font-sans',
      style: 'editorial'
    }
  },
  {
    name: 'Kriti Handlooms',
    slug: 'kriti-handlooms-cyberabad',
    phone: '919876543212',
    niche: 'Boutique and Ethnic Clothing',
    theme: {
      bg: 'bg-amber-50',
      text: 'text-amber-950',
      accent: 'text-amber-700',
      buttonBg: 'bg-amber-700',
      buttonHover: 'hover:bg-amber-800',
      cardBg: 'bg-orange-50',
      fontHeading: 'font-sans tracking-wide',
      fontBody: 'font-sans',
      style: 'earthy'
    }
  },
  {
    name: 'Nayaab Silks & Cottons',
    slug: 'nayaab-cyberabad',
    phone: '919876543213',
    niche: 'Boutique and Ethnic Clothing',
    theme: {
      bg: 'bg-slate-50',
      text: 'text-slate-900',
      accent: 'text-indigo-600',
      buttonBg: 'bg-indigo-900',
      buttonHover: 'hover:bg-indigo-800',
      cardBg: 'bg-white',
      fontHeading: 'font-serif',
      fontBody: 'font-serif',
      style: 'luxury'
    }
  },
  {
    name: 'Vastra by Sneha',
    slug: 'vastra-by-sneha',
    phone: '919876543214',
    niche: 'Boutique and Ethnic Clothing',
    theme: {
      bg: 'bg-fuchsia-50',
      text: 'text-fuchsia-950',
      accent: 'text-fuchsia-600',
      buttonBg: 'bg-fuchsia-600',
      buttonHover: 'hover:bg-fuchsia-700',
      cardBg: 'bg-white',
      fontHeading: 'font-sans font-bold',
      fontBody: 'font-sans',
      style: 'pastel'
    }
  }
];

const IMAGES = {
  hero: [
    "https://images.unsplash.com/photo-1583391733958-6c68205f2571?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550614000-4b95d4edfa21?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1601334057865-c335fc0cc20e?q=80&w=1200&auto=format&fit=crop"
  ],
  products: [
    "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604928141064-207cea6f5722?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583391733975-c8dc8f4d9b23?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613915617409-b3bba12f8087?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600&auto=format&fit=crop"
  ],
  collection: [
    "https://images.unsplash.com/photo-1563209590-edba01103f69?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509631179647-0c71a35123d6?q=80&w=800&auto=format&fit=crop"
  ]
};

function generatePageCode(boutique) {
  const { theme } = boutique;
  const isGlass = theme.style === 'glassmorphism';
  
  return `
"use client";
import React, { useState } from 'react';
import { ShoppingBag, Star, Shield, Truck, Heart, ArrowRight, Instagram, MessageCircle, Info } from 'lucide-react';

export default function ${boutique.slug.replace(/-/g, '')}Page() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const products = [
    { id: 1, name: "Handwoven Silk Saree", price: "₹8,500", img: "${IMAGES.products[0]}" },
    { id: 2, name: "Embroidered Anarkali Suit", price: "₹12,000", img: "${IMAGES.products[1]}" },
    { id: 3, name: "Festive Lehenga Choli", price: "₹25,000", img: "${IMAGES.products[2]}" },
    { id: 4, name: "Cotton Kurti Set", price: "₹3,200", img: "${IMAGES.products[3]}" },
    { id: 5, name: "Banarasi Dupatta", price: "₹4,500", img: "${IMAGES.products[4]}" },
    { id: 6, name: "Designer Kurta Pajama", price: "₹7,500", img: "${IMAGES.products[5]}" }
  ];

  return (
    <div className="min-h-screen ${theme.bg} ${theme.text} ${theme.fontBody}">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 ${isGlass ? 'bg-white/70 backdrop-blur-md border-b border-white/20' : 'bg-white shadow-sm'}">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl ${theme.fontHeading} ${theme.accent} font-bold">${boutique.name}</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#collections" className="hover:${theme.accent} transition-colors">Collections</a>
              <a href="#shop" className="hover:${theme.accent} transition-colors">Shop</a>
              <a href="#about" className="hover:${theme.accent} transition-colors">Our Story</a>
              <div className="relative cursor-pointer">
                <ShoppingBag className="w-6 h-6 hover:${theme.accent} transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 ${theme.buttonBg} text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-${theme.accent}/20 text-sm font-medium ${theme.accent}">
              New Festive Collection 2026
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold ${theme.fontHeading} leading-tight">
              Elegance Woven in Every <span className="${theme.accent} italic">Thread</span>
            </h1>
            <p className="text-lg opacity-80 max-w-lg">
              Discover artisanal ethnic wear that celebrates tradition while embracing modern silhouettes. Handcrafted for your most special moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#shop" className="inline-flex items-center justify-center px-8 py-4 rounded-full ${theme.buttonBg} ${theme.buttonHover} text-white font-medium transition-all transform hover:scale-105">
                Shop the Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="https://wa.me/${boutique.phone}" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-emerald-600 border border-emerald-200 hover:bg-emerald-50 font-medium transition-all">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-${theme.accent}/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4"></div>
            <img src="${IMAGES.hero[Math.floor(Math.random()*IMAGES.hero.length)]}" alt="Hero Collection" className="relative rounded-[2rem] object-cover h-[600px] w-full shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 2. Featured Collections / Lookbook */}
      <section id="collections" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold ${theme.fontHeading} mb-4">The Lookbook</h2>
            <p className="opacity-80 max-w-2xl mx-auto">Curated styles for the modern muse. Browse our signature looks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Wedding Edit', 'Everyday Elegance', 'Festive Specials'].map((title, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]">
                <img src={["${IMAGES.collection[0]}", "${IMAGES.collection[1]}", "${IMAGES.collection[2]}"][i]} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl text-white ${theme.fontHeading} font-medium mb-2">{title}</h3>
                  <span className="inline-flex items-center text-white/90 text-sm font-medium">
                    View Look <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Grid (Shop) */}
      <section id="shop" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold ${theme.fontHeading} mb-4">Latest Arrivals</h2>
            <p className="opacity-80">Shop our most coveted pieces.</p>
          </div>
          <button className="${theme.accent} font-medium hover:underline flex items-center">
            View All <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col ${theme.cardBg} rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 ${isGlass ? 'bg-opacity-60 backdrop-blur-sm border border-white/40' : ''}">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img src={product.img} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button onClick={addToCart} className="w-full py-3 ${theme.buttonBg} ${theme.buttonHover} text-white font-medium rounded-xl shadow-lg flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" /> Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="${theme.accent} font-semibold text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Trust Badges / Value Props */}
      <section className="py-16 bg-white/80 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 rounded-full bg-${theme.accent}/10 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 ${theme.accent}" />
              </div>
              <h3 className="text-xl font-medium ${theme.fontHeading} mb-2">Secure Payments</h3>
              <p className="opacity-70 text-sm">100% secure transactions via UPI, Credit/Debit cards.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 rounded-full bg-${theme.accent}/10 flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 ${theme.accent}" />
              </div>
              <h3 className="text-xl font-medium ${theme.fontHeading} mb-2">Pan-India Shipping</h3>
              <p className="opacity-70 text-sm">Fast and reliable delivery across all Indian pin codes.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 rounded-full bg-${theme.accent}/10 flex items-center justify-center mb-4">
                <Info className="w-8 h-8 ${theme.accent}" />
              </div>
              <h3 className="text-xl font-medium ${theme.fontHeading} mb-2">Custom Tailoring</h3>
              <p className="opacity-70 text-sm">Get the perfect fit with our bespoke tailoring services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Brand Story */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold ${theme.fontHeading}">The Story of ${boutique.name}</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              Born from a love for traditional Indian textiles and contemporary design, we create pieces that tell a story. Every garment is crafted with meticulous attention to detail by skilled artisans.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Based in the heart of Cyberabad, we bring you collections that blend the rich heritage of ethnic wear with the demands of modern aesthetics.
            </p>
            <img src="${IMAGES.hero[0]}" alt="Brand Story" className="w-full h-48 object-cover rounded-2xl mt-8" />
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img src="${IMAGES.hero[2]}" alt="Craftsmanship" className="rounded-2xl w-full h-64 object-cover" />
              <img src="${IMAGES.hero[3]}" alt="Details" className="rounded-2xl w-full h-64 object-cover translate-y-8" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-${theme.accent} text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold ${theme.fontHeading} mb-4">Loved by Women in Cyberabad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya S.", review: "Absolutely stunning collection! I bought a lehenga for my sister's wedding and it was perfect." },
              { name: "Anjali R.", review: "The quality of the silk sarees here is unmatched. They feel incredibly luxurious." },
              { name: "Neha K.", review: "Amazing customer service via WhatsApp. The fitting was spot on for my custom order." }
            ].map((t, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg mb-6 leading-relaxed">"{t.review}"</p>
                <p className="font-medium">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-3xl ${theme.fontHeading} font-bold mb-6 block">${boutique.name}</span>
              <p className="text-gray-400 max-w-sm mb-6">
                Premium ethnic wear and boutique collections for the modern Indian woman. Visit us in Cyberabad or shop online.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-${theme.accent} transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/${boutique.phone}" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#shop" className="hover:text-white transition-colors">Shop All</a></li>
                <li><a href="#collections" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li>Cyberabad, Hyderabad, 500081</li>
                <li>Email: hello@${boutique.slug.replace(/-/g, '')}.com</li>
                <li>WhatsApp: +${boutique.phone}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2026 ${boutique.name}. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
`;
}

function generateLayoutCode(boutique) {
  return `
export const metadata = {
  title: '${boutique.name} - Premium Ethnic Wear | Cyberabad',
  description: 'Shop the latest collections from ${boutique.name}, a premium boutique in Cyberabad, Hyderabad.',
}

export default function Layout({ children }) {
  return children
}
`;
}

async function run() {
  console.log("Starting Fallback Page Generation for Cyberabad Boutiques...");
  const baseDir = path.join(__dirname, '..', 'app', 'client');

  for (const boutique of BOUTIQUES) {
    const slugDir = path.join(baseDir, boutique.slug);
    
    // Create directory
    if (!fs.existsSync(slugDir)) {
      fs.mkdirSync(slugDir, { recursive: true });
    }

    // Generate files
    const pageCode = generatePageCode(boutique);
    const layoutCode = generateLayoutCode(boutique);

    fs.writeFileSync(path.join(slugDir, 'page.jsx'), pageCode);
    fs.writeFileSync(path.join(slugDir, 'layout.jsx'), layoutCode);

    console.log(`Generated: ${boutique.slug}`);
  }

  console.log("All 5 boutique pages generated successfully.");
}

run();
