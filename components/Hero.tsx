import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { Heart, MoveDown } from 'lucide-react';
import Button from "./Button"
const Hero = () => {
  const heroRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-fade", { 
        opacity: 0, 
        y: 10, 
        duration: 0.10, 
        stagger: 0.2, 
        ease: "power2.out" 
      });
    }, heroRef);
    return () => ctx.revert()
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[85vh] md:min-h-screen bg-[#05070a] flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        
        {/* Styled H3 as a Premium Badge */}
        <div className="hero-fade flex justify-center mb-6">
        {/* <h3 className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[15px] md:text-xs uppercase tracking-[0.1em] text-orange-500 font-bold shadow-2xl backdrop-blur-sm">
            JULIUS OJONUGWA PAUL AKUBO FOUNDATION (JOPAF)
          </h3>*/}
          <h3 className="hero-fade text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-orange-500 mb-8">
            JULIUS OJONUGWA PAUL AKUBO'S FOUNDATION (JOPAF)
          </h3>
        </div>
                <div className="hero-fade h-[1px] w-20 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mx-auto mb-10" />

        {/* Humble Icon */}
        <div className="hero-fade flex justify-center mb-8">
          <div className="p-3 rounded-full bg-white/5 border border-white/10 shadow-inner">
            <Heart size={24} className="text-orange-500/80" fill="currentColor" />
          </div>
        </div>

        {/* The Philanthropic Message */}
        <h1 className="hero-fade text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white mb-8">
          We share love, <br /> 
          <span className="font-serif italic text-slate-400">and we touch lives.</span>
        </h1>

        <div className="hero-fade h-[1px] w-20 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mx-auto mb-10" />

        <p className="hero-fade text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Bringing hope and nourishment to widows, the poor, and the fatherless.
        </p>
                  <button className="hero-fade justify-center m-auto mb-5 flex self-center gap-2 text-orange-500 hover:text-orange-400 transition-colors py-2">
            No families left behind
            <MoveDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        <p className="hero-fade text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">The Julius Ojonugwa Paul Akubo Foundation (JOPAF) is a humanitarian organization
dedicated to providing food and essential food supplies to vulnerable individuals and
families, especially widows, the poor, and fatherless children.
Through compassion and community support, we strive to ensure that no vulnerable
person is left hungry or forgotten.
</p>

        <div className="hero-fade flex flex-col sm:flex-row items-center justify-center gap-6">
          
          <Button />
          
          <button className="group flex items-center gap-2 text-slate-500 hover:text-orange-400 transition-colors py-2">
            See how lives are touched 
            <MoveDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full text-center px-6 opacity-40">
        <p className="text-[10px] uppercase tracking-[0.6em] text-slate-500 font-bold">
          JOPA Philanthropy • Niger, Nigeria
        </p>
      </div>
    </section>
  );
};

export default Hero;