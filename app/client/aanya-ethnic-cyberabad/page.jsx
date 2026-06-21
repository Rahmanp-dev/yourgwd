
"use client";
import React, { useState } from 'react';
import { ShoppingBag, Star, Shield, Truck, Heart, ArrowRight, Instagram, MessageCircle, Info } from 'lucide-react';

export default function aanyaethniccyberabadPage() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const products = [
    { id: 1, name: "Handwoven Silk Saree", price: "₹8,500", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "Embroidered Anarkali Suit", price: "₹12,000", img: "https://images.unsplash.com/photo-1604928141064-207cea6f5722?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "Festive Lehenga Choli", price: "₹25,000", img: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=600&auto=format&fit=crop" },
    { id: 4, name: "Cotton Kurti Set", price: "₹3,200", img: "https://images.unsplash.com/photo-1583391733975-c8dc8f4d9b23?q=80&w=600&auto=format&fit=crop" },
    { id: 5, name: "Banarasi Dupatta", price: "₹4,500", img: "https://images.unsplash.com/photo-1613915617409-b3bba12f8087?q=80&w=600&auto=format&fit=crop" },
    { id: 6, name: "Designer Kurta Pajama", price: "₹7,500", img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-rose-50 text-rose-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-serif text-rose-600 font-bold">Aanya Ethnic Boutique</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#collections" className="hover:text-rose-600 transition-colors">Collections</a>
              <a href="#shop" className="hover:text-rose-600 transition-colors">Shop</a>
              <a href="#about" className="hover:text-rose-600 transition-colors">Our Story</a>
              <div className="relative cursor-pointer">
                <ShoppingBag className="w-6 h-6 hover:text-rose-600 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
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
            <div className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-text-rose-600/20 text-sm font-medium text-rose-600">
              New Festive Collection 2026
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-tight">
              Elegance Woven in Every <span className="text-rose-600 italic">Thread</span>
            </h1>
            <p className="text-lg opacity-80 max-w-lg">
              Discover artisanal ethnic wear that celebrates tradition while embracing modern silhouettes. Handcrafted for your most special moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#shop" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-medium transition-all transform hover:scale-105">
                Shop the Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-emerald-600 border border-emerald-200 hover:bg-emerald-50 font-medium transition-all">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-text-rose-600/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4"></div>
            <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop" alt="Hero Collection" className="relative rounded-[2rem] object-cover h-[600px] w-full shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 2. Featured Collections / Lookbook */}
      <section id="collections" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4">The Lookbook</h2>
            <p className="opacity-80 max-w-2xl mx-auto">Curated styles for the modern muse. Browse our signature looks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Wedding Edit', 'Everyday Elegance', 'Festive Specials'].map((title, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]">
                <img src={["https://images.unsplash.com/photo-1563209590-edba01103f69?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1509631179647-0c71a35123d6?q=80&w=800&auto=format&fit=crop"][i]} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl text-white font-serif font-medium mb-2">{title}</h3>
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
            <h2 className="text-4xl font-bold font-serif mb-4">Latest Arrivals</h2>
            <p className="opacity-80">Shop our most coveted pieces.</p>
          </div>
          <button className="text-rose-600 font-medium hover:underline flex items-center">
            View All <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-opacity-60 backdrop-blur-sm border border-white/40">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img src={product.img} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button onClick={addToCart} className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-xl shadow-lg flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" /> Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="text-rose-600 font-semibold text-lg">{product.price}</p>
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
              <div className="w-16 h-16 rounded-full bg-text-rose-600/10 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-medium font-serif mb-2">Secure Payments</h3>
              <p className="opacity-70 text-sm">100% secure transactions via UPI, Credit/Debit cards.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 rounded-full bg-text-rose-600/10 flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-medium font-serif mb-2">Pan-India Shipping</h3>
              <p className="opacity-70 text-sm">Fast and reliable delivery across all Indian pin codes.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 rounded-full bg-text-rose-600/10 flex items-center justify-center mb-4">
                <Info className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-medium font-serif mb-2">Custom Tailoring</h3>
              <p className="opacity-70 text-sm">Get the perfect fit with our bespoke tailoring services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Brand Story */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold font-serif">The Story of Aanya Ethnic Boutique</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              Born from a love for traditional Indian textiles and contemporary design, we create pieces that tell a story. Every garment is crafted with meticulous attention to detail by skilled artisans.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Based in the heart of Cyberabad, we bring you collections that blend the rich heritage of ethnic wear with the demands of modern aesthetics.
            </p>
            <img src="https://images.unsplash.com/photo-1583391733958-6c68205f2571?q=80&w=1200&auto=format&fit=crop" alt="Brand Story" className="w-full h-48 object-cover rounded-2xl mt-8" />
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1550614000-4b95d4edfa21?q=80&w=1200&auto=format&fit=crop" alt="Craftsmanship" className="rounded-2xl w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop" alt="Details" className="rounded-2xl w-full h-64 object-cover translate-y-8" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-text-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4">Loved by Women in Cyberabad</h2>
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
              <span className="text-3xl font-serif font-bold mb-6 block">Aanya Ethnic Boutique</span>
              <p className="text-gray-400 max-w-sm mb-6">
                Premium ethnic wear and boutique collections for the modern Indian woman. Visit us in Cyberabad or shop online.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-text-rose-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/919876543210" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-500 transition-colors">
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
                <li>Email: hello@aanyaethniccyberabad.com</li>
                <li>WhatsApp: +919876543210</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2026 Aanya Ethnic Boutique. All rights reserved.</p>
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
