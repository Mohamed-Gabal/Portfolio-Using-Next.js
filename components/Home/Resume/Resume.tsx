
import React from "react";
import { FaBookOpen, FaCode, FaGraduationCap, FaLaptopCode, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import ResumeCard from "./ResumeCard";

const Resume = () => {

  // Data For My Works
  const resumeData = [
    {
      id: 1,
      Icon: FaLaptopCode,
      role: "Frontend Developer",
      description:
        "Builds responsive and user-friendly web interfaces with a focus on performance and clean design.",
        date: '',
    },
    {
      id: 2,
      Icon: FaReact,
      role: "React & Next.js Developer",
      description:
        "Develops modern web applications using React and Next.js with optimized performance and scalable architecture.",
        date: '',
    },
    {
      id: 3,
      Icon: SiTypescript,
      role: "TypeScript Developer",
      description:
        "Writes type-safe and maintainable code using TypeScript to build scalable and reliable applications.",
        date: '',
    },
  ];

  // Data For My Education
  const resumeEducation = [
    {
      id: 1,
      Icon: FaGraduationCap,
      role:
        "Diploma Degree in Management Information Systems – High British Institute (IPI), Mansoura",
      date: "2020 - 2022",
      description: '',
    },
    {
      id: 2,
      Icon: FaCode,
      role:
        "Frontend Development Track – Specialized in React, Next.js, and modern web technologies",
      date: "Jan 2023 - Dec 2023",
      description: '',
    },
    {
      id: 3,
      Icon: FaBookOpen,
      role:
        "Continuous Self-Learning – Focused on TypeScript, React Query, and scalable frontend architecture",
      date: "2024 - Present",
      description: '',
    },
  ];

  return (
    <div className="pt-16 pb-12 sm:pt-20 sm:pb-16">
      <div data-aos='zoom-out' data-aos-anchor-placement='top-center' data-aos-delay='300' className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16">

        {/* Work Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>
          
          {resumeData.map((resume) => (
            <ResumeCard
            key={resume.id}
            Icon={resume.Icon}
            role={resume.role}
            description={resume.description}
            date={resume.date} // ممكن يكون undefined
            />
            ))}
        </div>

        {/* Education Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            My <span className="text-cyan-200">Education</span>
          </h1>
          
          {resumeEducation.map((education) => (
            <ResumeCard
            key={education.id}
            Icon={education.Icon}
            role={education.role}
            date={education.date}
            description={education.description}
            />
            ))}
        </div>

      </div>
    </div>
  );
};
export default Resume;