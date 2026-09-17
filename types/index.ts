import { IconType } from "react-icons";

// export type Skill = {
//   id: number;
//   name: string;
//   icon: React.ReactNode;
// };

export type Service = {
  id: number;
  icon: string;
  name: string;
  description: string;
  tags: string[];
};

export type Project = {
  id: number;
  images: [string, string, string, string];
  title: string;
  subtitle: string;
  liveUrl: string;
  highlights: string[];
};

export type ResumeItem = {
  id: number;
  Icon: IconType;
  role: string;
  description?: string;
  date?: string;
};

export type BlogPost = {
  id: number;
  image: string;
  title: string;
  date: string;
  tags: string[];
};
