import { motion } from "framer-motion";
import type { JSX } from "react";

type Stat = {
  label: string;
  value: string;
  note: string;
};

type Capability = {
  title: string;
  desc: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function TrackRecordCapacity(): JSX.Element {
  const stats: Stat[] = [
    {
      label: "Average Monthly Output",
      value: "±150,000 pcs",
      note: "Kapasitas produksi bulanan yang stabil untuk kebutuhan bulk dan custom PO.",
    },
    {
      label: "Production Handling",
      value: "FOB & Bulk",
      note: "Mendukung sistem produksi terstruktur sesuai kebutuhan brand dan pasar.",
    },
    {
      label: "Operational Standard",
      value: "Industrial Discipline",
      note: "Standar kerja yang konsisten untuk menjaga kualitas dan timeline pengiriman.",
    },
  ];

  const capabilities: Capability[] = [
    {
      title: "FOB Manufacturing Support",
      desc: "Pengalaman menangani kebutuhan produksi dari awal hingga siap dikirim.",
    },
    {
      title: "Bulk Quantity Readiness",
      desc: "Terbiasa menangani produksi dalam jumlah besar dengan output stabil.",
    },
    {
      title: "Quality Control System",
      desc: "QC menjadi bagian dari sistem kerja, bukan sekadar tahap akhir produksi.",
    },
    {
      title: "Cutting & Sewing Workflow",
      desc: "Proses produksi berjalan dalam alur kerja yang rapi dan terukur.",
    },
    {
      title: "Fabric Supply Capability",
      desc: "Mampu mendukung kebutuhan pengadaan kain untuk proses produksi garmen.",
    },
    {
      title: "Reliable Timeline Execution",
      desc: "Fokus pada disiplin timeline agar brand mendapatkan kepastian produksi.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      {/* Industrial Blueprint Background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Stronger Center Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        {/* Machine Light Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.45em] text-sm text-gray-400 mb-6">
            Track Record & Capacity
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Manufacturing Strength
              <br />
              Built for Scale.
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Kami membangun sistem produksi dengan pola kerja industri: disiplin,
              terukur, dan berorientasi pada output. Hal ini membuat Namika Bali Group
              mampu menangani produksi dalam skala besar dengan standar yang stabil.
            </p>
          </div>
        </motion.div>

        {/* Industrial Highlight Panel */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] border border-gray-800 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 mb-14 overflow-hidden"
        >
          {/* Panel Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-0 w-full h-[1px] bg-white/20" />
            <div className="absolute bottom-10 left-0 w-full h-[1px] bg-white/20" />
            <div className="absolute top-0 left-10 h-full w-[1px] bg-white/20" />
            <div className="absolute top-0 right-10 h-full w-[1px] bg-white/20" />
          </div>

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <p className="text-sm uppercase tracking-[0.45em] text-gray-400 mb-3">
                Production Capacity
              </p>
              <p className="text-5xl md:text-6xl font-extrabold tracking-tight">
                150.000 pcs
              </p>
              <p className="text-gray-300 mt-2 uppercase tracking-[0.35em] text-sm">
                per month
              </p>
            </div>

            <div className="max-w-xl space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Kapasitas ini didukung oleh sistem produksi yang rapi dan proses kerja
                yang disiplin. Kami siap melayani kebutuhan brand yang membutuhkan
                konsistensi kuantitas, kualitas, dan timeline.
              </p>

              <div className="flex flex-wrap gap-3">
                {["FOB", "Bulk Production", "Custom PO", "Brand Supply"].map(
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

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="relative rounded-3xl border border-gray-800 bg-black/60 p-8 overflow-hidden group hover:border-gray-600 transition-all duration-300"
            >
              {/* Corner detail */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-gray-600 opacity-40" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gray-600 opacity-40" />

              <p className="text-xs uppercase tracking-[0.45em] text-gray-400 mb-4">
                {s.label}
              </p>

              <p className="text-3xl font-bold mb-3">{s.value}</p>

              <p className="text-gray-300 leading-relaxed">{s.note}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Capability Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {capabilities.map((c, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-gray-800 bg-white/5 p-8 hover:border-gray-600 transition-all duration-300"
            >
              <p className="text-lg font-semibold mb-3">{c.title}</p>
              <p className="text-gray-400 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
