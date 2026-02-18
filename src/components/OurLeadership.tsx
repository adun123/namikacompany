"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, type JSX } from "react";

type Leader = {
  name: string;
  role: string;
  headline: string; // short positioning line
  shortBio: string; // visible on card
  detailTitle: string; // title inside expand
  detailBody: string[]; // paragraphs inside expand
  tags: string[];
  imageSrc?: string; // optional
};

export default function OurLeadership(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leaders: Leader[] = useMemo(
    () => [
      {
        name: "Leli Basuki, S.H.",
        role: "Owner",
        headline: "Founder-led direction with long-term manufacturing discipline.",
        shortBio:
          "Memimpin arah strategis perusahaan dengan fondasi pengalaman industri textile & garment, membangun sistem kerja yang terukur, dan menjaga konsistensi kualitas.",
        detailTitle: "Leadership Focus",
        detailBody: [
          "Sebagai owner sekaligus pendiri, Bu Leli memastikan setiap keputusan bisnis tetap selaras dengan standar produksi, kualitas, dan komitmen jangka panjang terhadap mitra brand.",
          "Pendekatan beliau menekankan disiplin operasional, kejelasan komunikasi, serta budaya kerja yang rapi untuk mendukung pertumbuhan yang berkelanjutan.",
        ],
        tags: ["Strategy", "Quality System", "Partnership"],
        imageSrc: "/images/Fotomamah.jpeg",
      },
      {
        name: "Muklis Basuki",
        role: "Komisaris",
        headline: "Steady governance, calm oversight, and resilience.",
        shortBio:
          "Menjaga stabilitas dan tata kelola perusahaan melalui pengawasan yang tenang, bijaksana, dan konsisten—menjadi penopang penting dalam perjalanan bisnis keluarga.",
        detailTitle: "The Silent Guardian",
        detailBody: [
          "Pak Muklis dikenal sebagai figur yang tidak mencari sorotan, namun hadir sebagai fondasi yang menjaga arah perusahaan tetap kuat saat menghadapi tantangan.",
          "Perannya berfokus pada penguatan nilai ketahanan (resilience), ketulusan dalam membangun usaha, dan konsistensi dalam menjaga integritas keputusan bisnis.",
          "Sebagai Komisaris, beliau memastikan perusahaan bertumbuh dengan pijakan yang sehat—berorientasi jangka panjang, bukan sekadar hasil cepat.",
        ],
        tags: ["Governance", "Resilience", "Integrity"],
        imageSrc: "/images/ayahjasv2.png",
      },
      {
        name: "Nabiel Faikhar Ahsan, A.Md.T.",
        role: "Direktur",
        headline: "Execution-driven leadership with field discipline.",
        shortBio:
          "Mengawal operasional dan eksekusi di lapangan dengan energi muda, disiplin tinggi, dan mentalitas kerja yang kuat—mendorong ritme produksi tetap berjalan optimal.",
        detailTitle: "The Resilient Successor",
        detailBody: [
          "Nabiel membawa semangat generasi baru yang tetap grounded: bekerja dekat dengan operasional, memastikan proses berjalan sesuai sistem, serta menjaga standar waktu dan kualitas.",
          "Mentalitasnya terbentuk dari pengalaman keluarga dalam membangun usaha dari nol—mendorong karakter pantang menyerah, adaptif, dan siap bertanggung jawab.",
          "Sebagai Direktur, fokus utamanya adalah memastikan eksekusi produksi rapi, koordinasi tim lancar, dan kebutuhan brand ditangani secara profesional.",
        ],
        tags: ["Execution", "Operations", "Field Leadership"],
        imageSrc: "/images/nabiljas.png",
      },
    ],
    []
  );

  return (
    <section className="relative py-32 bg-[#f7f7f7] text-black overflow-hidden">
      {/* Light + subtle industrial background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f7f7] to-[#f0f0f0]" />
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-blue-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 -left-40 w-[520px] h-[520px] bg-purple-600/10 blur-[130px] rounded-full" />
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
            Our Leadership
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              People Behind
              <br />
              the System.
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Kepemimpinan kami dibangun dari kombinasi visi, tata kelola yang stabil,
              dan eksekusi yang disiplin. Struktur ini menjaga perusahaan bergerak
              konsisten sekaligus siap bertumbuh bersama kebutuhan brand.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {leaders.map((leader, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={leader.name}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-sm overflow-hidden"
              >
                {/* Optional image header */}
                <div className="relative h-[180px] bg-gradient-to-br from-black/5 via-black/0 to-black/5">
                  {leader.imageSrc ? (
                    <img
                      src={leader.imageSrc}
                      alt={`${leader.name} - ${leader.role}`}
                     className="w-full h-full object-cover object-[40%_20%]"


                    />
                  ) : null}

                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />

                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-xs uppercase tracking-[0.45em] text-gray-600">
                      {leader.role}
                    </p>
                    <p className="text-xl font-semibold">{leader.name}</p>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {leader.shortBio}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {leader.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] uppercase tracking-[0.35em] border border-black/10 bg-white px-3 py-2 rounded-full text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expand button */}
                  <div className="mt-7">
                    <button
                      type="button"
                      onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
                      className="w-full inline-flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4 hover:border-black/20 transition-all"
                      aria-expanded={isOpen}
                      aria-controls={`leader-detail-${idx}`}
                    >
                      <span className="text-xs uppercase tracking-[0.45em] text-gray-700">
                        {isOpen ? "Hide detail" : "Read profile"}
                      </span>
                      <span
                        className={`text-gray-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▾
                      </span>
                    </button>
                  </div>

                  {/* Expand content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`leader-detail-${idx}`}
                        initial={{ opacity: 0, height: 0, y: -8 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 rounded-2xl border border-black/10 bg-white/80 p-6">
                          <p className="text-xs uppercase tracking-[0.45em] text-gray-600 mb-3">
                            {leader.detailTitle}
                          </p>

                          <p className="text-sm text-gray-700 mb-4">
                            <span className="font-semibold text-gray-900">
                              {leader.headline}
                            </span>
                          </p>

                          <div className="space-y-4">
                            {leader.detailBody.map((para, i) => (
                              <p
                                key={i}
                                className="text-gray-700 leading-relaxed text-sm"
                              >
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Small closing line */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-gray-600 mb-3">
            Leadership Principle
          </p>
          <p className="text-gray-700 leading-relaxed">
            Kami percaya kepemimpinan terbaik adalah yang membangun sistem: jelas,
            stabil, dan mampu dieksekusi. Itulah pondasi yang kami jaga agar produksi
            dan partnership berjalan konsisten.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
