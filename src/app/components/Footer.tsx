"use client";

import { useState } from "react";

export default function Footer() {
  const [imageError, setImageError] = useState(false);

  return (
    <footer>
      <div className="bg-[#0d3d1f] px-4 md:px-16 py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div className="footer-brand">
          {/* Logo - Large size */}
          <div className="relative w-40 h-40 md:w-52 md:h-52 mb-3 overflow-visible">
            {!imageError ? (
              <img
                src="/assets/greenjuras.png"
                alt="GreenJuris Logo"
                className="w-full h-full object-contain rounded-full"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-[#4ab866] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-5xl md:text-6xl">GJ</span>
              </div>
            )}
          </div>
          <p className="text-xs leading-relaxed text-white/50 font-light max-w-[260px]">
            Environmental law division of Gaurav Sharma Law Offices. Defending India's ecosystems
            through principled, passionate legal advocacy since 2007.
          </p>
        </div>
        <div className="footer-col">
          <h4 className="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#4ab866] mb-2">
            Practice Areas
          </h4>
          <ul className="list-none flex flex-col gap-1.5">
            <li>
              <a href="#services" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                Pollution Liability
              </a>
            </li>
            <li>
              <a href="#services" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                Forest Rights
              </a>
            </li>
            <li>
              <a href="#services" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                NGT Representation
              </a>
            </li>
            <li>
              <a href="#services" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                EIA Challenges
              </a>
            </li>
            <li>
              <a href="#services" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                Water Law
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#4ab866] mb-2">
            GSLO
          </h4>
          <ul className="list-none flex flex-col gap-1.5">
            <li>
              <a href="https://www.gslo.in/pages/about" target="_blank" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                About the Firm
              </a>
            </li>
            <li>
              <a href="https://www.gslo.in/pages/services" target="_blank" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                All Services
              </a>
            </li>
            <li>
              <a href="https://www.gslo.in/pages/blogSection" target="_blank" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                Legal Blog
              </a>
            </li>
            <li>
              <a href="https://www.gslo.in/pages/contactUs" target="_blank" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="footer-col">
          <h4 className="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#4ab866] mb-2">
            Connect
          </h4>
          <ul className="list-none flex flex-col gap-1.5">
            <li>
              <a href="https://www.linkedin.com/in/gaurav-sharma-82a87125b/" target="_blank" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gslo_official" target="_blank" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/177Ktm5qT6/" target="_blank" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="tel:+918595650338" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                +91-8595650338
              </a>
            </li>
            <li>
              <a href="mailto:info@gslo.in" className="text-white/50 no-underline text-xs font-light hover:text-[#4ab866] transition-colors">
                info@gslo.in
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
}