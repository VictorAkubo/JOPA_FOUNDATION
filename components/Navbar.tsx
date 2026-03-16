"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Utensils, Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const currentPath = usePathname(); 

  const verify = currentPath?.endsWith('/success');

  // Handle scroll effect for a premium feel
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Leadership", href: "#leadership" },
    { name: "About", href: "#about" },
    { name: "Partner", href: "#invitation" },
    { name: "Our Impact", href: "#impact" },
    { name: "Support", href: "#support" },
    { name: "Gallery", href: "#gallery" },
    { name: "Letters", href: "#hope" },
        { name: "Contact Us", href: "#footer" },
  ];
  if(!verify) return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-[#05070a]/80 backdrop-blur-xl border-b border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="w-screen mx-auto px-6 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <div className="p-2 rounded-lg bg-orange-600/10 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
            <img src="/jopa.jpg" className="rounded-full w-10 h-10" />
          </div>
          <span className="text-xl font-black tracking-[0.2em] text-white uppercase">
            JOPAF
          </span>
        </Link>

        {/* Desktop Links */}


        {/* Mobile Toggle */}
        <button 
          className="text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed h-screen inset-0 bg-[#05070a] z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-light tracking-widest text-white hover:text-orange-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <Link
          href="/donation"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 px-10 py-4 bg-orange-600 text-white rounded-full font-bold uppercase tracking-widest"
        >
          Donate Now
        </Link>
      </div>
    </nav>
    
  );
  return;
}