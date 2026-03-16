"use client"
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Heart, ArrowRight, Share2, X, 
  Download, Instagram, Twitter, MessageCircle, Loader2 
} from 'lucide-react';
import * as htmlToImage from 'html-to-image';

const PaymentSuccess = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  // --- Logic: High-Resolution Download ---
  const handleDownload = async () => {
    if (cardRef.current === null) return;
    setIsDownloading(true);
    
    try {
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3, 
        backgroundColor: '#0A0A0A', // Ensures no transparency issues
      });
      
      const link = document.createElement('a');
      link.download = 'JOPAF-Impact-Card.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download failed', err);
    } finally {
      setIsDownloading(false);
    }
  };

  // --- Logic: Social Intent Links ---
  const handleSocialShare = (platform: string) => {
    const shareUrl = "https://jopafoundation.vercel.app";
    const message = encodeURIComponent("I just supported the JOPA Foundation! Join me in making a difference. ✨");

    const links: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${message}%20${shareUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${message}&url=${shareUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    };

    if (platform === 'native' && navigator.share) {
      navigator.share({
        title: 'JOPA Foundation',
        text: 'I just supported a great cause!',
        url: shareUrl,
      }).catch(console.error);
    } else if (links[platform]) {
      window.open(links[platform], '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* --- Main Success Card --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-[#161616] border border-white/10 rounded-[2.5rem] p-8 text-center relative z-10 shadow-2xl"
      >
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#FF4D00]/10 blur-[80px] rounded-full" />
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-[#FF4D00] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,77,0,0.4)]"
        >
          <Check size={40} strokeWidth={3} className="text-white" />
        </motion.div>

        <h1 className="text-3xl font-black tracking-tight mb-2 uppercase italic text-white">
          Donation Received
        </h1>
        
        <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
          Thank you for your heart. Your contribution directly fuels our mission.
        </p>

        <div className="bg-black/40 border border-white/5 rounded-2xl p-5 mb-8 text-left">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Status</span>
            <span className="text-[10px] font-bold text-[#FF4D00] uppercase tracking-widest underline underline-offset-4 decoration-2">Successful</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Purpose</span>
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">General Donation</span>
          </div>
        </div>

        <div className="space-y-4">
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#FF4D00] hover:bg-[#FF6A00] text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#FF4D00]/20"
          >
            Return Home <ArrowRight size={18} />
          </motion.a>
          
          <button 
            onClick={() => setShowShareModal(true)}
            className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors py-2 text-sm font-bold uppercase tracking-widest"
          >
            <Share2 size={16} /> Share Initiative
          </button>
        </div>
      </motion.div>

      {/* Heartfelt Footer Quote */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 flex items-center gap-2 text-[#FF4D00]/60 italic"
      >
        <Heart size={14} fill="currentColor" />
        <span className="text-xs tracking-[0.1em] font-medium uppercase">Small acts, Big impact.</span>
      </motion.div>

      {/* --- Share Modal Overlay --- */}
      <AnimatePresence>
        {showShareModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowShareModal(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60]"
            />

            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="fixed bottom-0 inset-x-0 z-[70] flex flex-col items-center justify-end p-4 md:justify-center md:top-0"
            >
              <div className="w-full max-w-md bg-[#111] rounded-[3rem] border border-white/10 p-6 md:p-8 relative shadow-2xl">
                <button 
                  onClick={() => setShowShareModal(false)}
                  className="absolute top-6 right-6 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors z-[80]"
                >
                  <X size={20} />
                </button>

                <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#FF4D00] mb-6 font-black">
                  Your Impact Badge
                </p>

                {/* VISUAL CARD AREA (Adjusted Line Height & Padding) */}
                <div 
                  ref={cardRef}
                  className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl mb-8 bg-[#0A0A0A] flex flex-col p-10 justify-end"
                >
                   {/* Background Elements */}
                   <div className="absolute top-[-10%] right-[-10%] w-full h-full bg-[#FF4D00]/15 blur-[90px] rounded-full" />
                   
                   {/* Branding */}
                   <div className="absolute top-10 left-10 flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-[10px] font-black text-black">JOPAF</span>
                      </div>
                      <span className="text-[11px] font-black tracking-[0.2em] uppercase italic opacity-80 text-white">Foundation</span>
                   </div>

                   {/* Typography Fix: Higher Leading and Padding */}
                   <div className="relative z-10 text-left">
                      <h2 className="text-4xl font-black italic uppercase leading-[1.1] tracking-tighter mb-6 text-white">
                        I Just <br /> 
                        <span className="text-[#FF4D00] inline-block mb-1">Supported</span> <br /> 
                        A Cause.
                      </h2>
                      <div className="w-12 h-[2px] bg-[#FF4D00] mb-4" />
                      <p className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">
                        jopafoundation.org
                      </p>
                   </div>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  <button 
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-all disabled:opacity-50 active:scale-95"
                  >
                    {isDownloading ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
                    {isDownloading ? "Capturing..." : "Save to Gallery"}
                  </button>

                  <div className="flex justify-between gap-3">
                    {[
                      { icon: MessageCircle, id: 'whatsapp', color: '#25D366' },
                      { icon: Twitter, id: 'twitter', color: '#1DA1F2' },
                      { icon: Share2, id: 'native', color: '#FF4D00' }
                    ].map((btn) => (
                      <button 
                        key={btn.id}
                        onClick={() => handleSocialShare(btn.id)}
                        className="flex-1 flex justify-center py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all active:scale-90 group"
                      >
                        <btn.icon size={22} className="text-gray-500 group-hover:scale-110 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PaymentSuccess;