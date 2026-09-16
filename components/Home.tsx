import Hero from "@/components/sections/Hero/Hero";
import Resume from "@/components/sections/Resume/Resume";
import Projects from "@/components/sections/Projects/Projects";
import ProjectFeedback from "@/components/sections/ProjectFeedback/ProjectFeedback";
import Blog from "@/components/sections/Blog/Blog";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/layout/Footer";
import TechMarquee from "./sections/TechMarquee/TechMarquee";
import About from "./sections/About/About";

const Home = () => {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Resume />
      <Projects />
      <ProjectFeedback />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;