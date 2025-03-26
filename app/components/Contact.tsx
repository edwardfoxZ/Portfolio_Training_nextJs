"use client";

import React from "react";
import { useInView, motion } from "framer-motion";

const contact = [
  { id: 1, title: "Phone", value: "+99 (0) 99 999 999" },
  { id: 2, title: "Email", value: "john@doe.com" },
  {
    id: 1,
    title: "Office",
    value: "Keizersgracht 520, 1017EK Amesterdam The Netherlands",
  },
];

const Contact = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="pt-32 max-w-[1200px] mx-auto px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-3xl md:text-6xl font-bold"
      >
        Get in <span className="text-purple-600">touch</span>
      </motion.h2>

      <div className="grid grid-rows-2 md:grid-cols-2 gap-8">
        <div className="py-16 pl-5 space-y-5 glass">
          {contact.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-lg md:text-2xl text-white/60 font-semibold">
                {item.title}
              </h3>
              <p className="text-xl md:text-3xl font-bold max-w-[320px] not-italic leading-relaxed">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="w-full h-full rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5788316086147!2d4.8906773!3d52.3660809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c19bcaa879%3A0x3b86a376ef9a0a98!2sKeizersgracht%20520%2C%201017%20EK%20Amsterdam!5e0!3m2!1sen!2snl!4v1647355453979!5m2!1sen!2snl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
