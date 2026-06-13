import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { SECTION_IDS } from "@/lib/constants";

const Projects = () => {
  return (
    <section id={SECTION_IDS.projects} className="pt-16 pb-16">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-200">Projects</span>
      </h2>

      <div className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16">
        {projects.map((item) => {
          const content = (
            <>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="pt-2 font-medium text-white/80">
                {item.subtitle}
              </p>
            </>
          );

          return (
            <div key={item.id} className="group">
              {item.link ? (
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  {content}
                </Link>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;