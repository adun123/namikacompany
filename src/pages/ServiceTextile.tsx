"use client";

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { TextileMachinery } from "../components/TextileMachinery";
import TextileQuality from "../components/TextileQuality";
import TextileCTA from "./TextileCTA";


export default function ServiceTextile() {
  return (
    <>
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/textile-hero.jpeg"
          alt="Textile Manufacturing"
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
          Textile Manufacturing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-white/70 max-w-2xl mx-auto mb-10"
        >
          Advanced knitting, dyeing, and finishing processes powered by
          modern machinery and strict quality standards.
        </motion.p>

        <Link
          to="/contact"
          className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300"
        >
          Request Consultation
        </Link>
      </div>
    </section>

    <TextileMachinery />

    <TextileQuality/>

    <TextileCTA/>



    </>


  );
}
