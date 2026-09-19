import Hero from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects/Projects";
import ProjectFeedback from "@/components/sections/ProjectFeedback/ProjectFeedback";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/layout/Footer";
import TechMarquee from "./sections/TechMarquee/TechMarquee";
import About from "./sections/About/About";
import HeaderSkills from "@/components/sections/Skills & Technologies/HeaderSkills";

const Home = () => {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <HeaderSkills />
      <Projects />
      <ProjectFeedback />
       <Contact />
      <Footer />
    </>
  );
};
export default Home;