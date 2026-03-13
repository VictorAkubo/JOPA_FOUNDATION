import React from 'react';
import { Heart, Instagram, Mail, Phone, MapPin, Utensils } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070a] pt-24 pb-12 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-orange-600 mb-8">
              <Utensils size={24} />
              <span className="uppercase tracking-[0.4em] text-sm font-black">JOPA Foundation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light leading-snug mb-8 tracking-tight">
              We share love, <br /> 
              <span className="font-serif italic text-slate-500 text-2xl md:text-3xl">and we touch lives.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed font-light max-w-sm">
              A community-driven philanthropy dedicated to providing essential food supplies to families in need across Nigeria.
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-xs uppercase font-black tracking-[0.3em] text-orange-600 mb-8">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-orange-500 transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed group-hover:text-white transition-colors">
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-orange-500 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-slate-400 text-sm group-hover:text-white transition-colors">
                  hello@jopafoundation.org
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-orange-500 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-slate-400 text-sm group-hover:text-white transition-colors">
                  +234 (0) 800 JOPA LOVE
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-xs uppercase font-black tracking-[0.3em] text-orange-600 mb-8">Follow Our Journey</h4>
            <div className="flex gap-4">
              <a href="#" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-orange-500 hover:border-orange-500/50 transition-all transform hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-orange-500 hover:border-orange-500/50 transition-all transform hover:-translate-y-1">
                <Heart size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.5em] text-slate-600 font-bold">
            © {currentYear} JOPA Foundation Philanthropy
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;