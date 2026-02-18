import { motion } from "framer-motion";

const qualityPoints = [
  {
    title: "Raw Material Inspection",
    desc: "Every yarn and fabric batch undergoes strict inspection before entering production.",
  },
  {
    title: "In-Process Monitoring",
    desc: "Real-time supervision during knitting and dyeing to maintain consistency.",
  },
  {
    title: "Color Accuracy Control",
    desc: "Precise lab testing ensures shade accuracy and repeatable dye results.",
  },
  {
    title: "Final Fabric Testing",
    desc: "Durability, shrinkage, and strength tests conducted before delivery.",
  },
];

export default function TextileQuality() {
  return (
    <section className="py-28 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-white/50 mb-4">
            Quality Assurance
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Strict Quality Control System
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {qualityPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
