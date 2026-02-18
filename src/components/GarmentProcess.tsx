import { motion } from "framer-motion";

const steps = [
  {
    title: "Pattern Development",
    desc: "Professional pattern making to ensure precision and sizing accuracy.",
  },
  {
    title: "Fabric Cutting",
    desc: "High-precision cutting systems to maximize efficiency and reduce waste.",
  },
  {
    title: "Stitching & Assembly",
    desc: "Skilled operators ensure strong seams and consistent garment structure.",
  },
  {
    title: "Finishing & Inspection",
    desc: "Final trimming, pressing, and detailed quality inspection before packaging.",
  },
];

export default function GarmentProcess() {
  return (
    <section className="py-28 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
            Production Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            From Pattern to Finished Garment
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
