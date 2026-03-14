import React from 'react';
import { HeartHandshake } from 'lucide-react';

const Invitation = () => {
  const email = "jopafoundation1@gmail.com";
  const subject = "Partner";
  const body = `Hi, I would love to ${subject} with Jopa Foundation.`;
  const mailtoUrlForPartnership = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section className="py-24 px-6 bg-[#05070a]">
      <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-orange-950/20 to-transparent border border-orange-900/20 relative overflow-hidden text-center">
        <div className="relative z-10">
          <div className="flex justify-center mb-8 text-orange-500">
            <HeartHandshake size={48} strokeWidth={1} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Help us touch <span className="italic font-serif text-slate-400 font-light">more lives.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12 font-light">
            Whether through volunteering or support, your kindness ensures that the spirit of sharing love continues to grow.
          </p>
          <a href={mailtoUrlForPartnership} className="px-12 py-5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-orange-900/20">
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};
export default Invitation