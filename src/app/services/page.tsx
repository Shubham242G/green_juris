"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "pollution-industrial-liability",
    icon: "🏭",
    title: "Pollution & Industrial Liability",
    shortDesc: "Representing affected communities and industries in air, water, and soil pollution matters.",
    fullDesc: "We handle cases involving industrial pollution, toxic emissions, groundwater contamination, and soil degradation. Our team represents affected communities, industries, and local bodies before the NGT and High Courts.",
    keyHighlights: [
      "Strict liability claims and compensation",
      "Remediation orders and monitoring",
      "Industrial compliance defense",
      "Class action lawsuits for affected communities"
    ],
    statutes: ["Water (Prevention & Control) Act, 1974", "Air (Prevention & Control) Act, 1981", "Environment Protection Act, 1986", "NGT Act, 2010"],
    image: "/assets/services/pollution.jpg" // Add your image path
  },
  {
    id: "forest-biodiversity-rights",
    icon: "🌳",
    title: "Forest & Biodiversity Rights",
    shortDesc: "Protecting forest rights, challenging illegal deforestation, and defending tribal communities.",
    fullDesc: "We advocate for forest conservation, tribal rights, and biodiversity protection. Our practice focuses on defending forest-dwelling communities, challenging illegal deforestation, and ensuring compliance with forest conservation laws.",
    keyHighlights: [
      "Forest Rights Act implementation",
      "Wildlife corridor protection",
      "Illegal deforestation challenges",
      "Tribal community representation"
    ],
    statutes: ["Forest Rights Act, 2006", "Wildlife Protection Act, 1972", "Forest Conservation Act, 1980", "Biodiversity Act, 2002"],
    image: "/assets/services/forest.jpg"
  },
  {
    id: "ngt-representation",
    icon: "⚖️",
    title: "NGT Representation",
    shortDesc: "Full-spectrum representation before the National Green Tribunal.",
    fullDesc: "We provide end-to-end representation before the National Green Tribunal, from filing applications to appellate proceedings. Our deep understanding of NGT procedures and environmental jurisprudence ensures effective advocacy.",
    keyHighlights: [
      "Original application filing",
      "Appeal representation",
      "Execution proceedings",
      "Expert witness coordination"
    ],
    statutes: ["NGT Act, 2010", "Environment Protection Act, 1986"],
    image: "/assets/services/ngt.jpg"
  },
  {
    id: "environmental-impact-assessments",
    icon: "📋",
    title: "Environmental Impact Assessments",
    shortDesc: "Challenging flawed EIAs and ensuring compliance with environmental regulations.",
    fullDesc: "We scrutinize Environmental Impact Assessments, challenge inadequate studies, and advocate for robust environmental safeguards before project approvals.",
    keyHighlights: [
      "EIA report analysis",
      "Public hearing representation",
      "Compliance monitoring",
      "Strategic litigation against flawed assessments"
    ],
    statutes: ["EIA Notification, 2006", "Environment Protection Act, 1986"],
    image: "/assets/services/eia.jpg"
  },
  {
    id: "water-law-rights",
    icon: "🌊",
    title: "Water Law & Rights",
    shortDesc: "Groundwater disputes, river pollution litigation, and riparian rights.",
    fullDesc: "We handle complex water law matters including groundwater extraction disputes, river pollution cases, inter-state water conflicts, and community water rights advocacy.",
    keyHighlights: [
      "Groundwater regulation compliance",
      "River pollution litigation",
      "Riparian rights protection",
      "Water quality monitoring"
    ],
    statutes: ["Water Act, 1974", "Groundwater Act, 2020", "River Boards Act, 1956"],
    image: "/assets/services/water.jpg"
  },
  {
    id: "corporate-compliance",
    icon: "🏢",
    title: "Corporate Environmental Compliance",
    shortDesc: "Helping businesses navigate India's complex environmental regulatory landscape.",
    fullDesc: "We partner with businesses to ensure environmental compliance, manage regulatory approvals, and develop sustainable legal frameworks that align with business objectives.",
    keyHighlights: [
      "Consent management (CTE/CTO)",
      "CSR compliance advisory",
      "Environmental audit representation",
      "Green certification guidance"
    ],
    statutes: ["Various environmental regulations", "Company law compliance", "Industry-specific rules"],
    image: "/assets/services/corporate.jpg"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-[50vh] bg-gradient-to-br from-[#0d3d1f] to-[#1e8c3a] relative flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(30,140,58,0.25)_0%,transparent_60%)]"></div>
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[620px] h-[620px] opacity-[0.04] text-[620px] leading-none select-none animate-[slowSpin_60s_linear_infinite]">⚖️</div>
        <div className="relative z-10 px-4 md:px-16 py-20 max-w-[900px] mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#4ab866]/15 border border-[#4ab866]/40 text-[#4ab866] text-[0.75rem] font-semibold tracking-[2px] uppercase py-2 px-4 mb-8">
              Our Practice Areas
            </div>
            <h1 className="font-['Playfair_Display',serif] text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white mb-6">
              Environmental Law<br />
              <em className="text-[#4ab866] not-italic">Services We Offer</em>
            </h1>
            <p className="text-[1.15rem] leading-relaxed text-white/65 max-w-[700px] mx-auto font-light">
              Comprehensive legal solutions for environmental protection, climate action, and sustainable development
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 md:py-28 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="text-[0.7rem] font-bold tracking-[3px] uppercase text-[#1e8c3a] mb-4">What We Do</div>
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0d3d1f] mb-4">
              Comprehensive Environmental<br />Legal Expertise
            </h2>
            <p className="text-[0.95rem] text-[#5a7a62] max-w-2xl mx-auto">
              Each practice area is backed by decades of experience and a track record of landmark victories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/services/${service.id}`} className="block h-full no-underline">
                  <div className="bg-white border border-[#d4f0dc] rounded-2xl p-8 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4ab866]/5 to-transparent rounded-bl-full"></div>
                    <div className="relative z-10">
                      <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                      <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#0d3d1f] mb-3 group-hover:text-[#1e8c3a] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[0.9rem] leading-relaxed text-[#5a7a62] font-light mb-6">
                        {service.shortDesc}
                      </p>
                      <div className="inline-flex items-center text-[#1e8c3a] font-semibold text-[0.85rem] uppercase tracking-wide group-hover:gap-2 transition-all gap-1">
                        Learn More 
                        <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28 px-4 md:px-16 bg-[#f8fdf9] reveal">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[0.7rem] font-bold tracking-[3px] uppercase text-[#1e8c3a] mb-4">Why Green Juris</div>
              <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0d3d1f] mb-6">
                Why Choose Our<br />Environmental Practice?
              </h2>
              <p className="text-[1rem] leading-relaxed text-[#5a7a62] font-light mb-6">
                As the dedicated environmental law division of Gaurav Sharma Law Offices, we combine technical legal expertise with a deep commitment to environmental justice.
              </p>
              <div className="space-y-4">
                {[
                  "17+ years of specialized environmental litigation experience",
                  "Track record of landmark victories before NGT and Supreme Court",
                  "Pan-India presence with offices in Delhi, Gurgaon, and Noida",
                  "Team of dedicated environmental law specialists",
                  "End-to-end support from consultation to post-judgment compliance"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#4ab866] text-xl">✓</span>
                    <span className="text-[0.9rem] text-[#2d5a3a]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#0d3d1f] rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute text-8xl right-[-1rem] bottom-[-1rem] opacity-10 leading-none">🌿</div>
                <div className="relative z-10">
                  <div className="text-[#4ab866] text-6xl mb-4">"</div>
                  <p className="font-['Playfair_Display',serif] text-xl md:text-[1.4rem] italic text-white leading-relaxed mb-6">
                    Every environmental case we handle is about more than just legal outcomes — it's about protecting the fundamental right to a clean and healthy environment for generations to come.
                  </p>
                  <div className="text-[0.8rem] tracking-[2px] uppercase text-[#4ab866] font-semibold">— Gaurav Sharma</div>
                  <div className="text-white/50 text-[0.7rem] mt-1">Founder, Green Juris at GSLO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <div className="bg-gradient-to-r from-[#0d3d1f] to-[#1e8c3a] py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-white mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-white/70 text-[1rem] mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our environmental law experts. We're here to help you navigate complex environmental regulations and fight for environmental justice.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="https://www.gslo.in/pages/contactUs" target="_blank" className="bg-[#4ab866] text-white px-8 py-4 text-[0.9rem] font-semibold tracking-[1px] uppercase no-underline hover:bg-white hover:text-[#0d3d1f] transition-all">
              Free Consultation
            </Link>
            <Link href="#offices" className="bg-transparent border-2 border-white/30 text-white px-8 py-4 text-[0.9rem] font-medium tracking-[1px] uppercase no-underline hover:border-[#4ab866] hover:text-[#4ab866] transition-all">
              Find an Office
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}