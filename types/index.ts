// import { IconType } from "react-icons";

// export type NavLink = {
//   id: number;
//   url: string;
//   label: string;
// };

// export type Skill = {
//   id: number;
//   name: string;
//   icon: React.ReactNode;
// };

// export type Service = {
//   id: number;
//   icon: string;
//   name: string;
//   description: string;
// };

// export type Project = {
//   id: number;
//   image: string;
//   title: string;
//   subtitle: string;
//   link?: string;
// };

// export type ResumeItem = {
//   id: number;
//   Icon: IconType;
//   role: string;
//   description?: string;
//   date?: string;
// };

// export type Testimonial = {
//   id: number;
//   projectName: string;
//   feedback: string;
//   name: string;
//   role: string;
//   image: string;
// };

// export type BlogPost = {
//   id: number;
//   image: string;
//   title: string;
//   date: string;
//   tags: string[];
// };

import { IconType } from "react-icons";

export type NavLink = {
  id: number;
  url: string;
  label: string;
};

export type Skill = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

export type Service = {
  id: number;
  icon: string;
  name: string;
  description: string;
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
