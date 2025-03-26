"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [isHamNavActive, setIsHamNavActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-50"
    >
      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-5 inset-0 max-w-[320px] h-[50px] mx-auto border rounded-3xl bg-black py-3">
        <ul className="flex flex-row items-center justify-center gap-5 text-white">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block md:hidden">
        <div className="fixed top-5 right-5 z-50">
          <button onClick={() => setIsHamNavActive(!isHamNavActive)}>
            {isHamNavActive ? (
              <FaToggleOn size={30} />
            ) : (
              <FaToggleOff size={30} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isHamNavActive && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 w-full h-screen bg-black/90 z-40 flex flex-col items-center justify-center text-white"
            >
              <ul className="text-4xl space-y-6 text-center">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      onClick={() => setIsHamNavActive(false)}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
