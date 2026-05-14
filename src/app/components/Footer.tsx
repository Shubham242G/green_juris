export default function Footer() {
  return (
    <footer>
      <div className="bg-[#0d3d1f] px-4 md:px-16 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="footer-brand">
          <span className="font-['Playfair_Display',serif] text-[1.6rem] font-black text-white tracking-[1px] block mb-4">
            Green<span className="text-[#4ab866]">Juris</span>
          </span>
          <p className="text-sm leading-relaxed text-white/50 font-light max-w-[280px]">
            Environmental law division of Gaurav Sharma Law Offices. Defending India's ecosystems
            through principled, passionate legal advocacy since 2007.
          </p>
        </div>
        <div className="footer-col">
          <h4 className="text-[0.7rem] font-bold tracking-[2.5px] uppercase text-[#4ab866] mb-3">
            Practice Areas
          </h4>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <a href="#services" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                Pollution Liability
              </a>
            </li>
            <li>
              <a href="#services" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                Forest Rights
              </a>
            </li>
            <li>
              <a href="#services" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                NGT Representation
              </a>
            </li>
            <li>
              <a href="#services" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                EIA Challenges
              </a>
            </li>
            <li>
              <a href="#services" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                Water Law
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="text-[0.7rem] font-bold tracking-[2.5px] uppercase text-[#4ab866] mb-3">
            GSLO
          </h4>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <a href="https://www.gslo.in/pages/about" target="_blank" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                About the Firm
              </a>
            </li>
            <li>
              <a href="https://www.gslo.in/pages/services" target="_blank" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                All Services
              </a>
            </li>
            <li>
              <a href="https://www.gslo.in/pages/blogSection" target="_blank" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                Legal Blog
              </a>
            </li>
            <li>
              <a href="https://www.gslo.in/pages/contactUs" target="_blank" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="text-[0.7rem] font-bold tracking-[2.5px] uppercase text-[#4ab866] mb-3">
            Connect
          </h4>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <a href="https://www.linkedin.com/in/gaurav-sharma-82a87125b/" target="_blank" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gslo_official" target="_blank" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/177Ktm5qT6/" target="_blank" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="tel:+918595650338" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                +91-8595650338
              </a>
            </li>
            <li>
              <a href="mailto:info@gslo.in" className="text-white/50 no-underline text-sm font-light hover:text-[#4ab866] transition-colors">
                info@gslo.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black/20 px-4 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[0.78rem] text-white/35 tracking-[0.5px] text-center md:text-left">
          © 2025 Green Juris — Environmental Law Division of{" "}
          <a href="https://www.gslo.in/" target="_blank" className="text-[#4ab866] no-underline">
            Gaurav Sharma Law Offices
          </a>
          . All rights reserved.
        </p>
        <p>
          <a
            href="https://www.gslo.in/pages/terms&amp;conditions"
            target="_blank"
            className="text-[0.78rem] text-[#4ab866] no-underline"
          >
            Terms &amp; Conditions
          </a>
        </p>
      </div>
    </footer>
  );
}