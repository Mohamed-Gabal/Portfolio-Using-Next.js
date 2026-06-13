import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiReduxsaga,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Skill } from "@/types";

export const skills: Skill[] = [
  { id: 1, name: "JavaScript", icon: <SiJavascript /> },
  { id: 2, name: "React.js", icon: <SiReact /> },
  { id: 3, name: "Next.js", icon: <SiNextdotjs /> },
  { id: 4, name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { id: 5, name: "TypeScript", icon: <SiTypescript /> },
  { id: 6, name: "React Query", icon: <SiReactquery /> },
  { id: 7, name: "Redux Toolkit", icon: <SiReduxsaga /> },
];