"use client";

import { useInView, motion } from "framer-motion";
import React from "react";

const services = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    description:
      "Building robust, scalable web applications from front-end to back-end, ensuring seamless functionality and user experience.",
  },
  {
    id: "02",
    title: "API Development",
    description:
      "Designing and implementing RESTful APIs to enable efficient communication between different software systems and services.",
  },
  {
    id: "03",
    title: "Database Design & Management",
    description:
      "Creating efficient database structures and managing data flow to ensure optimal performance and data integrity.",
  },
  {
    id: "04",
    title: "Cloud Integration",
    description:
      "Leveraging cloud technologies to deploy, scale, and manage applications, ensuring high availability and cost-effectiveness.",
  },
  {
    id: "05",
    title: "DevOps & CI/CD",
    description:
      "Implementing continuous integration and deployment pipelines to streamline development processes and improve code quality.",
  },
  {
    id: "06",
    title: "Performance Optimization",
    description:
      "Analyzing and optimizing application performance to ensure fast load times and smooth user interactions across all devices.",
  },
];

const Services = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="p-16 py-32 flex">
      <div className="max-w-xl md:max-w-full mx-auto grid grid-cols-1 md:flex md:flex-col md:mx-auto lg:flex-row items-start gap-36">
        <div className="w-1/4 pr-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-bold md:text-7xl sticky"
          >
            SERVICES
          </motion.h2>
        </div>

        <div className="w-3/4 space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="flex items-start gap-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-purple-300">
                {service.id}
              </h2>
              <div>
                <p className="font-bold text-2xl md:text-3xl mb-2">
                  {service.title}
                </p>
                <p className="font-medium text-white/50">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
