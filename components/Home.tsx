import Hero from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects/Projects";
import ProjectFeedback from "@/components/sections/ProjectFeedback/ProjectFeedback";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/layout/Footer";
import TechMarquee from "./sections/TechMarquee/TechMarquee";
import About from "./sections/About/About";
import HeaderSkills from "@/components/sections/Skills & Technologies/HeaderSkills";
import CareerTimeline from "./sections/Career/CareerTimeLine";

const Home = () => {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <HeaderSkills />
      <Projects />
      <CareerTimeline />
      <ProjectFeedback />
       <Contact />
      <Footer />
    </>
  );
};
export default Home;