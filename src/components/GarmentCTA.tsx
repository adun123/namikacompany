import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GarmentCTA() {
  return (
    <section className="py-24 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let’s Build Your Next Collection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white/60 text-lg mb-10"
        >
          Collaborate with our garment production team to scale your brand
          with efficiency and quality consistency.
        </motion.p>

        <Link
          to="/contact"
          className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300"
        >
          Contact Our Team
        </Link>
      </div>
    </section>
  );
}
