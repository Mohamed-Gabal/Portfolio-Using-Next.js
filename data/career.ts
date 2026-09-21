import { IconType } from "react-icons";
import { FiBriefcase, FiCode } from "react-icons/fi";

export type Career = {
  id: string;
  icon: IconType;
  title: string;
  subtitle: string;
  date: string;
  description: string;
};

export const careers: Career[] = [
  {
    id: "1",
    icon: FiBriefcase,
    title: "Frontend Developer Romoz Tech",
    subtitle: "Freelance Projects",
    date: "2025 - Present",
    description:
      "Worked on modern web applications using React.js, Next.js, and TypeScript. Built responsive interfaces, authentication flows, dashboards, and user-focused frontend features.",
  },
  {
    id: "2",
    icon: FiCode,
    title: "Frontend Developer - Freelance",
    subtitle: "Wolf-Challenge",
    date: "2024 (3 months)",
    description:
      "Developing modern web applications using React.js, Next.js, and TypeScript. Building responsive interfaces and focusing on user experience.",
  },
];
