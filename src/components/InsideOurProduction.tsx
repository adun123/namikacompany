"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, type JSX } from "react";

type ProductionPhoto = {
  src: string;
  alt: string;
  label: string; // small tag
  title: string; // card title
  desc: string;  // short description
};

export default function InsideOurProduction(): JSX.Element {
  const [active, setActive] = useState<ProductionPhoto | null>(null);

  const photos: ProductionPhoto[] = useMemo(
    () => [
      {
        src: "/images/production/sewing.JPG",
        alt: "Sewing activity in workshop",
        label: "Workshop",
        title: "Sewing Line",
        desc: "Proses jahit dengan kontrol kualitas dan ritme produksi yang terukur.",
      },
      {
        src: "/images/production/cutting.JPG",
        alt: "Cutting process",
        label: "Process",
        title: "Cutting Process",
        desc: "Pemotongan bahan dilakukan rapi untuk menjaga presisi ukuran & efisiensi.",
      },
      {
        src: "/images/production/warehouse.JPG",
        alt: "Fabric warehouse",
        label: "Storage",
        title: "Fabric Warehouse",
        desc: "Pengelolaan stok kain yang tertata untuk mendukung flow produksi.",
      },
      {
        src: "/images/production/qc.JPG",
        alt: "Quality control inspection",
        label: "Quality",
        title: "QC Inspection",
        desc: "Tahap QC untuk memastikan output konsisten sesuai standar brand.",
      },
      {
        src: "/images/production/packing.JPG",
        alt: "Packing and finishing",
        label: "Finishing",
        title: "Packing & Finishing",
        desc: "Penyusunan dan finishing dilakukan rapi sebelum proses pengiriman.",
      },
      {
        src: "/images/production/team.JPG",
        alt: "Team activity in production area",
        label: "People",
        title: "Production Team",
        desc: "Tim yang disiplin dan solid untuk menjaga kualitas dan ketepatan timeline.",
      },
    ],
    []
  );

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* Subtle industrial background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "110px 110px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full" />
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
          <p className="uppercase tracking-[0.45em] text-sm text-gray-400 mb-6">
            Inside Our Production
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              A Look into
              <br />
              Our Daily Operations.
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Produksi bukan hanya soal mesin dan tenaga kerja tetapi soal sistem.
              Dari cutting, sewing, hingga QC, kami menjaga flow kerja yang rapi agar
              kualitas tetap konsisten dan timeline terjaga.
            </p>
          </div>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {photos.map((p, idx) => (
            <motion.button
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
              type="button"
              onClick={() => setActive(p)}
              className="group text-left rounded-3xl border border-gray-800 bg-white/5 overflow-hidden hover:border-gray-600 transition-all"
              aria-label={`Open image: ${p.title}`}
            >
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition duration-700"
                />

                {/* Label */}
                <div className="absolute top-5 left-5">
                  <span className="text-xs uppercase tracking-[0.35em] border border-gray-700 bg-black/50 backdrop-blur-xl px-4 py-2 rounded-full">
                    {p.label}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
              </div>

              <div className="p-7">
                <p className="text-lg font-semibold">{p.title}</p>
                <p className="mt-2 text-gray-400 leading-relaxed">{p.desc}</p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm text-gray-300">
                  <span className="uppercase tracking-[0.35em] text-xs text-gray-400">
                    View
                  </span>
                  <span className="opacity-80">↗</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Small footer note */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-gray-800 bg-black/50 backdrop-blur-xl p-8"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-gray-400 mb-3">
            Production Principle
          </p>
          <p className="text-gray-300 leading-relaxed">
            Kami menjaga kualitas melalui disiplin proses: alur kerja jelas, kontrol
            produksi berlapis, dan komunikasi yang transparan untuk mendukung kebutuhan
            brand secara jangka panjang.
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            {/* Backdrop */}
            <motion.button
              type="button"
              className="absolute inset-0 bg-black/80"
              onClick={() => setActive(null)}
              aria-label="Close modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl rounded-3xl border border-gray-700 bg-black/70 backdrop-blur-xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
                <div>
                  <p className="text-sm uppercase tracking-[0.45em] text-gray-400">
                    {active.label}
                  </p>
                  <p className="text-xl font-semibold">{active.title}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="rounded-2xl border border-gray-700 px-4 py-2 hover:border-gray-500 transition-all"
                >
                  <span className="text-sm uppercase tracking-[0.35em] text-gray-300">
                    Close
                  </span>
                </button>
              </div>

              <div className="grid md:grid-cols-2">
                <div className="relative h-[360px] md:h-[520px]">
                  <img
                    src={active.src}
                    alt={active.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-gray-300 leading-relaxed">
                    {active.desc}
                  </p>

                  <div className="mt-8 rounded-2xl border border-gray-800 bg-white/5 p-6">
                    <p className="text-sm uppercase tracking-[0.45em] text-gray-400 mb-3">
                      Note
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Dokumentasi ini menggambarkan aktivitas produksi yang kami jalankan
                      sebagai bagian dari sistem kerja untuk menjaga kualitas, konsistensi,
                      dan kesiapan produksi skala besar.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {["Cutting", "Sewing", "Warehouse", "QC", "Finishing"].map(
                      (tag, i) => (
                        <span
                          key={i}
                          className="text-xs uppercase tracking-[0.35em] border border-gray-700 px-4 py-2 rounded-full bg-black/40"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
