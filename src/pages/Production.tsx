"use client";

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import ProductionWorkflow from "../components/ProductionWorkflow";
import ProductionCapacity from "../components/ProductionCapacity";

export default function ProductionHero() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
        
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/facility-hero.jpg"
            alt="Namika Production Facility"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
        </div>

        {/* Radial Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%)]" />

        {/* Content */}
        <div className="relative mt-10 z-10 max-w-6xl mx-auto px-6 text-center">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.4em] text-sm text-white/60 mb-6"
          >
            Production Facility
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Precision Manufacturing <br />
            Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-lg text-white/70 mb-10"
          >
      Fasilitas produksi textile dan garmen terintegrasi kami dibangun untuk mendukung skalabilitas, efisiensi operasional, dan pengendalian kualitas tanpa kompromi,
      sehingga setiap produk yang dihasilkan memenuhi standar internasional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <Link
              to="#workflow"
              className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300"
            >
              Explore Workflow
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition-all duration-300"
            >
              Start Collaboration
            </Link>
          </motion.div>
        </div>
      </section>

      <ProductionWorkflow />

      <ProductionCapacity/>


    </>
  );
}
