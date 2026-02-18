import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GarmentProcess from "../components/GarmentProcess";
import GarmentCTA from "../components/GarmentCTA";

export default function ServiceGarment() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
        
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/garment-hero.jpg"
            alt="Garment Production"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.4em] text-sm text-white/60 mb-6"
          >
            Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Garment Production
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto mb-10"
          >
            Precision cutting, professional stitching, and finishing processes 
            designed to deliver scalable and consistent garment production.
          </motion.p>

          <Link
            to="/contact"
            className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300"
          >
            Start Your Garment Project
          </Link>
        </div>
      </section>

      <GarmentProcess />
      <GarmentCTA />
    </>
  );
}
