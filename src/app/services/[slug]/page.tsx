"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Same services data - you can move this to a shared file
const services = [
  {
    id: "pollution-industrial-liability",
    icon: "🏭",
    title: "Pollution & Industrial Liability",
    shortDesc: "Representing affected communities and industries in air, water, and soil pollution matters.",
    fullDesc: "We handle cases involving industrial pollution, toxic emissions, groundwater contamination, and soil degradation. Our team represents affected communities, industries, and local bodies before the NGT and High Courts. With a track record of securing substantial compensation and remediation orders, we ensure polluters are held accountable under the 'Polluter Pays' principle.",
    detailedDesc: "Industrial pollution remains one of India's most pressing environmental challenges. Our practice focuses on holding polluters accountable while helping responsible industries achieve compliance. We represent affected communities in class-action lawsuits, advise industries on pollution control measures, and work with regulatory bodies to ensure effective enforcement.",
    keyHighlights: [
      "Strict liability claims and compensation",
      "Remediation orders and monitoring",
      "Industrial compliance defense",
      "Class action lawsuits for affected communities",
      "Groundwater contamination cases",
      "Air quality violation litigation"
    ],
    statutes: ["Water (Prevention & Control) Act, 1974", "Air (Prevention & Control) Act, 1981", "Environment Protection Act, 1986", "NGT Act, 2010", "Hazardous Waste Management Rules"],
    process: [
      "Initial case assessment and evidence gathering",
      "Filing before NGT or High Court",
      "Expert witness coordination",
      "Interim relief applications",
      "Final arguments and judgment",
      "Post-judgment compliance monitoring"
    ],
    image: "/assets/services/pollution.jpg"
  },
  {
    id: "forest-biodiversity-rights",
    icon: "🌳",
    title: "Forest & Biodiversity Rights",
    shortDesc: "Protecting forest rights, challenging illegal deforestation, and defending tribal communities.",
    fullDesc: "We advocate for forest conservation, tribal rights, and biodiversity protection. Our practice focuses on defending forest-dwelling communities, challenging illegal deforestation, and ensuring compliance with forest conservation laws.",
    detailedDesc: "India's forests are home to millions of tribal communities and countless species. Our practice defends the rights of forest-dwelling communities under the Forest Rights Act while simultaneously advocating for forest conservation. We challenge illegal diversion of forest land, protect wildlife corridors, and ensure that development projects respect ecological boundaries.",
    keyHighlights: [
      "Forest Rights Act implementation",
      "Wildlife corridor protection",
      "Illegal deforestation challenges",
      "Tribal community representation",
      "Protected area management litigation",
      "Human-wildlife conflict resolution"
    ],
    statutes: ["Forest Rights Act, 2006", "Wildlife Protection Act, 1972", "Forest Conservation Act, 1980", "Biodiversity Act, 2002"],
    process: [
      "Legal rights assessment for forest dwellers",
      "Documentation and evidence collection",
      "Representation before Forest Rights Committees",
      "High Court/Supreme Court litigation",
      "Wildlife conservation advocacy"
    ],
    image: "/assets/services/forest.jpg"
  },
  {
    id: "ngt-representation",
    icon: "⚖️",
    title: "NGT Representation",
    shortDesc: "Full-spectrum representation before the National Green Tribunal.",
    fullDesc: "We provide end-to-end representation before the National Green Tribunal, from filing applications to appellate proceedings. Our deep understanding of NGT procedures and environmental jurisprudence ensures effective advocacy.",
    detailedDesc: "The National Green Tribunal (NGT) is India's specialized environmental court. Our practice has extensive experience before the NGT's principal bench in Delhi and all circuit benches across India. We handle original applications, appeals, execution petitions, and review petitions. Our success rate in NGT matters reflects our deep understanding of environmental laws and tribunal procedures.",
    keyHighlights: [
      "Original application filing",
      "Appeal representation",
      "Execution proceedings",
      "Expert witness coordination",
      "Interim relief applications",
      "Review petitions"
    ],
    statutes: ["NGT Act, 2010", "Environment Protection Act, 1986", "Water Act, 1974", "Air Act, 1981", "Forest Conservation Act"],
    process: [
      "Case evaluation and legal research",
      "Application drafting and filing",
      "Preliminary hearing and admission",
      "Evidence and expert testimony",
      "Final arguments",
      "Judgment enforcement"
    ],
    image: "/assets/services/ngt.jpg"
  },
  {
    id: "environmental-impact-assessments",
    icon: "📋",
    title: "Environmental Impact Assessments",
    shortDesc: "Challenging flawed EIAs and ensuring compliance with environmental regulations.",
    fullDesc: "We scrutinize Environmental Impact Assessments, challenge inadequate studies, and advocate for robust environmental safeguards before project approvals.",
    detailedDesc: "Environmental Impact Assessments are critical tools for sustainable development. However, many EIAs suffer from data manipulation, inadequate public consultation, or flawed methodology. We represent affected communities and NGOs in challenging such flawed assessments before the MoEF&CC, NGT, and High Courts. Our expertise includes technical analysis of EIA reports, public hearing representation, and strategic litigation.",
    keyHighlights: [
      "EIA report analysis",
      "Public hearing representation",
      "Compliance monitoring",
      "Strategic litigation against flawed assessments",
      "Expert report preparation",
      "Alternative project assessment"
    ],
    statutes: ["EIA Notification, 2006", "Environment Protection Act, 1986"],
    process: [
      "EIA document review and technical analysis",
      "Public hearing participation",
      "Representation to regulatory authorities",
      "Legal challenge before NGT",
      "Project modification advocacy"
    ],
    image: "/assets/services/eia.jpg"
  },
  {
    id: "water-law-rights",
    icon: "🌊",
    title: "Water Law & Rights",
    shortDesc: "Groundwater disputes, river pollution litigation, and riparian rights.",
    fullDesc: "We handle complex water law matters including groundwater extraction disputes, river pollution cases, inter-state water conflicts, and community water rights advocacy.",
    detailedDesc: "Water is a fundamental right, yet millions of Indians face water pollution or scarcity. Our practice addresses the full spectrum of water law, from industrial pollution of rivers to illegal groundwater extraction. We represent affected communities, local bodies, and responsible businesses in water-related litigation and regulatory matters. Our expertise includes riparian rights, groundwater regulation, and water quality enforcement.",
    keyHighlights: [
      "Groundwater regulation compliance",
      "River pollution litigation",
      "Riparian rights protection",
      "Water quality monitoring",
      "Inter-state water dispute resolution",
      "Community water rights"
    ],
    statutes: ["Water Act, 1974", "Groundwater Act, 2020", "River Boards Act, 1956", "Inter-State Water Disputes Act"],
    process: [
      "Water quality assessment",
      "Regulatory complaints filing",
      "Litigation before courts/NGT",
      "Expert hydrological analysis",
      "Remediation planning",
      "Long-term compliance monitoring"
    ],
    image: "/assets/services/water.jpg"
  },
  {
    id: "corporate-compliance",
    icon: "🏢",
    title: "Corporate Environmental Compliance",
    shortDesc: "Helping businesses navigate India's complex environmental regulatory landscape.",
    fullDesc: "We partner with businesses to ensure environmental compliance, manage regulatory approvals, and develop sustainable legal frameworks that align with business objectives.",
    detailedDesc: "Environmental compliance is not just a legal obligation—it's good business. Our corporate advisory practice helps businesses understand and meet their environmental responsibilities efficiently. We handle consent applications, environmental audits, CSR compliance, and develop environmental management systems. Whether you're a startup seeking initial approvals or an established corporation managing complex compliance, we provide strategic legal counsel.",
    keyHighlights: [
      "Consent management (CTE/CTO)",
      "CSR compliance advisory",
      "Environmental audit representation",
      "Green certification guidance",
      "Due diligence for transactions",
      "Environmental management systems"
    ],
    statutes: ["Various environmental regulations", "Company law compliance", "Industry-specific rules", "EPR regulations"],
    process: [
      "Compliance gap analysis",
      "Approval application assistance",
      "Audit representation",
      "Regulatory interface management",
      "Sustainability framework development",
      "Periodic compliance updates"
    ],
    image: "/assets/services/corporate.jpg"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services.find(s => s.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* HERO SECTION WITH BANNER */}
      <section className="min-h-[50vh] bg-gradient-to-br from-[#0d3d1f] to-[#1e8c3a] relative flex items-center overflow-hidden pt-20">
        {/* Background Image (uncomment when you add images) */}
        {/* <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${service.image})` }}
        ></div> */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.6)_100%)]"></div>
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[620px] h-[620px] opacity-[0.04] text-[620px] leading-none select-none">{service.icon}</div>
        
        <div className="relative z-10 px-4 md:px-16 py-20 max-w-[900px] mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-[#4ab866] hover:text-white transition-colors mb-8 text-[0.85rem]">
              ← Back to All Services
            </Link>
            <div className="inline-flex items-center gap-2 bg-[#4ab866]/15 border border-[#4ab866]/40 text-[#4ab866] text-[0.75rem] font-semibold tracking-[2px] uppercase py-2 px-4 mb-8">
              {service.icon} {service.title}
            </div>
            <h1 className="font-['Playfair_Display',serif] text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] text-white mb-6">
              {service.title}
            </h1>
            <p className="text-[1.15rem] leading-relaxed text-white/80 max-w-[700px] mx-auto font-light">
              {service.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 md:py-24 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <div className="reveal">
                <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-[#0d3d1f] mb-6">
                  Overview
                </h2>
                <p className="text-[1.05rem] leading-relaxed text-[#5a7a62] font-light mb-8">
                  {service.fullDesc}
                </p>
                <p className="text-[1.05rem] leading-relaxed text-[#5a7a62] font-light mb-12">
                  {service.detailedDesc}
                </p>
              </div>

              <div className="reveal mb-12">
                <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-bold text-[#0d3d1f] mb-6">
                  Key Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-[#f8fdf9] rounded-lg">
                      <span className="text-[#4ab866] text-xl">✓</span>
                      <span className="text-[0.95rem] text-[#2d5a3a]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal">
                <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-bold text-[#0d3d1f] mb-6">
                  Our Process
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-[#d4f0dc] last:border-0">
                      <div className="w-8 h-8 bg-[#1e8c3a] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-[0.95rem] text-[#2d5a3a]">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Statutes Card */}
                <div className="bg-[#f8fdf9] rounded-2xl p-6 border border-[#d4f0dc] reveal">
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#0d3d1f] mb-4">
                    Applicable Laws
                  </h3>
                  <ul className="space-y-2">
                    {service.statutes.map((statute, idx) => (
                      <li key={idx} className="text-[0.85rem] text-[#5a7a62] flex items-start gap-2">
                        <span className="text-[#4ab866]">•</span>
                        {statute}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-[#0d3d1f] to-[#1e8c3a] rounded-2xl p-6 text-white text-center reveal">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-['Playfair_Display',serif] text-2xl font-bold mb-3">
                    Need Help With {service.title.split(' ').slice(0, 3).join(' ')}?
                  </h3>
                  <p className="text-white/70 text-[0.85rem] mb-6">
                    Schedule a free consultation with our environmental law experts.
                  </p>
                  <Link 
                    href="https://www.gslo.in/pages/contactUs" 
                    target="_blank"
                    className="inline-block bg-[#4ab866] text-white px-6 py-3 text-[0.85rem] font-semibold uppercase rounded-lg hover:bg-white hover:text-[#0d3d1f] transition-all w-full"
                  >
                    Free Consultation →
                  </Link>
                </div>

                {/* Contact Card */}
                <div className="bg-white border border-[#d4f0dc] rounded-2xl p-6 reveal">
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#0d3d1f] mb-4">
                    Speak to an Expert
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[0.85rem] text-[#5a7a62]">
                      <span className="text-xl">📞</span>
                      <a href="tel:+918595650338" className="hover:text-[#1e8c3a] transition-colors">+91-8595650338</a>
                    </div>
                    <div className="flex items-center gap-3 text-[0.85rem] text-[#5a7a62]">
                      <span className="text-xl">✉️</span>
                      <a href="mailto:info@gslo.in" className="hover:text-[#1e8c3a] transition-colors">info@gslo.in</a>
                    </div>
                    <div className="flex items-center gap-3 text-[0.85rem] text-[#5a7a62]">
                      <span className="text-xl">🌐</span>
                      <a href="https://www.gslo.in/" target="_blank" className="hover:text-[#1e8c3a] transition-colors">www.gslo.in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 md:py-24 px-4 md:px-16 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <div className="text-[0.7rem] font-bold tracking-[3px] uppercase text-[#1e8c3a] mb-4">Explore More</div>
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-[#0d3d1f]">
              Other Practice Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(s => s.id !== service.id).slice(0, 3).map((relatedService) => (
              <Link key={relatedService.id} href={`/services/${relatedService.id}`} className="group">
                <div className="bg-white p-6 rounded-xl border border-[#d4f0dc] hover:shadow-xl hover:-translate-y-1 transition-all">
                  <span className="text-3xl mb-3 block">{relatedService.icon}</span>
                  <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#0d3d1f] mb-2 group-hover:text-[#1e8c3a] transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-[0.85rem] text-[#5a7a62]">{relatedService.shortDesc.substring(0, 100)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}