import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin, FiMapPin, FiPhone, FiMessageCircle } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { IconType } from "react-icons";

export type SocialLink = {
  id: string;
  icon: IconType;
  href: string;
  label: string;
};

export type QuickLink = {
  id: string;
  label: string;
  href: string;
};

export type FooterContactItem = {
  id: string;
  icon: IconType;
  value: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "1",
    icon: LuGithub,
    href: "https://github.com/Mohamed-Gabal",
    label: "GitHub",
  },
  {
    id: "2",
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/mohamed-ali-b9a61140b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
  },
  {
    id: "3",
    icon: FiMessageCircle,
    href: "https://wa.me/201001034941",
    label: "WhatsApp",
  },
  {
    id: "4",
    icon: MdOutlineEmail,
    href: "mailto:abogabal672@gmail.com",
    label: "Email",
  },
];

export const quickLinks: QuickLink[] = [
  { id: "1", label: "About", href: "#about" },
  { id: "2", label: "Projects", href: "#projects" },
  { id: "3", label: "Skills", href: "#skills" },
  { id: "4", label: "Experience", href: "#experience" },
  { id: "5", label: "Contact", href: "#contact" },
];

export const footerContactItems: FooterContactItem[] = [
  { id: "1", icon: MdOutlineEmail, value: "abogabal672@gmail.com" },
  { id: "2", icon: FiPhone, value: "+201001034941" },
  { id: "3", icon: FiMapPin, value: "Egypt (GMT+3)" },
];
