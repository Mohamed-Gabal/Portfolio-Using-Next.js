import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
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
    </div>
  );
};
export default Home;
