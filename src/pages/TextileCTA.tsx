import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TextileCTA() {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">
      
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Start Your Textile Project?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white/60 text-lg mb-10"
        >
          Partner with Namika to transform your ideas into scalable,
          high-quality textile production solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300"
          >
            Contact Our Team
          </Link>

          <Link
            to="/production"
            className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition-all duration-300"
          >
            View Production Facility
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
