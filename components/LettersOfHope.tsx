import React from 'react';

const LettersOfHope = () => {
  return (
    <section className="py-32 bg-[#05070a] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-5xl text-orange-600/30 font-serif leading-none">“</span>
        <blockquote className="text-2xl md:text-4xl font-serif italic text-slate-300 leading-relaxed mb-8">
          The JOPA Foundation didn't just bring a bag of rice to my door; they brought the peace of knowing my children wouldn't go to bed hungry tonight. That is a kind of love I will never forget.
        </blockquote>
        <div className="h-[1px] w-12 bg-orange-600/50 mx-auto mb-6" />
        <cite className="text-sm uppercase tracking-[0.3em] text-slate-500 font-bold not-italic">
          — A Mother in Lagos
        </cite>
      </div>
    </section>
  );
};
export default LettersOfHope