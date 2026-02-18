"use client";

import { motion } from "framer-motion";

const machines = [
  {
    title: "High-Speed Knitting Machines",
    desc: "Modern circular knitting systems designed for high-volume and precision fabric production.",
    image: "/images/knitting-machine.jpg",
  },
  {
    title: "Automated Dyeing System",
    desc: "Closed-loop dyeing technology ensuring color consistency and reduced material waste.",
    image: "/images/dyeing-machine.jpg",
  },
  {
    title: "Fabric Finishing Line",
    desc: "Advanced finishing processes enhancing durability, texture, and performance standards.",
    image: "/images/finishing-line.jpg",
  },
];

export function TextileMachinery() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-white/50 mb-4">
            Technology & Equipment
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Powered by Modern Machinery
          </h2>
        </motion.div>

        <div className="space-y-20">
          {machines.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 !== 0 ? "md:col-start-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
