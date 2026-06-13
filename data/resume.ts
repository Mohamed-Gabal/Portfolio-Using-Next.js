import {
  FaBookOpen,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { ResumeItem } from "@/types";

export const workExperience: ResumeItem[] = [
  {
    id: 1,
    Icon: FaLaptopCode,
    role: "Frontend Developer",
    description:
      "Builds responsive and user-friendly web interfaces with a focus on performance and clean design.",
  },
  {
    id: 2,
    Icon: FaReact,
    role: "React & Next.js Developer",
    description:
      "Develops modern web applications using React and Next.js with optimized performance and scalable architecture.",
  },
  {
    id: 3,
    Icon: SiTypescript,
    role: "TypeScript Developer",
    description:
      "Writes type-safe and maintainable code using TypeScript to build scalable and reliable applications.",
  },
];

export const education: ResumeItem[] = [
  {
    id: 1,
    Icon: FaGraduationCap,
    role: "Diploma Degree in Management Information Systems – High British Institute (IPI), Mansoura",
    date: "2020 - 2022",
  },
  {
    id: 2,
    Icon: FaCode,
    role: "Frontend Development Track – Specialized in React, Next.js, and modern web technologies",
    date: "Jan 2023 - Dec 2023",
  },
  {
    id: 3,
    Icon: FaBookOpen,
    role: "Continuous Self-Learning – Focused on TypeScript, React Query, and scalable frontend architecture",
    date: "2024 - Present",
  },
];