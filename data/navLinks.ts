import { NavLink } from "@/types";

// Each url corresponds to a section id (see SECTION_IDS in lib/constants.ts)
export const navLinks: NavLink[] = [
  { id: 1, url: "#home", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#resume", label: "Resume" },
  { id: 4, url: "#projects", label: "Works" },
  { id: 5, url: "#skills", label: "Skills" },
  { id: 6, url: "#testimonials", label: "Testimonials" },
  { id: 7, url: "#contact", label: "Contact" },
];