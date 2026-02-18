import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, type JSX } from "react";

type Milestone = {
  period: string;
  title: string;
  org: string;
  note: string;
};

export default function FoundersVision(): JSX.Element {
  const [open, setOpen] = useState(false);

  const milestones: Milestone[] = useMemo(
    () => [
      {
        period: "2000–2007",
        title: "Head of Production",
        org: "PT. Unitra (Knitting Factory)",
        note: "Mengatur order untuk brand internasional dan menjaga standar produksi skala besar.",
      },
      {
        period: "2007–2009",
        title: "Marketing",
        org: "PT. Gistex Popular Indonesia",
        note: "Menangani penerimaan order dan koordinasi kebutuhan brand dengan standar global.",
      },
      {
        period: "2009–2012",
        title: "Founder (Fabric Sales & Semi Garment)",
        org: "Usaha mandiri",
        note: "Membangun jalur pengadaan kain dan produksi semi-garmen secara bertahap.",
      },
      {
        period: "2012–2014",
        title: "Head of Production",
        org: "PT. Sinar Gama Textile",
        note: "Memimpin kontrol proses produksi dengan fokus efisiensi dan konsistensi output.",
      },
      {
        period: "2014–Now",
        title: "Fabric Trading & Supply",
        org: "Trading kain (mandiri)",
        note: "Supply kain ke berbagai brand lokal Indonesia dan memperkuat jaringan produksi.",
      },
    ],
    []
  );

  return (
    <section className="relative py-32 overflow-hidden bg-black text-white">
      {/* Background Glow + Gradient */}
      <div className="absolute inset-0">
        <div className="absolute -top-44 -left-44 w-[560px] h-[560px] bg-purple-600/20 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[560px] h-[560px] bg-blue-500/20 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-xl">
             <img
                src="/images/Fotomamah.jpeg"
                alt="Founder - Leli Basuki"
                className="w-full h-[520px] object-cover transition duration-700 hover:brightness-105 hover:contrast-105"
              />

            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 left-6 bg-black/75 backdrop-blur-xl border border-gray-700 px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
                Founder
              </p>
              <p className="text-lg font-semibold">Leli Basuki, S.H.</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-4">
                Founder’s Vision
              </p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Leadership Shaped by
                <br />
                Two Decades of Industry Practice.
              </h2>
            </div>

            {/* Short / Clean Story */}
            <div className="space-y-5">
              <p className="text-gray-300 leading-relaxed">
                Perjalanan CV. Namika Bali Group dibangun dari pengalaman panjang
                pendiri kami,{" "}
                <span className="text-white font-semibold">Leli Basuki, S.H.</span>,
                yang telah berkarya di industri textile & garment sejak awal tahun
                2000-an. Beliau memahami proses dari “dapur” produksi hingga strategi
                pasar, membentuk cara kerja yang rapi, terukur, dan fokus pada standar.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Visi beliau sederhana namun kuat: membangun sistem produksi yang
                konsisten, menjaga kualitas, serta menciptakan kemitraan jangka panjang
                yang saling menguatkan.
              </p>
            </div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-gray-800 rounded-3xl p-8 backdrop-blur-xl"
            >
              <p className="text-gray-200 text-lg leading-relaxed italic">
                “Kualitas tidak lahir dari niat baik saja, tetapi dari sistem yang
                disiplin dan konsisten.”
              </p>
              <div className="mt-6">
                <p className="text-white font-semibold">Leli Basuki, S.H.</p>
                <p className="text-gray-400 text-sm">
                  Founder of CV. Namika Bali Group
                </p>
              </div>
            </motion.div>

            {/* Read More Button */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="group inline-flex items-center gap-3 rounded-2xl border border-gray-800 bg-black/40 px-6 py-4 hover:border-gray-600 hover:bg-black/60 transition-all"
                aria-expanded={open}
                aria-controls="founder-story"
              >
                <span className="text-sm uppercase tracking-[0.35em] text-gray-300">
                  {open ? "Hide story" : "Read founder’s story"}
                </span>
                <span
                  className={`text-gray-400 transition-transform duration-300 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▾
                </span>
              </button>
            </div>

            {/* Expand Area */}
            <AnimatePresence>
              {open && (
                <motion.div
                  id="founder-story"
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 rounded-3xl border border-gray-800 bg-black/35 backdrop-blur-xl p-8">
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-6">
                      Career timeline
                    </p>

                    <div className="space-y-5">
                      {milestones.map((m, idx) => (
                        <motion.div
                          key={`${m.period}-${idx}`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: idx * 0.04 }}
                          className="rounded-2xl border border-gray-800/80 bg-white/5 p-6"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <p className="text-white font-semibold">
                              {m.title}{" "}
                              <span className="text-gray-400 font-normal">
                                — {m.org}
                              </span>
                            </p>
                            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
                              {m.period}
                            </p>
                          </div>
                          <p className="mt-3 text-gray-300 leading-relaxed">
                            {m.note}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
