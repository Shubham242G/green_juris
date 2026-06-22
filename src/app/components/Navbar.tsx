"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#0d3d1f]/95 backdrop-blur-md border-b border-[#4ab866]/20"
            : "bg-[#0d3d1f]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-1 flex items-center justify-between">
  {/* Logo - Shifted Left */}
  <a href="/" className="flex items-center gap-3 no-underline flex-shrink-0 -ml-4 md:-ml-6">
    <div className="relative w-44 h-44 md:w-56 md:h-56 flex-shrink-0 -my-14 md:-my-16 overflow-visible">
      {!imageError ? (
        <img
          src="/assets/greenjuras.png"
          alt="GreenJuris Logo"
          className="w-full h-full object-contain rounded-full"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full bg-[#4ab866] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-4xl md:text-5xl">GJ</span>
        </div>
      )}
    </div>
  </a>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex items-center gap-8 lg:gap-10 list-none">
    <li>
      <a
        href="#about"
        className="text-white/80 no-underline text-[0.8rem] lg:text-[0.85rem] font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] transition-colors whitespace-nowrap"
      >
        About
      </a>
    </li>
    <li>
      <a
        href="/services"
        className="text-white/80 no-underline text-[0.8rem] lg:text-[0.85rem] font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] transition-colors whitespace-nowrap"
      >
        Services
      </a>
    </li>
    <li>
      <a
        href="#founder"
        className="text-white/80 no-underline text-[0.8rem] lg:text-[0.85rem] font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] transition-colors whitespace-nowrap"
      >
        Founder
      </a>
    </li>
    <li>
      <a
        href="#offices"
        className="text-white/80 no-underline text-[0.8rem] lg:text-[0.85rem] font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] transition-colors whitespace-nowrap"
      >
        Offices
      </a>
    </li>
    <li>
      <a
        href="https://www.gslo.in/pages/contactUs"
        target="_blank"
        className="bg-[#4ab866] text-white no-underline py-2 px-5 text-[0.8rem] lg:text-[0.85rem] font-medium tracking-[1.5px] uppercase hover:bg-white hover:text-[#0d3d1f] transition-all whitespace-nowrap"
      >
        Consult Now
      </a>
    </li>
  </ul>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-white text-2xl flex-shrink-0"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  >
    {mobileMenuOpen ? "✕" : "☰"}
  </button>
</div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed top-[72px] right-0 bottom-0 w-64 bg-[#0d3d1f] z-[99] p-6 shadow-lg md:hidden"
        >
          <ul className="flex flex-col gap-4 list-none">
            <li>
              <a
                href="#about"
                className="text-white/80 no-underline text-sm font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] block"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-white/80 no-underline text-sm font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#founder"
                className="text-white/80 no-underline text-sm font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Founder
              </a>
            </li>
            <li>
              <a
                href="#offices"
                className="text-white/80 no-underline text-sm font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Offices
              </a>
            </li>
            <li>
              <a
                href="https://www.gslo.in/pages/contactUs"
                target="_blank"
                className="inline-block bg-[#4ab866] text-white no-underline py-2 px-4 text-sm font-medium tracking-[1.5px] uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Consult Now
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
}