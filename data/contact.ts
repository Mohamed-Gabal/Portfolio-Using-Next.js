import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FiClock, FiLinkedin, FiMapPin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { IconType } from "react-icons";

export type ContactMethod = {
  id: string;
  icon: IconType;
  title: string;
  value: string;
  description: string;
  href: string;
  iconColor: string;
  iconBg: string;
  hoverBg: string;
  hoverBorder: string;
};

export type ContactDetail = {
  id: string;
  icon: IconType;
  title: string;
  value: string;
};

export type ContactStat = {
  id: string;
  label: string;
};

export const contactMethods: ContactMethod[] = [
  {
    id: "1",
    icon: MdOutlineEmail,
    title: "Email",
    value: "abogabal672@gmail.com",
    description: "fastestResponse",
    href: "mailto:abogabal672@gmail.com",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    hoverBg: "hover:bg-blue-500/10",
    hoverBorder: "hover:border-blue-400/40",
  },
  {
    id: "2",
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+201001034941",
    description: "instantChat",
    href: "https://wa.me/201001034941",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    hoverBg: "hover:bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-400/40",
  },
  {
    id: "3",
    icon: FiLinkedin,
    title: "LinkedIn",
    value: "Mohamed Ali",
    description: "professionalNetwork",
    href: "https://www.linkedin.com/in/mohamed-ali-b9a61140b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    hoverBg: "hover:bg-blue-500/10",
    hoverBorder: "hover:border-blue-400/40",
  },
  {
    id: "4",
    icon: LuGithub,
    title: "GitHub",
    value: "Mohamed-Gabal",
    description: "viewMyWork",
    href: "https://github.com/Mohamed-Gabal",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    hoverBg: "hover:bg-purple-500/10",
    hoverBorder: "hover:border-purple-400/40",
  },
];

export const contactDetails: ContactDetail[] = [
  {
    id: "1",
    icon: FiClock,
    title: "responseTime",
    value: "2-4 Hours",
  },
  {
    id: "2",
    icon: FiMapPin,
    title: "location",
    value: "Egypt (GMT+3)",
  },
];

export const contactStats: ContactStat[] = [
  {
    id: "1",
    label: "20+ Projects",
  },
  {
    id: "2",
    label: "100% Satisfaction",
  },
  {
    id: "3",
    label: "2+ Years Exp.",
  },
];