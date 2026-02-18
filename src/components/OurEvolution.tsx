import { motion } from "framer-motion";
import type { JSX } from "react";

type Step = {
  year: string;
  title: string;
  desc: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function OurEvolution(): JSX.Element {
  const steps: Step[] = [
    {
      year: "2022",
      title: "Starting Point",
      desc: "Memulai perjalanan bisnis melalui PT. Namika Herbalindo dengan fokus pengadaan produk herbal, alat kesehatan, dan terapi, sambil tetap menjalankan lini textile.",
    },
    {
      year: "2023",
      title: "Strategic Restructure",
      desc: "Restrukturisasi organisasi membentuk PT. Suket Nusantara Alami untuk memperkuat operasional lintas lini (terapi, herbal, pupuk alami, dan textile).",
    },
    {
      year: "2023 — Now",
      title: "Specialization in Textile & Garment",
      desc: "Seiring fokus yang semakin jelas, Namika Bali Group dibentuk untuk memusatkan energi pada pengadaan kain, apparel, dan produksi garmen secara terstruktur.",
    },
  ];

  return (
    <section className="relative py-32 bg-[#f7f7f7] text-black overflow-hidden">
      {/* Light Industrial Background */}
      <div className="absolute inset-0">
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.20]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
        {/* soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f7f7] to-[#f0f0f0]" />
        {/* faint corner glow */}
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-40 w-[520px] h-[520px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="uppercase tracking-[0.45em] text-xs text-gray-600 mb-6">
            Our Evolution
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              From Expansion
              <br />
              to Strategic Focus.
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Perjalanan Namika bukan tentang perubahan nama, tetapi tentang
              penyelarasan arah. Kami melakukan transformasi sebagai langkah
              strategis untuk memperkuat fokus pada bidang yang menjadi keahlian inti:
              textile dan garment manufacturing.
            </p>
          </div>
        </motion.div>

        {/* Timeline Rail */}
        <div className="relative">
          {/* rail line */}
          <div className="hidden md:block absolute left-6 top-2 bottom-2 w-[2px] bg-black/10" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="relative grid md:grid-cols-[80px_1fr] gap-6"
              >
                {/* Dot + Year */}
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl border border-black/15 bg-white shadow-sm flex items-center justify-center">
                    <span className="text-xs font-semibold tracking-[0.25em] text-gray-700">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="text-sm uppercase tracking-[0.35em] text-gray-600">
                    {s.year}
                  </p>
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <p className="text-xl font-semibold">{s.title}</p>
                    <span className="text-xs uppercase tracking-[0.35em] text-gray-600 border border-black/10 bg-white px-3 py-1 rounded-full w-fit">
                      Transformation Step
                    </span>
                  </div>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {s.desc}
                  </p>

                  {/* Small industrial detail line */}
                  <div className="mt-6 h-[1px] w-full bg-black/10" />
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    Fokus kami adalah membangun pondasi manufaktur yang kuat,
                    terukur, dan siap menjadi mitra jangka panjang bagi brand.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Closing micro statement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-black/10 bg-white/60 backdrop-blur-xl p-8"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-gray-600 mb-3">
            Strategic Direction
          </p>
          <p className="text-gray-700 leading-relaxed">
            Transformasi ini memperjelas identitas kami:{" "}
            <span className="text-black font-semibold">
              CV. Namika Bali Group
            </span>{" "}
            sebagai manufaktur textile & garment yang fokus pada kualitas,
            konsistensi, dan kemitraan yang berkelanjutan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
