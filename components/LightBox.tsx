import React, { useEffect, useRef, useState } from 'react';
import { X, MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';

type StoryData = {
  images: string[];
  title: string;
  location: string;
  story: string;
  initialImage?: string; // marked as optional with ?
};

type LightBoxProps = {
  data: StoryData;
  onClose: () => void;
};

const LightBox = ({ data, onClose }:LightBoxProps) => {
  const modalRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = data?.images || []; // Accepting an array of images

  // Gesture/Swipe detection vars
  let touchStartX = 0;
  let touchEndX = 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stunning modal entrance
      gsap.fromTo(".modal-backdrop", { opacity: 0 }, { opacity: 1, duration: 0.5 });
      gsap.fromTo(".modal-content", 
        { scale: 0.9, opacity: 0, y: 30 }, 
        { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "power4.out" }
      );
    }, modalRef);
    return () => ctx.revert();
  }, []);

  // Handle image transitions with GSAP
  useEffect(() => {
    if (carouselRef.current && images.length > 0) {
      gsap.to(carouselRef.current, {
        xPercent: -currentIndex * 100, // Move the inner track
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [currentIndex, images.length]);

  if (!data || images.length === 0) return null;

  // Touch handlers for swiping
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) { // Swipe Left (Next)
      handleNext();
    } else if (touchEndX - touchStartX > 50) { // Swipe Right (Prev)
      handlePrev();
    }
  };

  // Nav functions
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="modal-backdrop absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
        onClick={onClose}
      />

      <div className="modal-content relative w-full max-w-6xl bg-[#0a0c10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[120] p-2.5 bg-black/50 hover:bg-orange-600 rounded-full text-white transition-all shadow-lg outline-none"
        >
          <X size={22} />
        </button>

        {/* --- IMAGE CAROUSEL SIDE --- */}
        <div 
          className="w-full md:w-3/5 bg-slate-900 relative overflow-hidden h-[300px] md:h-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Inner Carousel Track */}
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

          {/* Nav Controls (Desktop/Hover) */}
          {images.length > 1 && (
            <div className="absolute inset-0 z-10 opacity-0 md:group-hover:opacity-100 transition-opacity flex justify-between items-center px-4 group">
              <button onClick={handlePrev} className="p-3 rounded-full bg-black/50 text-white hover:bg-orange-600 outline-none"><ChevronLeft size={24}/></button>
              <button onClick={handleNext} className="p-3 rounded-full bg-black/50 text-white hover:bg-orange-600 outline-none"><ChevronRight size={24}/></button>
            </div>
          )}

          {/* Swipe Indicator (Visible only on mobile/touch) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 md:hidden p-2 rounded-full bg-black/40 backdrop-blur-sm">
             {images.map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-orange-500' : 'bg-white/40'}`} />
             ))}
          </div>
        </div>

        {/* --- STORY SIDE --- */}
        <div className="w-full md:w-2/5 p-8 md:p-14 flex flex-col justify-center bg-gradient-to-br from-[#0a0c10] to-[#11141a]">
          <div className="flex items-center gap-2 text-orange-500 mb-6">
            <Heart size={18} fill="currentColor" />
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold">A Shared Moment</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            {data.title || "Our shared love"}
          </h3>

          <div className="flex items-center gap-2 text-slate-500 text-sm mb-10">
            <MapPin size={14} />
            <span>{data.location || "Community Outreach"}</span>
          </div>

          <p className="text-slate-400 leading-relaxed font-light italic border-l-2 border-orange-900/40 pl-6 text-base">
            "{data.story || "A simple gift that brought light and warmth to a neighbor's home today."}"
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