"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";  // ← ADD THIS IMPORT

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-16 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d3d1f]/95 backdrop-blur-md border-b border-[#4ab866]/20"
            : "bg-[#0d3d1f]"
        }`}
      >
        <a href="/" className="flex items-center gap-3 no-underline">
          {/* REPLACE THIS DIV WITH YOUR LOGO IMAGE */}
          <div className="relative">  {/* Added 'relative' for Next.js Image */}
            <Image
              src="/assets/greenjuris.png"  // ← CHANGE THIS to your filename
              alt="GreenJuris Logo"
              fill
              className="object-contain w-100 h-100 "
              priority  // Loads faster since it's above the fold
            />
          </div>
          <span className="font-['Playfair_Display',serif] text-xl md:text-[1.4rem] font-black text-white tracking-[1px]">
            Green<span className="text-[#4ab866]">Juris</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 list-none">
          <li>
            <a
              href="#about"
              className="text-white/80 no-underline text-[0.85rem] font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-white/80 no-underline text-[0.85rem] font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] transition-colors"
            >
              Practice Areas
            </a>
          </li>
          <li>
            <a
              href="#founder"
              className="text-white/80 no-underline text-[0.85rem] font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] transition-colors"
            >
              Founder
            </a>
          </li>
          <li>
            <a
              href="#offices"
              className="text-white/80 no-underline text-[0.85rem] font-medium tracking-[1.5px] uppercase hover:text-[#4ab866] transition-colors"
            >
              Offices
            </a>
          </li>
          <li>
            <a
              href="https://www.gslo.in/pages/contactUs"
              target="_blank"
              className="bg-[#4ab866] text-white no-underline py-2 px-5 text-[0.85rem] font-medium tracking-[1.5px] uppercase hover:bg-white hover:text-[#0d3d1f] transition-all"
            >
              Consult Now
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
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
                className="text-white/80 no-underline text-sm font-medium tracking-[1.5px] uppercase hover:text-[#4ab866]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white/80 no-underline text-sm font-medium tracking-[1.5px] uppercase hover:text-[#4ab866]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Practice Areas
              </a>
            </li>
            <li>
              <a
                href="#founder"
                className="text-white/80 no-underline text-sm font-medium tracking-[1.5px] uppercase hover:text-[#4ab866]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Founder
              </a>
            </li>
            <li>
              <a
                href="#offices"
                className="text-white/80 no-underline text-sm font-medium tracking-[1.5px] uppercase hover:text-[#4ab866]"
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