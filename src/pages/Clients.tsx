import { motion } from "framer-motion";

export default function Clients() {
  return (
    <>
<section className="relative bg-white text-gray-900 py-28 overflow-hidden">
  
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/clients.jpeg')" }}
  />
  <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Hero */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <p className="uppercase tracking-[0.4em] text-sm text-gray-500 mb-6">
        Clients & Partners
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Trusted by Growing Brands & Industry Partners
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Kami telah berpengalaman menangani kebutuhan produksi untuk berbagai brand
        besar dan ternama, baik brand lokal Indonesia maupun brand internasional,
        dengan standar kualitas dan ketepatan timeline yang konsisten.
      </p>

      <p className="text-gray-500 text-sm max-w-xl mx-auto mt-6 leading-relaxed">
        Sebagian kolaborasi kami berada dalam perjanjian kerahasiaan (confidential
        partnership), sehingga tidak seluruh brand dapat ditampilkan secara publik.
      </p>
    </motion.div>

    {/* Capability Grid (replacing logo grid) */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-28"
    >
      {[
        "Bulk Production Ready",
        "FOB Handling Experience",
        "International Standard Workflow",
        "Brand Quality Compliance",
        "Reliable Timeline Execution",
        "Consistent QC System",
        "Fabric Supply Capability",
        "Long-Term Partnership Focus",
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="h-24 flex items-center justify-center border border-gray-200 rounded-2xl bg-white/70 backdrop-blur-xl hover:bg-white hover:border-gray-300 transition-all duration-300 shadow-sm"
        >
          <span className="text-gray-700 font-semibold text-sm text-center px-4">
            {item}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


    {/* Industries Section */}
  
    <section
            className="relative py-28  bg-cover bg-center"
            style={{
                backgroundImage:
                "url('/images/textile-industry.jpeg')",
            }}
            >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            <div className="relative max-w-6xl mx-auto px-6 text-white">
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
                >
                <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-6">
                    Industries We Serve
                </p>

                <h2 className="text-4xl md:text-5xl font-bold">
                    Supporting Diverse Textile & Apparel Sectors
                </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Fashion & Apparel Brands",
                        "Uniform & Corporate Wear",
                        "Retail Textile Suppliers",
                        "Private Label Manufacturers",
                        "Export-Oriented Businesses",
                        "Emerging Local Brands",
                    ].map((sector, index) => (
                        <div
                        key={index}
                        className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition duration-300"
                        >
                        <p className="font-medium text-lg">{sector}</p>
                        </div>
                    ))}
                    </div>
                </div>
        </section>

        </>
  );
}
