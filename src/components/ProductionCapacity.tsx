"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 50000,
    label: "Monthly Production Capacity",
    suffix: "+ pcs",
  },
  
  {
    number: 25,
    label: "Active Brand Partnerships",
    suffix: "+ brands",
  },
];

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function ProductionCapacity() {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-white/50 mb-4">
            Production Scale
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for Growth & Volume
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-4xl md:text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                <Counter value={stat.number} />
                {stat.suffix}
              </div>
              <p className="text-white/60 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
