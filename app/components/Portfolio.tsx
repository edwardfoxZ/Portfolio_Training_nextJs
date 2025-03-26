"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowIcon, project5, project6 } from "./index";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      year: 2023,
      title: "Doodle - customer support chatbot",
      description:
        "We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle's customer support inquiries, freeing up their team to focus on more complex issues.",
      image: project5,
    },
    {
      id: 2,
      year: 2024,
      title: "Dash - AI calling system",
      description:
        "We developed Dash, an AI-powered calling system that enhances customer communication and support with automated features.",
      image: project6,
    },
    {
      id: 3,
      year: 2024,
      title: "Atomic - AI driven outreach",
      description:
        "Atomic is our AI-driven outreach tool that maximizes engagement and conversions through intelligent automation.",
      image: project5,
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <motion.section id="portfolio" className="mt-28 p-16 py-72 mx-auto">
      <div className="md:flex md:flex-col lg:grid lg:grid-cols-2 items-center justify-center space-x-8">
        <div>
          <p className="text-3xl md:text-5xl font-bold">
            Selected <span className="text-purple-300">projects</span>
          </p>

          {projects.map((project) => (
            <div
              key={project.id}
              className="mt-10 grid grid-cols-1 max-lg:mx-auto gap-5"
            >
              <label className="font-serif text-purple-300 text-lg">
                {project.year}
              </label>
              <p
                onClick={() => setSelectedProject(project)}
                className={`font-bold text-lg md:text-3xl lg:text-3xl cursor-pointer duration-300 hover:text-purple-500 ${
                  selectedProject.id === project.id
                    ? " text-purple-300 underline underline-offset-8"
                    : ""
                }`}
              >
                {project.title}
                <ArrowIcon size={23} className="inline" />
              </p>
              <p
                className={`md:w-[80%] max-lg:w-[100%] lg:w-[90%] text-sm md:text-xl lg:text-xl text-white/50 ${
                  selectedProject.id === project.id
                    ? "opacity-100 h-full"
                    : "opacity-0 max-h-12"
                } transition-transform duration-300`}
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <motion.div
          animate={selectedProject.image && { y: ["10%", "0"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex items-center justify-center"
        >
          <Image
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            src={selectedProject.image}
            alt={selectedProject.title}
            width={selectedProject.image ? 800 : 0}
            height={selectedProject.image ? 450 : 0}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
