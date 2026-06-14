
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { projects } from "@/data/projects";
import { SECTION_IDS } from "@/lib/constants";

const Projects = () => {
  return (
    <section id={SECTION_IDS.projects} className="pt-16 pb-16">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-200">Projects</span>
      </h2>

      <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="group block bg-[#11112b] rounded-2xl p-4 border border-white/5 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            {/* 2x2 Screenshot Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 rounded-xl overflow-hidden">
              {project.images.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>

            {/* Title + Subtitle */}
            <div className="mt-5">
              <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="pt-2 font-medium text-white/70 text-sm sm:text-base">
                {project.subtitle}
              </p>
            </div>

            {/* Visible Link */}
            <div className="mt-4 flex items-center gap-2 text-cyan-300 text-sm sm:text-base font-medium group-hover:underline">
              <span className="truncate">{project.liveUrl.replace(/^https?:\/\//, "")}</span>
              <BsArrowUpRight className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Projects;