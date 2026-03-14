import React from 'react';
import { HandHeart, Users, MapPin } from "lucide-react";

const SimplePantry = () => {
  

const essentials = [
  { 
    name: "Food Distribution", 
    icon: <HandHeart className="text-orange-500/80" strokeWidth={1.5} />, 
    desc: "We organize outreach programs where food items are distributed to widows, vulnerable families, and fatherless children." 
  },
  { 
    name: "Community Support", 
    icon: <Users className="text-orange-500/80" strokeWidth={1.5} />, 
    desc: "We provide basic food supplies to households struggling with poverty and food insecurity." 
  },
  { 
    name: "Compassion Outreach", 
    icon: <MapPin className="text-orange-500/80" strokeWidth={1.5} />, 
    desc: "We connect with communities to identify those most in need and ensure they receive support." 
  }
];

  return (
    <section id="impact" className="py-24 bg-[#05070a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="w-1 h-1 rounded-full bg-orange-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Our Quiet Support</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-light text-white mb-16 tracking-tight">
         What We Do <span className="font-serif italic text-slate-500">Providing support and hope to those in need.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {essentials.map((item, i) => (
            <div key={i} className="p-12 rounded-[2.5rem] bg-[#0a0c10] border border-white/5 hover:border-orange-900/30 transition-all duration-700 group relative overflow-hidden">
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/5 transition-colors duration-700" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-block p-5 rounded-3xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-4 tracking-tight">{item.name}</h3>
                <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimplePantry;