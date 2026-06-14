"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projects } from "@/data/projects";
import { SECTION_IDS } from "@/lib/constants";
import ProjectFeedbackCard from "./ProjectFeedbackCard";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1, slidesToSlide: 1 },
};

const ProjectFeedback = () => {
  return (
    <section
      id={SECTION_IDS.testimonials}
      className="pt-16 pb-16 bg-gray-900"
    >
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
        Project Highlights & <br />
        <span className="text-cyan-200">Key Features</span>
      </h2>

      <div className="mt-16 w-[90%] md:w-[85%] mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          arrows
        >
          {projects.map((project) => (
            <ProjectFeedbackCard
              key={project.id}
              image={project.images[0]}
              title={project.title}
              highlights={project.highlights}
              liveUrl={project.liveUrl}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default ProjectFeedback;