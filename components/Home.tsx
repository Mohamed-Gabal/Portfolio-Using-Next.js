import Hero from "@/components/sections/Hero/Hero";
import TechMarquee from "./sections/TechMarquee/TechMarquee";
import About from "./sections/About/About";
import HeaderSkills from "@/components/sections/Skills & Technologies/HeaderSkills";
import Projects from "@/components/sections/Projects/Projects";
// import ProjectFeedback from "@/components/sections/ProjectFeedback/ProjectFeedback";
import CareerTimeline from "./sections/Career/CareerTimeLine";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/layout/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <HeaderSkills />
      <Projects />
      {/* <ProjectFeedback /> */}
      <CareerTimeline />
       <Contact />
      <Footer />
    </>
  );
};
export default Home;