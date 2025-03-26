"use client";

import React from "react";
import { motion } from "framer-motion";
import elementor from "@/public/assets/elementor.png";
import fiverr from "@/public/assets/fiverr.png";
import logitech from "@/public/assets/logitech.png";
import oracle from "@/public/assets/oracle.png";
import udemy from "@/public/assets/udemy.png";
import Image from "next/image";

const LogoAnimation = () => {
  const images = [
    { src: elementor, alt: "elementor" },
    { src: fiverr, alt: "fiverr" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
    { src: udemy, alt: "udemy" },
    { src: elementor, alt: "elementor" },
    { src: fiverr, alt: "fiverr" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
    { src: udemy, alt: "udemy" },
    { src: elementor, alt: "elementor" },
    { src: fiverr, alt: "fiverr" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
    { src: udemy, alt: "udemy" },
    { src: elementor, alt: "elementor" },
    { src: fiverr, alt: "fiverr" },
    { src: logitech, alt: "logitech" },
    { src: oracle, alt: "oracle" },
    { src: udemy, alt: "udemy" },
  ];

  return (
    <div className="py-8 my-24 bg-purple-950/50 skew-y-3 opacity-80 glass">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,black_75%,_transparent)]">
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) =>
              image.src ? (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  height={30}
                />
              ) : (
                <div
                  key={index}
                  className="flex items-center justify-center h-8 w-24 bg-gray-300 text-gray-600"
                >
                  Logo
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
