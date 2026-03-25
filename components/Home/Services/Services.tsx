
import React from "react";
import ServicesCard from "./ServicesCard";

const services = [
  {
    icon: "/images/s1.png",
    name: "UI & UX",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    icon: "/images/s2.png",
    name: "Web Development",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    icon: "/images/s3.png",
    name: "Design & Creative",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    icon: "/images/s4.png",
    name: "Development",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
];

const Services = () => {
  return (
    <section className="pt-16 pb-16">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-snug">
        Collaborate with brand<br /> and agencies to create <br /> impactful results
      </h1>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12 md:mt-16">
        {services.map((service, i) => (
          <ServicesCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
};
export default Services;