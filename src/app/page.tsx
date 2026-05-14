"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // Ticker duplication for seamless loop
    const tickerInner = document.querySelector('.ticker-inner');
    if (tickerInner) {
      const clone = tickerInner.cloneNode(true);
      tickerInner.parentElement?.appendChild(clone);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen bg-[#0d3d1f] relative flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(30,140,58,0.25)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(74,184,102,0.12)_0%,transparent_50%)]"></div>
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[620px] h-[620px] opacity-[0.06] text-[620px] leading-none select-none animate-[slowSpin_60s_linear_infinite]">🌿</div>
        <div className="relative z-10 px-4 md:px-16 py-20 md:py-32 max-w-[800px]">
          <div className="inline-flex items-center gap-2 bg-[#4ab866]/15 border border-[#4ab866]/40 text-[#4ab866] text-[0.75rem] font-semibold tracking-[2px] uppercase py-2 px-4 mb-8 animate-[fadeUp_0.8s_ease_both]">🌱 Gaurav Sharma Law Offices — Environmental Division</div>
          <h1 className="font-['Playfair_Display',serif] text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white mb-6 animate-[fadeUp_0.8s_0.15s_ease_both]">Defending the<br /><em className="text-[#4ab866] not-italic">Earth's Rights</em><br />in Court.</h1>
          <p className="text-[1.15rem] leading-relaxed text-white/65 max-w-[560px] mb-12 font-light animate-[fadeUp_0.8s_0.3s_ease_both]">India's leading environmental law practice. We hold polluters accountable, protect ecosystems, and ensure a greener future through rigorous legal advocacy.</p>
          <div className="flex gap-5 flex-wrap animate-[fadeUp_0.8s_0.45s_ease_both]">
            <a href="https://www.gslo.in/pages/contactUs" target="_blank" className="bg-[#4ab866] text-white px-8 py-4 text-[0.9rem] font-semibold tracking-[1px] uppercase no-underline hover:bg-white hover:text-[#0d3d1f] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(74,184,102,0.4)] transition-all">Free Consultation</a>
            <a href="#services" className="bg-transparent text-white/80 px-8 py-4 text-[0.9rem] font-medium tracking-[1px] uppercase border border-white/25 no-underline hover:border-[#4ab866] hover:text-[#4ab866] transition-all">Explore Services</a>
          </div>
        </div>
        <div className="absolute right-4 md:right-16 bottom-4 md:bottom-16 flex gap-8 md:gap-12 animate-[fadeUp_0.8s_0.6s_ease_both]">
          <div className="text-center"><div className="font-['Playfair_Display',serif] text-2xl md:text-[2.5rem] font-black text-[#4ab866] leading-none">17+</div><div className="text-[0.75rem] text-white/50 tracking-[1px] uppercase mt-1">Years Active</div></div>
          <div className="text-center"><div className="font-['Playfair_Display',serif] text-2xl md:text-[2.5rem] font-black text-[#4ab866] leading-none">500+</div><div className="text-[0.75rem] text-white/50 tracking-[1px] uppercase mt-1">Cases Won</div></div>
          <div className="text-center"><div className="font-['Playfair_Display',serif] text-2xl md:text-[2.5rem] font-black text-[#4ab866] leading-none">3</div><div className="text-[0.75rem] text-white/50 tracking-[1px] uppercase mt-1">City Offices</div></div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-[#1e8c3a] py-3 overflow-hidden whitespace-nowrap">
        <div className="ticker-inner inline-flex gap-8 md:gap-16 animate-[tickerScroll_30s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              <span className="text-[0.78rem] font-semibold tracking-[2px] uppercase text-white/90">Air &amp; Water Pollution</span><span className="text-[#d4f0dc] mx-4">✦</span>
              <span className="text-[0.78rem] font-semibold tracking-[2px] uppercase text-white/90">Wildlife Protection</span><span className="text-[#d4f0dc] mx-4">✦</span>
              <span className="text-[0.78rem] font-semibold tracking-[2px] uppercase text-white/90">Environmental Impact Assessments</span><span className="text-[#d4f0dc] mx-4">✦</span>
              <span className="text-[0.78rem] font-semibold tracking-[2px] uppercase text-white/90">Green Tribunal Representation</span><span className="text-[#d4f0dc] mx-4">✦</span>
              <span className="text-[0.78rem] font-semibold tracking-[2px] uppercase text-white/90">Climate Litigation</span><span className="text-[#d4f0dc] mx-4">✦</span>
              <span className="text-[0.78rem] font-semibold tracking-[2px] uppercase text-white/90">Forest Rights Act</span><span className="text-[#d4f0dc] mx-4">✦</span>
              <span className="text-[0.78rem] font-semibold tracking-[2px] uppercase text-white/90">Corporate Environmental Compliance</span><span className="text-[#d4f0dc] mx-4">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-16 bg-[#f8fdf9] grid md:grid-cols-2 gap-12 md:gap-24 items-center reveal">
        <div className="relative">
          <div className="bg-[#0d3d1f] rounded p-6 md:p-12 relative overflow-hidden">
            <div className="absolute text-8xl right-[-1rem] bottom-[-1rem] opacity-10 leading-none">🌿</div>
            <p className="font-['Playfair_Display',serif] text-xl md:text-[1.4rem] italic text-white leading-relaxed mb-6">"The environment is not a luxury — it is a fundamental right. We fight to make the law reflect that truth."</p>
            <div className="text-[0.8rem] tracking-[2px] uppercase text-[#4ab866] font-semibold">— Gaurav Sharma, Founder</div>
            <div className="flex gap-3 mt-6 flex-wrap">
              <span className="bg-[#4ab866]/15 border border-[#4ab866]/30 text-[#4ab866] text-[0.72rem] font-semibold tracking-[1.5px] uppercase py-1 px-3">NGT Certified</span>
              <span className="bg-[#4ab866]/15 border border-[#4ab866]/30 text-[#4ab866] text-[0.72rem] font-semibold tracking-[1.5px] uppercase py-1 px-3">Supreme Court</span>
              <span className="bg-[#4ab866]/15 border border-[#4ab866]/30 text-[#4ab866] text-[0.72rem] font-semibold tracking-[1.5px] uppercase py-1 px-3">High Courts</span>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[0.7rem] font-bold tracking-[3px] uppercase text-[#1e8c3a] mb-4">Who We Are</div>
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0d3d1f] mb-6">A Law Firm Built for<br />the Planet's Future</h2>
          <p className="text-[1.05rem] leading-relaxed text-[#5a7a62] font-light max-w-[600px] mb-4">Green Juris is the dedicated environmental law division of <a href="https://www.gslo.in/" target="_blank" className="text-[#1e8c3a] font-medium no-underline">Gaurav Sharma Law Offices (GSLO)</a> — one of India's most respected full-service legal firms. We combine decades of litigation excellence with a passionate commitment to environmental justice.</p>
          <p className="text-[1.05rem] leading-relaxed text-[#5a7a62] font-light max-w-[600px]">Whether you're a citizen fighting industrial pollution, an NGO seeking forest protections, or a corporation navigating compliance — our team delivers expert, results-driven counsel at every level of the Indian judicial system.</p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-16 bg-white reveal">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <div className="text-[0.7rem] font-bold tracking-[3px] uppercase text-[#1e8c3a] mb-4">Practice Areas</div>
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0d3d1f]">Our Environmental<br />Law Expertise</h2>
          </div>
          <a href="https://www.gslo.in/pages/services" target="_blank" className="bg-[#4ab866] text-white px-8 py-4 text-[0.9rem] font-semibold tracking-[1px] uppercase no-underline hover:bg-white hover:text-[#0d3d1f] transition-all">All Services →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d4f0dc]">
          {[
            { icon: "🏭", title: "Pollution & Industrial Liability", desc: "Representing affected communities and industries in air, water, and soil pollution matters before the NGT and High Courts. Strict liability claims, compensation, and remediation orders." },
            { icon: "🌳", title: "Forest & Biodiversity Rights", desc: "Protecting forest rights, challenging illegal deforestation, defending tribal communities under the Forest Rights Act, and advocating for wildlife corridor preservation." },
            { icon: "⚖️", title: "NGT Representation", desc: "Full-spectrum representation before the National Green Tribunal — from filing applications to appellate proceedings. We know the NGT inside out." },
            { icon: "📋", title: "Environmental Impact Assessments", desc: "Challenging flawed EIAs, advising on EIA compliance, and ensuring developers meet legal obligations before projects commence." },
            { icon: "🌊", title: "Water Law & Rights", desc: "Groundwater disputes, river pollution litigation, riparian rights, and compliance under the Water (Prevention and Control of Pollution) Act." },
            { icon: "🏢", title: "Corporate Environmental Compliance", desc: "Helping businesses navigate India's complex environmental regulatory landscape — consent management, CSR compliance, and sustainable business legal frameworks." }
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 md:p-10 hover:bg-[#f0faf3] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(13,61,31,0.1)] transition-all relative group">
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#1e8c3a] transition-all duration-500 group-hover:w-full"></div>
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <div className="font-['Playfair_Display',serif] text-xl font-bold text-[#0d3d1f] mb-2">{service.title}</div>
              <p className="text-[0.88rem] leading-relaxed text-[#5a7a62] font-light">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section id="founder" className="bg-[#0d3d1f] grid md:grid-cols-2 gap-0 items-stretch reveal">
        <div className="relative bg-gradient-to-br from-[#155c2c] to-[#1e8c3a] flex items-center justify-center py-20 md:py-32 px-4 overflow-hidden">
          <div className="absolute w-[380px] h-[380px] rounded-full border border-[#4ab866]/30 animate-[ringPulse_3s_ease-in-out_infinite]"></div>
          <div className="absolute w-[320px] h-[320px] rounded-full border border-[#4ab866]/15 animate-[ringPulse_3s_ease-in-out_infinite_1s]"></div>
          <div className="w-[260px] h-[260px] rounded-full border-4 border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-7xl relative z-10">⚖️</div>
        </div>
        <div className="py-12 md:py-20 px-6 md:px-12 lg:px-16">
          <div className="text-[0.7rem] font-bold tracking-[3px] uppercase text-[#4ab866] mb-4">Meet the Founder</div>
          <div className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-black text-[#4ab866] mb-1">Gaurav Sharma</div>
          <div className="text-[0.78rem] tracking-[2px] uppercase text-white/50 font-medium mb-6">Founder &amp; Managing Partner — Gaurav Sharma Law Offices</div>
          <p className="text-base leading-relaxed text-white/70 font-light mb-6">Gaurav Sharma established GSLO with a singular vision: to build a law firm where deep legal expertise meets genuine commitment to justice. With over 17 years of experience across complex litigation and advisory, he has earned a reputation as a formidable advocate and a trusted counsellor across India.</p>
          <p className="text-base leading-relaxed text-white/70 font-light mb-8">His environmental law practice is driven by a firm conviction that ecological protection is inseparable from human rights. Gaurav leads the firm's environmental division with the same relentless preparation and strategic precision that defines every GSLO mandate.</p>
          <div className="flex gap-8 mb-8">
            <div><div className="font-['Playfair_Display',serif] text-3xl font-black text-[#4ab866] leading-none">17+</div><div className="text-[0.78rem] text-white/50 tracking-[1px] uppercase mt-1">Years Experience</div></div>
            <div><div className="font-['Playfair_Display',serif] text-3xl font-black text-[#4ab866] leading-none">3</div><div className="text-[0.78rem] text-white/50 tracking-[1px] uppercase mt-1">City Offices</div></div>
            <div><div className="font-['Playfair_Display',serif] text-3xl font-black text-[#4ab866] leading-none">500+</div><div className="text-[0.78rem] text-white/50 tracking-[1px] uppercase mt-1">Cases Handled</div></div>
          </div>
          <div className="flex flex-col gap-2">
            <a href="tel:+918595650338" className="text-white/65 no-underline text-[0.88rem] flex items-center gap-2 hover:text-[#4ab866] transition-colors">📞 +91-8595650338</a>
            <a href="mailto:info@gslo.in" className="text-white/65 no-underline text-[0.88rem] flex items-center gap-2 hover:text-[#4ab866] transition-colors">✉️ info@gslo.in</a>
            <a href="https://www.gslo.in/" target="_blank" className="text-white/65 no-underline text-[0.88rem] flex items-center gap-2 hover:text-[#4ab866] transition-colors">🌐 www.gslo.in</a>
            <a href="https://www.linkedin.com/in/gaurav-sharma-82a87125b/" target="_blank" className="text-white/65 no-underline text-[0.88rem] flex items-center gap-2 hover:text-[#4ab866] transition-colors">🔗 LinkedIn Profile</a>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-16 bg-[#f0faf3] reveal">
        <div className="text-center">
          <div className="text-[0.7rem] font-bold tracking-[3px] uppercase text-[#1e8c3a] mb-4">How We Work</div>
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0d3d1f] max-w-[500px] mx-auto mb-2">From First Call to Final Verdict</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-12 relative">
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#4ab866] to-transparent hidden lg:block"></div>
          {[
            { num: "01", title: "Free Consultation", desc: "Speak directly with a GSLO environmental law specialist. We assess your situation, identify legal pathways, and outline a strategy." },
            { num: "02", title: "Case Analysis", desc: "Our team conducts a thorough legal and factual analysis — reviewing evidence, precedents, and applicable statutes to build a watertight case." },
            { num: "03", title: "Strategic Action", desc: "We file petitions, represent you in hearings, negotiate where advantageous, and pursue every available legal avenue with precision." },
            { num: "04", title: "Resolution & Beyond", desc: "We don't stop at verdicts. Our team ensures compliance, monitors outcomes, and supports you long after the courtroom." }
          ].map((step, idx) => (
            <div key={idx} className="p-6 md:p-8 text-center">
              <div className="w-12 h-12 md:w-[52px] md:h-[52px] bg-[#1e8c3a] rounded-full flex items-center justify-center font-['Playfair_Display',serif] text-xl md:text-[1.4rem] font-black text-white mx-auto mb-6 shadow-[0_0_0_6px_#f0faf3,0_0_0_7px_rgba(30,140,58,0.2)] relative z-10">{step.num}</div>
              <div className="font-['Playfair_Display',serif] text-lg md:text-xl font-bold text-[#0d3d1f] mb-2">{step.title}</div>
              <p className="text-[0.85rem] leading-relaxed text-[#5a7a62] font-light max-w-[280px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-16 bg-white reveal">
        <div className="text-center mb-8">
          <div className="text-[0.7rem] font-bold tracking-[3px] uppercase text-[#1e8c3a] mb-4">Client Stories</div>
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0d3d1f]">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { text: "Gaurav Sharma Law Offices provided exceptional legal guidance during a challenging time. Their expertise and professionalism were truly outstanding.", name: "Neha Chaudhary" },
            { text: "The team demonstrated remarkable dedication and knowledge. They secured a favourable outcome, and I'm deeply grateful for their support and commitment.", name: "Anukrit Mahajan" },
            { text: "I was impressed by their attention to detail and strategic approach. Their legal advice was invaluable — highly recommend their services to anyone.", name: "Mukesh Arora" }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-[#f8fdf9] border-l-3 border-[#1e8c3a] p-6 md:p-8">
              <div className="text-3xl text-[#d4f0dc] font-['Playfair_Display',serif] leading-none mb-2">"</div>
              <p className="text-[0.9rem] leading-relaxed text-[#2d5a3a] italic font-light mb-4">{testimonial.text}</p>
              <div className="text-[0.8rem] font-semibold tracking-[1.5px] uppercase text-[#0d3d1f]">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <div className="bg-[#1e8c3a] py-12 md:py-20 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 reveal">
        <div>
          <div className="text-[0.7rem] font-bold tracking-[3px] uppercase text-white/70 mb-2">Ready to Fight for the Environment?</div>
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-extrabold text-white">Start Your Case Today.</h2>
        </div>
        <a href="https://www.gslo.in/pages/contactUs" target="_blank" className="bg-white text-[#0d3d1f] px-8 py-4 text-[0.9rem] font-bold tracking-[1px] uppercase no-underline hover:bg-[#0d3d1f] hover:text-white hover:-translate-y-0.5 transition-all whitespace-nowrap">Schedule a Free Consultation →</a>
      </div>

      {/* OFFICES SECTION */}
      <section id="offices" className="py-16 md:py-24 px-4 md:px-16 bg-[#f8fdf9] reveal">
        <div className="text-[0.7rem] font-bold tracking-[3px] uppercase text-[#1e8c3a] mb-4">Our Presence</div>
        <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0d3d1f] mb-8">Find Us Across India</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🏛️", city: "New Delhi", addr: "Plot No. 25, Fourth Floor, Thana Road, Near Chhawla Stand, Najafgarh, New Delhi — 110043" },
            { icon: "🌆", city: "Gurgaon", addr: "412, Emaar Colonnade, Golf Course Extension Rd, Sector-66, Gurgaon — 122018" },
            { icon: "🏙️", city: "Noida", addr: "208-209, Tower-E, Alphathum, Sector-90, Noida — 201305" }
          ].map((office, idx) => (
            <div key={idx} className="p-8 border border-[#d4f0dc] hover:border-[#1e8c3a] hover:shadow-[0_8px_32px_rgba(13,61,31,0.08)] transition-all">
              <span className="text-2xl block mb-3">{office.icon}</span>
              <div className="font-['Playfair_Display',serif] text-xl font-bold text-[#0d3d1f] mb-2">{office.city}</div>
              <p className="text-[0.88rem] leading-relaxed text-[#5a7a62] font-light">{office.addr}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}