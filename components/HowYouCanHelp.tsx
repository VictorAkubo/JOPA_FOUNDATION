import React from "react";
import { Heart, Handshake, Users, ArrowRight } from "lucide-react";
import EmailLink from "./Button"
import Button from "./Button"

const HowYouCanHelp = () => {
  const email = "jopafoundation1@gmail.com";
  const subject2 = "Partner";
  const subject1 = "Volunteer";
  const body1 = `Hi, I would love to ${subject1} with Jopa Foundation.`;
  const body2 = `Hi, I would love to ${subject2} with Jopa Foundation.`;
  
  const mailtoUrlForVolunteer = `mailto:${email}?subject=${encodeURIComponent(subject1)}&body=${encodeURIComponent(body1)}`;
  const mailtoUrlForPartnership = `mailto:${email}?subject=${encodeURIComponent(subject2)}&body=${encodeURIComponent(body2)}`;


  
  const actions = [
    {
      name: "Donate",
      icon: <Heart size={24} className="text-orange-500" fill="currentColor" />,
      desc: "Your financial support helps us purchase and distribute food items to widows, vulnerable families, and fatherless children.",
      button:<Button state=""/>
      
    },
    {
      name: "Volunteer",
      icon: <Users size={24} className="text-orange-500" />,
      desc: "Join our outreach programs and become part of the team serving communities with compassion.",
      button:<a className="inline-flex items-center justify-center px-5 py-2.5 bg-orange-500 text-white font-medium rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition duration-200"
    href={mailtoUrlForVolunteer}>Volunteer</a>,
      
    }
  ];

  return (
    <section id="support" className="py-28 bg-[#05070a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1 h-1 rounded-full bg-orange-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Join The Mission
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
            How You Can Help
          </h2>
          <p className="text-slate-500 leading-relaxed max-w-xl font-light text-lg">
            You can make a difference in the lives of vulnerable families. 
            Every act of kindness strengthens our ability to reach more homes 
            with food, care, and hope.
          </p>
        </div>

        {/* Diversified Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Card: Partner With Us (Span 7 columns) */}
          <div className="md:col-span-7 group relative rounded-[2.5rem] bg-[#0a0c10] border border-white/5 p-10 md:p-14 overflow-hidden flex flex-col justify-between hover:border-orange-900/40 transition-all duration-700 min-h-[400px]">
            <div className="relative z-10">
              <div className="mb-8 p-4 w-fit rounded-3xl bg-orange-600/10 text-orange-500">
                <Handshake size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Partner With Us</h3>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Organizations and individuals can collaborate with us to expand our outreach and reach more families in need.
              </p>
            </div>
            
            <a href={mailtoUrlForPartnership} className="relative z-10 mt-8 flex items-center gap-3 text-white font-bold text-xs uppercase tracking-[0.2em] group/btn">
              Collaborate Now <ArrowRight size={18} className="text-orange-500 group-hover/btn:translate-x-2 transition-transform" />
            </a>

            {/* Subtle background glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-600/5 rounded-full blur-[80px]" />
          </div>

          {/* Right Column: Donate & Volunteer (Span 5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {actions.map((item, i) => (
              <div
                key={i}
                className="group flex-1 p-8 rounded-[2.5rem] border border-white/5 bg-[#0a0c10] hover:border-orange-900/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 text-orange-500 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="mb-4">
                  <h3 className="text-xl text-white mb-3 font-bold tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>        
                {item.button}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowYouCanHelp;