import { services } from "@/data/about";

import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/container";

import AboutCard from "./AboutCard";
import ProjectCta from "@/components/ui/ProjectCta";

const tagsData = [
  {
    id: "1",
    text: "Available for new projects",
    bgColor: "#e6fcf5",
    textColor: "#0ca678",
  },
  {
    id: "2",
    text: "1-2 weeks average delivery",
    bgColor: "#e7f5ff",
    textColor: "#1c7ed6",
  },
  {
    id: "3",
    text: "Free consultation call",
    bgColor: "#f3f0ff",
    textColor: "#7048e8",
  },
];

const About = () => {
  return (
    <section>
      <Container className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        {/* Section Header */}
        <Badge
          badge="🚀 Professional Freelance Developer"
          title={<>About <span className="text-cyan-300">Me</span></>}
          description={
            <>
              I&apos;m a{" "}
              <span className="text-cyan-300">
                freelance frontend developer
              </span>{" "}
              with <span className="text-cyan-300">2+ years of experience</span>{" "}
              building digital products for clients worldwide. I specialize in
              turning creative ideas into high-performance web applications.
            </>
          }
        />

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <AboutCard key={service.id} {...service} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center mt-20">
          <ProjectCta
            title="Ready to bring your next project to life?"
            tags={tagsData}
          />
        </div>
        
      </Container>
    </section>
  );
};

export default About;
