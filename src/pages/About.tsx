import { motion } from "framer-motion";
import WhoWeAre from "../components/WhoWeAre";
import FoundersVision from "../components/FoundersVision";
import TrackRecordCapacity from "../components/TrackRecordCapacity";
import OurEvolution from "../components/OurEvolution";
import InsideOurProduction from "../components/InsideOurProduction";
import OurLeadership from "../components/OurLeadership";

export default function About() {
  return (
<main className="bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-6">
              About Us
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
              Modern Textile Manufacturing
              <br />
              Built on Family Commitment.
            </h1>

            <p className="mt-8 text-gray-300 leading-relaxed max-w-3xl">
              Kami membangun sistem produksi textile & garment yang rapi, terukur,
              dan siap menjadi mitra jangka panjang bagi brand yang membutuhkan
              kualitas konsisten dan eksekusi yang dapat diandalkan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION FLOW */}
      <WhoWeAre />
      <FoundersVision />
      <TrackRecordCapacity />
      <OurEvolution />
      <InsideOurProduction />
      <OurLeadership />
    </main>
  );
}
