import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-28 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Start a Collaboration
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to discuss your textile or garment production needs.
            Our team is ready to support your project.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@namika.co.id</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+62 812 3456 7890</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Office Address</h3>
              <p className="text-gray-600">
                Jl. Industrial Raya No. 123 <br />
                Bandung, Indonesia
              </p>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Project Details
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
