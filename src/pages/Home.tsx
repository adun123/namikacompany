import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";




const steps = [
  {
    title: "Textile Trading & Production",
    image: "/images/hero-fabric.jpg",
    short: "Produksi & distribusi textile berkualitas.",
    detail:
      "Berawal dari perdagangan dan produksi textile dengan kontrol kualitas ketat serta pemilihan material terstandar untuk kebutuhan brand lokal.",
  },
  {
    title: "Garment Manufacturing",
    image: "/images/hero-production.jpeg",
    short: "Produksi apparel siap pakai.",
    detail:
      "Berkembang menjadi garment manufacturing untuk muslim wear, ladies & mens fashion hingga sports apparel dengan sistem produksi terstruktur.",
  },
  {
    title: "Custom & PO by Order",
    image: "/images/hero-product.jpeg",
    short: "Produksi sesuai kebutuhan brand.",
    detail:
      "Mendukung custom production & PO by order, bekerja sama dengan brand dan partner bisnis dalam skala manufaktur terkontrol.",
  },
];


const industries = [
  {
    title: "Muslim Wear",
    desc: "Produksi busana muslim modern untuk brand lokal yang berkembang.",
    image: "/images/hero-product.jpeg",
  },
  {
    title: "Ladies Fashion",
    desc: "Garment wanita dengan detail finishing rapi dan material terkontrol.",
    image: "/images/hero-fabric.jpg",
  },
  {
    title: "Menswear",
    desc: "Produksi apparel pria dari casual hingga semi formal.",
    image: "/images/hero-production.jpeg",
  },
  {
    title: "Sports Apparel",
    desc: "Pakaian olahraga dengan standar kenyamanan & durability.",
    image: "/images/hero-product.jpeg",
  },
];



const features = [
  {
    title: "Textile-Rooted Expertise",
    description:
      "Berawal dari perdagangan dan produksi textile, kami memahami karakter material secara mendalam sebelum masuk ke tahap garment.",
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "End-to-End Manufacturing",
    description:
      "Dari pemilihan bahan, cutting, sewing, hingga finishing dan quality control — semua terintegrasi dalam satu sistem produksi.",
    image:
      "/images/trusted.jpeg",
  },
  {
    title: "PO & Custom System",
    description:
      "Melayani produksi berbasis Purchase Order (PO) dengan sistem custom sesuai kebutuhan brand dan market Anda.",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Trusted Local Brand Partner",
    description:
      "Dipercaya oleh berbagai brand lokal untuk segmen muslim wear, ladies, menswear, dan sports apparel.",
    image:
       "/images/endpoint.jpeg",
  },
];


export function Home() {
const [active, setActive] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        const trigger = document.getElementById("process-section");
        if (!trigger) return;
        const rect = trigger.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      };
      window.addEventListener("scroll", onScroll);
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

  
  return (
    <div className="relative">
    {/* HERO */}
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Namika textile background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-6"
            >
              Textile Trading • Garment Manufacturing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
            >
              Strategic Production Partner
              <span className="block text-gray-300">
                for Growing Local Brands
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed mb-10"
            >
              Berawal dari perdagangan textile hingga berkembang menjadi
              garment manufacturing terintegrasi, Namika mendukung brand
              lokal dengan sistem produksi presisi dan scalable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-5"
            >
             <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10">Start Production Inquiry</span>
                <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide border border-white/20 rounded-full text-white hover:bg-white/10 transition-all duration-300"
              >
                View Capabilities
              </Link>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[36px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <img
                src="/images/hero-fabric.jpg"
                alt="Textile and garment production"
                className="h-[420px] lg:h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 p-6">
                <p className="text-sm font-semibold mb-2">
                  End-to-End Manufacturing
                </p>
                <p className="text-xs text-gray-300">
                  Dari textile sourcing hingga produk jadi: muslim wear,
                  ladies & mens fashion, serta sports apparel.
                </p>
              </div>
            </div>

            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
    

    {/* INTRODUCTION SPLIT LAYOUT */}

    <section className="py-24 bg-white text-gray-900">
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
            Introduction
          </p>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            A Family-Owned Textile Manufacturer Focused on Quality.
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
Namika Bali Group adalah perusahaan manufaktur tekstil modern yang dibangun atas dasar disiplin, ketelitian, dan komitmen jangka panjang. Kami menghadirkan kualitas kain yang konsisten untuk merek-merek yang menuntut standar produksi profesional.
          </p>

          <a
            href="/about"
            className="inline-block mt-4 text-sm font-semibold text-black border-b border-black hover:opacity-70 transition"
          >
            Learn More About Us →
          </a>
        </div>

          {/* Right Visual */}
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
        
            <img src="/images/namikalogo.png" alt="Textile and garment production" />
          </div>

      </div>
    </section>




  

    <section
      id="process-section"
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200/40 blur-3xl dark:bg-neutral-800/40" />


      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
            Our Evolution
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-white">
            From Fabric to Finished Apparel
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                onClick={() => setActive(isActive ? null : index)}
                className={`group relative cursor-pointer overflow-hidden rounded-[32px] border transition-all duration-500
                ${
                  isActive
                    ? "scale-[1.03] border-neutral-900 shadow-2xl dark:border-white"
                    : "border-neutral-200 hover:scale-[1.02] hover:shadow-xl dark:border-neutral-800"
                }
                bg-white dark:bg-neutral-900
                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className={`h-60 w-full object-cover transition-transform duration-700 
                    ${isActive ? "scale-110" : "group-hover:scale-105"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {step.short}
                  </p>

                  {/* EXPAND ANIMATION */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive
                        ? "mt-4 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  {/* indicator */}
                  <div className="mt-5 text-xs font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
                    {isActive ? "Close ↑" : "Explore →"}
                  </div>
                </div>

                {/* subtle glow border on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-transparent via-neutral-200/30 to-transparent dark:via-neutral-700/30" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>


     <section
      id="industries"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
            Industries We Serve
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-white">
            Supporting Growing Local Brands
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
            Kami mendukung berbagai segmen apparel dengan sistem produksi
            terstruktur dan kualitas terkontrol.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div className="mt-16 flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
          {industries.map((item, index) => (
            <div
              key={index}
              className={`group relative min-w-[280px] flex-1 rounded-[32px] overflow-hidden border 
              border-neutral-200 bg-white transition-all duration-500 hover:shadow-2xl
              dark:border-neutral-800 dark:bg-neutral-900
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 w-full p-6 text-white">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  {item.desc}
                </p>
              </div>

              {/* subtle hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Split Layout Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Strategic Manufacturing Partner
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Why Leading Brands
              <br /> Choose Namika
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            Kami bukan sekadar produsen garment. Dengan fondasi textile
            yang kuat, kami membangun sistem produksi yang presisi,
            scalable, dan siap mendukung pertumbuhan brand Anda.
          </motion.p>
        </div>

        {/* Horizontal Interactive Cards */}
        <div className="grid lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition-all duration-500" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="mb-4 opacity-80 group-hover:opacity-100 transition">
                  <CheckCircle className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:translate-y-[-4px] transition-transform duration-300">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <section className="relative py-32 bg-white overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6"
        >
          Let’s Build Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-8"
        >
          Ready to Scale
          <br /> Your Brand?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          From fabric sourcing to finished apparel — Namika is built to
          support growing brands with precision manufacturing and scalable
          production systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="group relative inline-flex items-center justify-center px-10 py-4 text-sm font-semibold tracking-wide text-white bg-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105">
            <span className="relative z-10">Start a Production Inquiry</span>
            <span className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </motion.div>
      </div>
    </section>

    </div>
  );
}
