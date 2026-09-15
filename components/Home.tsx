import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Resume from "@/components/sections/Resume/Resume";
import Projects from "@/components/sections/Projects/Projects";
import ProjectFeedback from "@/components/sections/ProjectFeedback/ProjectFeedback";
import Blog from "@/components/sections/Blog/Blog";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/layout/Footer";
import TechMarquee from "./sections/TechMarquee/TechMarquee";

const Home = () => {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Services />
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