"use client";

import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight mb-4">
              Namika
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Textile trading & integrated garment manufacturing partner
              supporting growing local fashion brands with scalable
              production systems.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/production" className="hover:text-white transition">
                  Production Facility
                </Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-white transition">
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/textile" className="hover:text-white transition">
                  Textile Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/garment" className="hover:text-white transition">
                  Garment Production
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Production Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Email: info@namika.co.id</p>
              <p>Jakarta, Indonesia</p>
              <Link
                to="/contact"
                className="inline-block mt-2 px-5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:scale-105 transition"
              >
                Start a Project
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Namika. All rights reserved.</p>
          <p className="tracking-wide">
            Textile • Manufacturing • Apparel Production
          </p>
        </div>
      </div>
    </footer>
  );
}
