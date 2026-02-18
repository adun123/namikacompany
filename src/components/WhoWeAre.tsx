import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-20"
        >
          {/* Left Column */}
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-6">
              Who We Are
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
              A Bali-based Textile & Garment Manufacturer
              <br />
              for Custom and Bulk Production.
            </h2>

            <div className="inline-flex items-center gap-3 border border-gray-800 rounded-2xl px-5 py-3">
              <span className="text-sm uppercase tracking-[0.35em] text-gray-400">
                Production Capacity
              </span>
              <span className="text-white font-semibold">
                150.000 pcs / month
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed">
              CV. Namika Bali Group adalah perusahaan manufaktur textile & garment
              yang berfokus pada produksi berbasis PO dan kebutuhan custom untuk
              brand yang mengutamakan konsistensi, kualitas, dan ketepatan timeline.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Berbasis di Bandung, kami membangun sistem kerja yang terstruktur dan
              profesional untuk mendukung proses produksi dari awal hingga akhir,
              mulai dari pengadaan bahan, proses manufaktur, hingga quality control.
              Kami percaya bahwa kemitraan jangka panjang dibangun melalui standar
              produksi yang jelas, integritas, dan komitmen terhadap kualitas.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
