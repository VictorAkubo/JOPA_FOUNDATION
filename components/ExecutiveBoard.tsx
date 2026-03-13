import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ExecutiveBoard = () => {
  const boardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exec-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: boardRef.current,
          start: "top 80%",
        }
      });
    }, boardRef);
    return () => ctx.revert();
  }, []);

  const board = [
    { 
      role: "President", 
      name: "Ojonugwa Julius Akubo", 
      desc: "Visionary leader dedicated to touching lives through strategic philanthropy.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
    },
    { 
      role: "Vice President", 
      name: "Executive Director", 
      desc: "Directing community growth and ensuring every mission reaches its heart.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
    },
    { 
      role: "Financial Secretary", 
      name: "Strategy Lead", 
      desc: "Upholding the pillar of transparency and trust in every shared gift.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
    },
  ];

  return (
    <section ref={boardRef} className="py-32 bg-[#05070a] relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="text-left">
            <h4 className="text-orange-600 font-bold tracking-[0.3em] uppercase text-xs mb-4">Leadership</h4>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              The Hearts Behind <br/> <span className="text-slate-500 italic font-serif font-light">JOPA Foundation</span>
            </h2>
          </div>
          <p className="max-w-xs text-slate-400 italic text-left border-l border-orange-900/50 pl-6 py-2">
            "Driven by a shared passion for touching lives and sharing love."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {board.map((member, i) => (
            <div key={i} className="exec-card group">
              <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/5">
                
                {/* Photo with soft overlay */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
                />
                
                {/* Gradient Overlay - ensuring text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/20 to-transparent opacity-90" />
                
                {/* Information Layer */}
                <div className="absolute inset-0 flex flex-col justify-end p-10 text-left">
                  <div className="overflow-hidden">
                    <span className="inline-block text-orange-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-3 transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-1">
                      {member.role}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white tracking-tight mb-3">
                    {member.name}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {member.desc}
                  </p>
                  
                  {/* Decorative line that grows on hover */}
                  <div className="mt-6 h-[2px] w-0 bg-orange-600 transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveBoard;