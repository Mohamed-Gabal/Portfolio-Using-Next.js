"use client";

import Tilt from "react-parallax-tilt";
import { skills } from "@/data/skills";
import { SECTION_IDS } from "@/lib/constants";

const Skills = () => {
  return (
    <section id={SECTION_IDS.skills} className="text-white pt-16 pb-16">
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-200">Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill, i) => (
          <Tilt key={skill.id} scale={1.05} transitionSpeed={400}>
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={i * 100}
              className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105"
            >
              <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
              <p className="text-purple-400 mt-1">{skill.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};
export default Skills;