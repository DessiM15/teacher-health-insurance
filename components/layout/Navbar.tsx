"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(26,95,175,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Left: Logo + Company Name */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="New Horizons Benefits Group"
            width={52}
            height={52}
            className="h-[52px] w-auto"
            priority
          />
          <span
            className={`hidden md:inline-block font-display font-bold text-sm transition-colors duration-300 ${
              scrolled ? "text-[#0F3F7A]" : "text-white"
            }`}
          >
            New Horizons Benefits Group
          </span>
        </a>

        {/* Right: CTA Button */}
        <a
          href="#savings-review"
          className="bg-[#C9A040] text-[#0F3F7A] font-semibold rounded-lg px-5 py-2 text-sm hover:bg-[#A07C20] transition-colors duration-200"
        >
          Check My Coverage Options
        </a>
      </div>
    </nav>
  );
}
