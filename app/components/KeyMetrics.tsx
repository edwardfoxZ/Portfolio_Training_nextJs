"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface Metric {
  id: number;
  value: string;
  label: string;
  description: string;
}

const metrics = [
  {
    id: 1,
    value: "5+",
    label: "Year of Experience",
    description: "Dedicated to full-stack development",
  },
  {
    id: 2,
    value: "50+",
    label: "Projects Completed",
    description: "From small applications to complex web platforms",
  },
  {
    id: 3,
    value: "10+",
    label: "Technologies Mastered",
    description: "Proficient in various programming languages and frameworks",
  },
  {
    id: 4,
    value: "100%",
    label: "Code Quality",
    description: "Committed to writting clean, efficient, and maintable code",
  },
  {
    id: 5,
    value: "1000+",
    label: "Commits on Github",
    description: "Active contributor to open-source and personal projects",
  },
];

const KeyMetrics: React.FC = () => {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="container mx-auto px-14 py-32"
    >
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold"
      >
        KEY METRICS
      </motion.p>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-5 mt-20">
        {metrics.map((metric: Metric, index: number) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, x: 8 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 3 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="font-bold text-3xl md:text-3xl lg:text-5xl text-purple-300"
            >
              {metric.value}
            </motion.h2>
            <p className="font-semibold text-xl md:text-xl lg:text-3xl">
              {metric.label}
            </p>
            <p className="text-white/50 text-xs md:text-sm lg:text-lg">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default KeyMetrics;
