"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";
import project1 from "../../public/assets/proj5.png";
import project2 from "../../public/assets/proj6.png";
import Image from "next/image";

const code = (
  <code className="text-purple-200/50">
    const skills = [<br />
    &nbsp;&nbsp;'JavaScript',
    <br />
    &nbsp;&nbsp;'React',
    <br />
    &nbsp;&nbsp;'Node.js',
    <br />
    &nbsp;&nbsp;'Python',
    <br />
    &nbsp;&nbsp;'SQL',
    <br />
    &nbsp;&nbsp;'AWS'
    <br />
    ];
  </code>
);

const aboutData = [
  {
    id: 1,
    title: "01. Background",
    detail:
      "I'm a passionate full-stack developer with a strong foundation in computer science and a love for creating innovative web solutions. My journey in tech started with a curiosity about how things work, which led me to pursue a career in web development.",
    interface: {
      image: "",
      code: code,
    },
  },
  {
    id: 2,
    title: "02. Expertise",
    detail:
      "I specialize in building robust and scalable web applications using modern technologies. My expertise spans both front-end and back-end development, allowing me to create seamless, end-to-end solutions.",
    interface: {
      image: project1,
    },
  },
  {
    id: 3,
    title: "03. Skills",
    detail:
      "I'm proficient in a wide range of technologies and constantly expanding my skill set to stay at the forefront of web development.",
    interface: {
      image: "",
    },
  },
];

export const About = () => {
  return (
    <section id="about" className="relative p-8 mt-20">
      <p className="text-3xl md:text-5xl font-bold">
        About <span className="text-purple-300">Me</span>
      </p>

      <div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-10 lg:mx-auto mt-26">
          {aboutData.map((item, index) => (
            <ul className="border border-white/20 p-5 space-y-6" key={index}>
              <p className="text-2xl md:text-2xl lg:text-4xl font-bold">
                {item.title}
              </p>
              <p className="max-w-xl text-base md:text-base lg:text-lg font-semibold text-gray-400">
                {item.detail}
              </p>
              {item.interface?.code && item.interface.code}
              {item.interface.image && (
                <div className="min-h-[23vh] mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
                  <Image
                    src={item.interface.image}
                    alt="project1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )}
              {!item.interface.image && !item.interface.code && (
                <div className="flex flex-col space-y-3">
                  <div className="p-3 border border-white/20 space-y-4">
                    <p className="text-lg md:text-xl font-semibold text-purple-300 text-center">
                      Frontend
                    </p>
                    <span className="text-gray-400 text-center space-y-1 font-semibold">
                      <p>React</p>
                      <p>TypeScript</p>
                      <p>Tailwind CSS</p>
                      <p>Farmer Motion</p>
                    </span>
                  </div>
                  <div className="p-3 border border-white/20 space-y-4">
                    <p className="text-lg md:text-xl font-semibold text-purple-300 text-center">
                      Backend
                    </p>
                    <span className="text-gray-400 text-center space-y-1 font-semibold">
                      <p>Node.js</p>
                      <p>Python</p>
                      <p>PostgreSQL</p>
                      <p>AWS</p>
                    </span>
                  </div>
                </div>
              )}
            </ul>
          ))}
        </div>

        <div className="relative grid md:grid-cols-2 items-end gap-8 mt-10">
          <div className="min-h-full mt-4 border border-white/20 rounded-lg p-6 space-y-2">
            <div className="flex flex-col gap-1">
              <label>Front-end</label>
              <Progress
                value={90}
                className="bg-purple-300/20 [&>div]:bg-purple-100/50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Back-end</label>
              <Progress
                value={80}
                className="bg-purple-300/20 [&>div]:bg-purple-100/50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>DevOps</label>
              <Progress
                value={75}
                className="bg-purple-300/20 [&>div]:bg-purple-100/50"
              />
            </div>

            <p className="text-2xl md:text-2xl lg:text-4xl font-bold mt-4">
              04.Approach
            </p>
            <h2 className="font-medium text-gray-400 mt-5">
              I believe in writting clean, maintainable code and following best
              practices. My approach involves understanding client needs,
              planning throughly, and delievering high-quality solutions on
              time.
            </h2>
          </div>

          <div className="min-h-full border border-white/20 rounded-lg p-6">
            <div className="h-[200px] overflow-hidden p-4 border border-white/20 relative">
              <Image
                src={project2}
                alt="project2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="font-medium text-gray-400 mt-5">
              My goal is to continue growing as a developer, tackling
              challenging projects, and contributing to the tech community. I'm
              always excited to learn new technologies and push the boundaries
              of what's possible in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
