import { services } from "@/data/about";

import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/container";

import AboutCard from "./AboutCard";

const About = () => {
  return (
    <Container className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center">
        <Badge icon="🚀">Professional Freelance Developer</Badge>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          About <span className="text-cyan-300">Me</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          I,m a{" "}
          <span className="text-cyan-200">freelance frontend developer</span>{' '}
          with <span className="text-cyan-200">2+ years of experience</span>
          building digital products for clients worldwide. I specialize in
          turning creative ideas into high-performance web applications.
        </p>
      </div>

      {/* Cards */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:gap-8"
      >
        {services.map((service) => (
          <AboutCard key={service.id} {...service} />
        ))}
      </div>
    </Container>
  );
};

export default About;
