"use client"
import React from "react"
import Link from "next/link"
const Button = () => {
  return (
          <Link href="/donation" className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 hover:border-orange-500/50 text-white font-medium rounded-full transition-all duration-700 tracking-wide">
            Donate Now
          </Link>
    )
};
export default Button;