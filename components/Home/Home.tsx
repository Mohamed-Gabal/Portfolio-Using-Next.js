'use client';

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ProjectFeedback from "./ProjectFeedback/ProjectFeedback";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import 'aos/dist/aos.css';

const Home = () => {

useEffect(() => {
    const initAos = async () => {
      const AOS = (await import('aos')).default; 
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    }
    initAos();
  }, []);
  return (
    <div>
      {/* Import Page Hero */}
      <Hero />
      {/* Import Page Services */}
      <Services />
      {/* Import Page Resume */}
      <Resume />
      {/* Import Page Projects */}
      <Projects />
      {/* Import Page Projects */}
      <Skills />
      {/* Import Page ProjectFeedback */}
      <ProjectFeedback />
      {/* Import Page Blog */}
      <Blog />
      {/* Import Page Contact */}
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
