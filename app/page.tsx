import "normalize.css";
import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import LogoAnimation from "./components/LogoAnimation";
import Portfolio from "./components/Portfolio";
import KeyMetrics from "./components/KeyMetrics";
import Stack from "./components/Stack";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="bg-[linear-gardient(to_bottom,#000,#232323_35%,#232323_67%,#242424_85%)]">
      <Navbar />
      <Hero />
      <LogoAnimation />
      <About />
      <Portfolio />
      <Stack />
      <KeyMetrics />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
