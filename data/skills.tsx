import { ComponentType, SVGProps } from "react";
import {
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import { FaLayerGroup, FaMagic } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

export type SkillCategory =
  | "Framework"
  | "State Management"
  | "Language"
  | "Styling"
  | "Animations"
  | "Tools";

export const skillCategories: SkillCategory[] = [
  "Framework",
  "State Management",
  "Language",
  "Styling",
  "Animations",
  "Tools",
];

export type SkillLevel = "Expert" | "Advanced" | "Intermediate";

export type SkillColor = {
  icon: string;
  badge: string;
  glow: string;
};

export type Skill = {
  id: string;
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>; 
  level: SkillLevel;
  category: SkillCategory;
  color: SkillColor;
};

export const SkillsData: Skill[] = [
  {
    id: "1",
    name: "React",
    icon: SiReact, 
    level: "Advanced",
    category: "Framework",
    color: {
      icon: "bg-cyan-400/10 text-cyan-300",
      badge: "bg-cyan-400/15 text-cyan-200",
      glow: "hover:border-cyan-400/30 hover:shadow-cyan-950/30",
    },
  },
  {
    id: "2",
    name: "Next.js",
    icon: SiNextdotjs,
    level: "Advanced",
    category: "Framework",
    color: {
      icon: "bg-slate-400/10 text-slate-200",
      badge: "bg-slate-400/15 text-slate-200",
      glow: "hover:border-slate-300/30 hover:shadow-slate-950/30",
    },
  },
  {
    id: "3",
    name: "Redux",
    icon: SiRedux,
    level: "Intermediate",
    category: "State Management",
    color: {
      icon: "bg-purple-400/10 text-purple-300",
      badge: "bg-purple-400/15 text-purple-200",
      glow: "hover:border-purple-400/30 hover:shadow-purple-950/30",
    },
  },
  {
    id: "4",
    name: "Context API",
    icon: FaLayerGroup,
    level: "Advanced",
    category: "State Management",
    color: {
      icon: "bg-indigo-400/10 text-indigo-300",
      badge: "bg-indigo-400/15 text-indigo-200",
      glow: "hover:border-indigo-400/30 hover:shadow-indigo-950/30",
    },
  },
  {
    id: "5",
    name: "Zustand",
    icon: FaLayerGroup,
    level: "Advanced",
    category: "State Management",
    color: {
      icon: "bg-amber-400/10 text-amber-300",
      badge: "bg-amber-400/15 text-amber-200",
      glow: "hover:border-amber-400/30 hover:shadow-amber-950/30",
    },
  },
  {
    id: "6",
    name: "JavaScript",
    icon: SiJavascript,
    level: "Expert",
    category: "Language",
    color: {
      icon: "bg-yellow-400/10 text-yellow-300",
      badge: "bg-yellow-400/15 text-yellow-200",
      glow: "hover:border-yellow-400/30 hover:shadow-yellow-950/30",
    },
  },
  {
    id: "7",
    name: "TypeScript",
    icon: SiTypescript,
    level: "Advanced",
    category: "Language",
    color: {
      icon: "bg-blue-400/10 text-blue-300",
      badge: "bg-blue-400/15 text-blue-200",
      glow: "hover:border-blue-400/30 hover:shadow-blue-950/30",
    },
  },
  {
    id: "8",
    name: "HTML5",
    icon: SiHtml5,
    level: "Expert",
    category: "Styling",
    color: {
      icon: "bg-orange-400/10 text-orange-300",
      badge: "bg-orange-400/15 text-orange-200",
      glow: "hover:border-orange-400/30 hover:shadow-orange-950/30",
    },
  },
  {
    id: "9",
    name: "CSS3",
    icon: SiCss3,
    level: "Expert",
    category: "Styling",
    color: {
      icon: "bg-blue-400/10 text-blue-300",
      badge: "bg-blue-400/15 text-blue-200",
      glow: "hover:border-blue-400/30 hover:shadow-blue-950/30",
    },
  },
  {
    id: "10",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "Expert",
    category: "Styling",
    color: {
      icon: "bg-cyan-400/10 text-cyan-300",
      badge: "bg-cyan-400/15 text-cyan-200",
      glow: "hover:border-cyan-400/30 hover:shadow-cyan-950/30",
    },
  },
  {
    id: "11",
    name: "GSAP",
    icon: FaMagic,
    level: "Intermediate",
    category: "Animations",
    color: {
      icon: "bg-green-400/10 text-green-300",
      badge: "bg-green-400/15 text-green-200",
      glow: "hover:border-green-400/30 hover:shadow-green-950/30",
    },
  },
  {
    id: "12",
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
    level: "Intermediate",
    category: "Animations",
    color: {
      icon: "bg-pink-400/10 text-pink-300",
      badge: "bg-pink-400/15 text-pink-200",
      glow: "hover:border-pink-400/30 hover:shadow-pink-950/30",
    },
  },
  {
    id: "13",
    name: "Vite",
    icon: SiVite,
    level: "Advanced",
    category: "Tools",
    color: {
      icon: "bg-violet-400/10 text-violet-300",
      badge: "bg-violet-400/15 text-violet-200",
      glow: "hover:border-violet-400/30 hover:shadow-violet-950/30",
    },
  },
  {
    id: "14",
    name: "Figma",
    icon: SiFigma,
    level: "Intermediate",
    category: "Tools",
    color: {
      icon: "bg-fuchsia-400/10 text-fuchsia-300",
      badge: "bg-fuchsia-400/15 text-fuchsia-200",
      glow: "hover:border-fuchsia-400/30 hover:shadow-fuchsia-950/30",
    },
  },
];