import { workExperience, education } from "@/data/resume";
import { SECTION_IDS } from "@/lib/constants";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <section id={SECTION_IDS.resume} className="pt-16 pb-12 sm:pt-20 sm:pb-16">
      <div
        data-aos="zoom-out"
        data-aos-anchor-placement="top-center"
        data-aos-delay="300"
        className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16"
      >
        {/* Work Experience */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            My Work <span className="text-cyan-200">Experience</span>
          </h2>

          {workExperience.map((item) => (
            <ResumeCard
              key={item.id}
              Icon={item.Icon}
              role={item.role}
              description={item.description}
              date={item.date}
            />
          ))}
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            My <span className="text-cyan-200">Education</span>
          </h2>

          {education.map((item) => (
            <ResumeCard
              key={item.id}
              Icon={item.Icon}
              role={item.role}
              description={item.description}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Resume;