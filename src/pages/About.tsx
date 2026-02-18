import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-6">
            About Us
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            Modern Textile Manufacturing
            <br />
            Built on Family Commitment.
          </h1>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-20 mb-28"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Established 2023
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We are a family-owned textile manufacturer focused on delivering
              high-quality fabrics with strong operational discipline and
              professional standards.
            </p>
          </div>

          <div>
            <p className="text-gray-400 leading-relaxed">
              While our company was founded in 2023, our foundation is built on
              experience, precision, and a long-term vision to serve brands
              that demand consistency and reliability.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {[
            "High Production Standards",
            "Quality-First Approach",
            "Reliable Timelines",
            "Transparent Partnership",
            "Consistent Fabric Output",
            "Long-Term Collaboration",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-all duration-300"
            >
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
