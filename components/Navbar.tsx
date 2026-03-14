"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Utensils, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for a premium feel
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Our Impact", href: "/impact" },
    { name: "Leadership", href: "/leadership" },
    { name: "Partner", href: "/partner" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-[#05070a]/80 backdrop-blur-xl border-b border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-orange-600/10 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
            <Utensils size={20} />
          </div>
          <span className="text-xl font-black tracking-[0.2em] text-white uppercase">
            JOPAF
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.3em] font-bold text-slate-400 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            href="/donate"
            className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-[11px] uppercase tracking-[0.2em] font-black rounded-full transition-all shadow-lg shadow-orange-900/20 active:scale-95"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#05070a] z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-light tracking-widest text-white hover:text-orange-500 transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/donate"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 px-10 py-4 bg-orange-600 text-white rounded-full font-bold uppercase tracking-widest"
        >
          Donate Now
        </Link>
      </div>
    </nav>
  );
}