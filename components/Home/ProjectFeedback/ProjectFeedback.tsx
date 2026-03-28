"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectFeedbackCard from "./ProjectFeedbackCard";

const testimonials = [
  {
    id: 1,
    projectName: "Mashi (Saudi Classifieds)",
    feedback: "Successfully implemented a robust Authentication system with secure Login/Register and OTP verification. The Admin Dashboard is highly organized, and the pixel-perfect responsiveness ensures a seamless experience across all devices.",
    name: "Engineering Lead",
    role: "Technical Review",
    image: "/images/mashi.jpg", 
  },
  {
    id: 2,
    projectName: "Zabiha E-commerce",
    feedback: "Demonstrated excellence in developing a specialized e-commerce platform. Efficiently handled complex product categorization for livestock and poultry while maintaining high performance and an intuitive user journey.",
    name: "Project Manager",
    role: "E-commerce Solutions",
    image: "/images/zabiha.jpg",
  },
  {
    id: 3,
    projectName: "Investment Landing Page",
    feedback: "Delivered a high-converting landing page with a modern 5-section layout. The integration of Email OTP for client communication added a significant layer of trust and professionalism to the platform.",
    name: "Senior Designer",
    role: "UI/UX Feedback",
    image: "/images/landing.jpg",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1, slidesToSlide: 1 },
};

const ProjectFeedback = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-900">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
        Professional Impact & <br />
        <span className="text-cyan-200">Project Feedback</span>
      </h1>

      <div className="mt-16 w-[90%] md:w-[85%] mx-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          arrows={true}
        >
          {testimonials.map((item) => (
            <ProjectFeedbackCard
              key={item.id}
              image={item.image}
              name={item.name}
              role={item.role}
              projectName={item.projectName}
              feedback={item.feedback}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default ProjectFeedback;