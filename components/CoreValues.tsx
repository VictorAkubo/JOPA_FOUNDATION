import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Target, Eye, Quote } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CoreValues = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-[#05070a] text-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: About JOPAF */}
          <div className="reveal-text">
            <div className="flex items-center gap-3 text-orange-600 mb-8">
              <Quote size={24} fill="currentColor" className="opacity-50" />
              <span className="uppercase tracking-[0.4em] text-xs font-bold">About JOPAF</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 tracking-tight">
              Established with a vision to <br />
              <span className="font-serif italic text-slate-500">support the overlooked.</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
              <p>
                The Julius Ojonugwa Paul Akubo Foundation (JOPAF) was established with a vision to
                support vulnerable members of society who struggle daily to meet basic needs.
              </p>
              <p>
                Our focus is on widows, the poor, and fatherless children—groups that are often
                overlooked yet face significant challenges.
              </p>
              <p>
                Through community outreach programs, food distribution initiatives, and partnerships
                with compassionate supporters, we aim to bring relief, dignity, and hope to those who
                need it most.
              </p>
            </div>
          </div>

          {/* Right Side: Mission & Vision Cards */}
          <div className="grid gap-8">
            
            {/* Mission Card */}
            <div className="group p-10 md:p-12 rounded-[3rem] bg-[#0a0c10] border border-white/5 hover:border-orange-900/40 transition-all duration-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-orange-600/10 text-orange-500">
                  <Target size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Our Mission</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-light">
                To provide food and essential food items to widows, the poor, and fatherless
                children, helping to alleviate hunger and improve the well-being of vulnerable
                communities.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group p-10 md:p-12 rounded-[3rem] bg-gradient-to-br from-[#0a0c10] to-transparent border border-white/5 hover:border-orange-900/40 transition-all duration-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 text-orange-500">
                  <Eye size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Our Vision</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-light">
                A society where every widow, poor household, and fatherless child has access to
                basic nourishment and support.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;