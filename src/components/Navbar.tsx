"use client";

import { useState } from "react";
import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    children: [
      { label: "Textile Manufacturing", path: "/textile" },
      { label: "Garment Production", path: "/garment" },
    ],
  },
  { label: "Production Facility", path: "/production" },
  { label: "Clients", path: "/clients" },
  { label: "Contact", path: "/contact" },
];

export default function () {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/images/namikalogo.png"
              alt="Namika"
              className="h-15 w-auto"
            />
            <div className="leading-tight">
              <span className="block text-lg font-semibold text-white">
                Namika
              </span>
              <span className="block text-xs text-gray-400 tracking-wide">
                Textile & Manufacturing
              </span>
            </div>
          </Link>



          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="relative"
                  >
                    <button className="flex items-center gap-1 hover:text-white transition">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-10 left-0 w-56 bg-zinc-900 border border-white/10 rounded-2xl shadow-xl p-3"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2 rounded-xl text-sm text-gray-300 hover:bg-white/5 hover:text-white transition"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path!}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition"
            >
              Production Inquiry
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpenMobile(!openMobile)}
            className="lg:hidden text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-2">
                      <p className="text-gray-400 text-sm font-semibold">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setOpenMobile(false)}
                          className="block pl-4 text-gray-300 hover:text-white transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path!}
                      onClick={() => setOpenMobile(false)}
                      className="block text-gray-300 hover:text-white transition"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setOpenMobile(false)}
                  className="block text-center bg-white text-black py-3 rounded-full font-semibold"
                >
                  Production Inquiry
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
