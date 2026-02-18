import { motion } from "framer-motion";

export default function Clients() {
  return (
    <>
    <section className="bg-white text-gray-900 py-28">
      <div className="max-w-6xl mx-auto px-6">

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

          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with brands and businesses that value quality,
            consistency, and long-term production partnerships.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-28"
        >
          {[1,2,3,4,5,6,7,8].map((item) => (
            <div
              key={item}
              className="h-24 flex items-center justify-center border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
            >
              <span className="text-gray-400 font-medium">
                Client Logo
              </span>
            </div>
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
