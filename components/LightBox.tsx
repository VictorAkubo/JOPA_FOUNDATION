import React, { useEffect, useRef, useState } from 'react';
import { X, MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';

type StoryData = {
  images: string[];
  title: string;
  location: string;
  story: string;
  initialImage?: string;
};

type LightBoxProps = {
  data: StoryData | null; // Data can be null if nothing is selected
  onClose: () => void;
};

const LightBox = ({ data, onClose }: LightBoxProps) => {
  // Correcting useRef types for HTML Elements
  const modalRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = data?.images || [];

  // Using Ref for touch coordinates to persist values through renders
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".modal-backdrop", { opacity: 0 }
        , { opacity: 1, duration: 0.5 });
      gsap.fromTo(".modal-content",
        { scale: 0.9, opacity: 0, y: 30 }, 
        { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "power4.out" }
      );
    }, modalRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (carouselRef.current && images.length > 0) {
      gsap.to(carouselRef.current, {
        xPercent: -currentIndex * 100,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [currentIndex, images.length]);

  if (!data || images.length === 0) return null;

  // Typing the Touch Events properly
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    // If we don't have a move, end early
    if (!touchEndX.current) return;

    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
    
    // Reset values for next swipe
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        className="modal-backdrop absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
        onClick={onClose}
      />

      <div className="modal-content relative w-full max-w-6xl bg-[#0a0c10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[120] p-2.5 bg-black/50 hover:bg-orange-600 rounded-full text-white transition-all shadow-lg outline-none"
        >
          <X size={22} />
        </button>

        <div 
          className="w-full md:w-3/5 bg-slate-900 relative overflow-hidden h-[300px] md:h-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div ref={carouselRef} className="flex h-full w-full">
            {images.map((img, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img 
                  src={img} 
                  className="w-full h-full object-cover"
                  alt={`Impact moment ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <div className="absolute inset-0 z-10 opacity-0 md:group-hover:opacity-100 transition-opacity flex justify-between items-center px-4 group pointer-events-none">
                <button onClick={handlePrev} className="p-3 rounded-full bg-black/50 text-white hover:bg-orange-600 outline-none pointer-events-auto">
                  <ChevronLeft size={24}/>
                </button>
                <button onClick={handleNext} className="p-3 rounded-full bg-black/50 text-white hover:bg-orange-600 outline-none pointer-events-auto">
                  <ChevronRight size={24}/>
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 md:hidden p-2 rounded-full bg-black/40 backdrop-blur-sm">
                {images.map((_, index) => (
                  <div key={index} className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-orange-500' : 'bg-white/40'}`} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="w-full md:w-2/5 p-8 md:p-14 flex flex-col justify-center bg-gradient-to-br from-[#0a0c10] to-[#11141a]">
          <div className="flex items-center gap-2 text-orange-500 mb-6">
            <Heart size={18} fill="currentColor" />
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold">A Shared Moment</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            {data.title}
          </h3>

          <div className="flex items-center gap-2 text-slate-500 text-sm mb-10">
            <MapPin size={14} />
            <span>{data.location}</span>
          </div>

          <p className="text-slate-400 leading-relaxed font-light italic border-l-2 border-orange-900/40 pl-6 text-base">
            "{data.story}"
          </p>
          
          <div className="mt-12 text-slate-600 text-[10px] uppercase font-bold tracking-widest">
              Image {currentIndex + 1} of {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightBox;