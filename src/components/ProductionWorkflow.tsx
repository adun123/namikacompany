"use client";

import { motion } from "framer-motion";

const workflow = [
  {
    step: "01",
    title: "Material Sourcing",
    description:
      "Kami memilih benang dan kain berkualitas tinggi dari supplier terpercaya untuk memastikan daya tahan, kenyamanan, dan performa produk.",
  },
  {
    step: "02",
    title: "Textile Processing",
    description:
      "Proses knitting dan pewarnaan dilakukan dengan sistem terkontrol untuk menjaga konsistensi warna, kekuatan struktur kain, dan efisiensi produksi.",
  },
  {
    step: "03",
    title: "Garment Construction",
    description:
      "Tim produksi kami mengubah textile menjadi garmen siap pakai melalui proses cutting yang presisi dan jahitan yang rapi sesuai standar produksi.",
  },
  {
    step: "04",
    title: "Quality Control",
    description:
      "Setiap produk melalui inspeksi bertahap untuk memastikan kualitas tetap konsisten dan sesuai standar internasional.",
  },
  {
    step: "05",
    title: "Packaging & Delivery",
    description:
      "Produk dikemas secara profesional dan dipersiapkan untuk pengiriman domestik maupun distribusi internasional.",
  },
];


export default function ProductionWorkflow() {
  return (
    <section
      id="workflow"
      className="relative py-28 bg-gradient-to-b from-black to-neutral-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-white/50 mb-4">
            Integrated System
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Production Workflow
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-20">
            {workflow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Circle Indicator */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-black z-10" />

                {/* Card */}
                <div
                  className={`w-full md:w-[45%] bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl hover:shadow-white/10 transition-all duration-500 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <p className="text-sm text-white/40 mb-2">
                    Step {item.step}
                  </p>
                  <h3 className="text-xl font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
