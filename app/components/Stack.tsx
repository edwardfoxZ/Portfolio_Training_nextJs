"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiFramer,
  SiFigma,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { FaLemon } from "react-icons/fa";

const stackItems = [
  {
    id: 1,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "text-purple-300",
  },
  {
    id: 2,
    name: "Figma",
    icon: <SiFigma size={100} />,
    color: "text-purple-300",
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact size={100} />,
    color: "text-purple-300",
  },
  {
    id: 4,
    name: "Node.js",
    icon: <SiNodedotjs size={100} />,
    color: "text-purple-300",
  },
  {
    id: 5,
    name: "MongoDB",
    icon: <SiMongodb size={100} />,
    color: "text-purple-300",
  },
  {
    id: 6,
    name: "Docker",
    icon: <SiDocker size={100} />,
    color: "text-purple-300",
  },
];

const variants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
  }),

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
    },
  },
};

const Stack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section id="stack" className="w-full p-16 py-36 overflow-hidden">
      <div className="max-w-[250px] mx-auto text-center">
        <h2 className="text-7xl text-gray-200 font-bold mb-10">My Stack</h2>
        <div className="grid gap-10" ref={ref}>
          {stackItems.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={variants}
              className="bg-white/10 flex justify-center items-center flex-row rounded-xl shadow-lg p-4 py-8 hover:shadow-2xl space-x-3"
            >
              <div
                className={`${item.color} flex flex-row items-center gap-10`}
              >
                {item.icon}
              </div>
              <p className="text-xl md:text-3xl font-medium text-white/50 rotate-[-90deg]">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
