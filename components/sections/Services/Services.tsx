import { services } from "@/data/services";
import { SECTION_IDS } from "@/lib/constants";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section id={SECTION_IDS.services} className="pt-16 pb-16">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-snug">
        Collaborate with brands
        <br /> and agencies to create
        <br /> impactful results
      </h2>

      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12 md:mt-16"
      >
        {services.map((service) => (
          <ServicesCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};
export default Services;