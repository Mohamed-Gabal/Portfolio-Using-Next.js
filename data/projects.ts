export type ProjectFilter = "all" | "Dashboards" | "Ecommerce" | "Featured";

export const projectFilters: ProjectFilter[] = [
  "all",
  "Dashboards",
  "Ecommerce",
  "Featured",
];

export type Project = {
  id: string;
  title: string;
  company: string;
  date: string;
  category: string;
  ecommerce: boolean;
  featured: boolean;
  liveUrl: string;
  images: string[];
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Ziad Shop",
    company: "Personal Project",
    date: "2024",
    category: "E-commerce",
    ecommerce: true,
    featured: false,
    liveUrl: "https://ziad-shop.vercel.app/",
    images: [
      "/images/ziad1.png",
      "/images/ziad2.png",
      "/images/ziad3.png",
      "/images/ziad4.png",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Context API",
      "Vercel",
    ],
  },

  {
    id: "2",
    title: "Car Rental",
    company: "Greatstack",
    date: "2025",
    category: "E-commerce",
    ecommerce: true,
    featured: false,
    liveUrl: "https://car-rental-app-green.vercel.app/",
    images: [
      "/images/car-rental-1.png",
      "/images/car-rental-2.png",
      "/images/car-rental-3.png",
      "/images/car-rental-4.png",
    ],
    technologies: [
      "Vite",
      "React",
      "react-router-dom",
      "Tailwind Css",
      "React Icons",
      "Eslint",
    ],
  },

  {
    id: "3",
    title: "TornMart",
    company: "TornMart",
    date: "2024",
    category: "E-commerce",
    ecommerce: true,
    featured: false,
    liveUrl: "https://tornmart-ecommerce.vercel.app/",
    images: [
      "/images/tornmart1.png",
      "/images/tornmart2.png",
      "/images/tornmart3.png",
      "/images/tornmart4.png",
    ],
    technologies: [
      "React",
      "react-router-dom",
      "Tailwind Css",
      "Swiper.js",
      "React Inner Image Zoom",
      "SweetAlert2, React Hot Toast, React Toastify",
    ],
  },

  {
    id: "4",
    title: "Forever",
    company: "Modern Frontend Developer",
    date: "2025",
    category: "E-commerce",
    ecommerce: true,
    featured: false,
    liveUrl: "https://react-ecommerce-store-rust.vercel.app/",
    images: [
      "/images/fover1.png",
      "/images/fover2.png",
      "/images/fover3.png",
      "/images/fover4.png",
    ],
    technologies: [
      "React",
      "Vite",
      "react-router-dom",
      "Tailwind Css",
      "React Toastify",
    ],
  },

  {
    id: "5",
    title: "Corporate",
    company: "Education LandingPage",
    date: "2023",
    category: "Landing Pages",
    ecommerce: false,
    featured: true,
    liveUrl: "https://education-landing-page-eight-rho.vercel.app/",
    images: [
      "/images/education1.png",
      "/images/education2.png",
      "/images/education3.png",
      "/images/education4.png",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind Css",
      "React Icons",
      "AOS",
    ],
  },

  {
    id: "6",
    title: "Project Management",
    company: "Rafiq Team",
    date: "2026",
    category: "Dashboards",
    ecommerce: false,
    featured: true,
    liveUrl: "https://project-management-ten-sigma.vercel.app/",
    images: [
      "/images/task1.png",
      "/images/task2.png",
      "/images/task3.png",
      "/images/task4.png",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "Tailwind Css",
      "React Day Picker",
      "React Toastify",
      "Prettier",
      "Eslint",
    ],
  },

  {
    id: "7",
    title: "Admin Dashboard",
    company: "Freelancer Company",
    date: "2026",
    category: "Dashboards",
    ecommerce: false,
    featured: true,
    liveUrl: "https://admin-dashboard-v2-henna.vercel.app/",
    images: [
      "/images/admin1.png",
      "/images/admin2.png",
      "/images/admin3.png",
      "/images/admin4.png",
    ],
    technologies: [
      "TanStack React Query",
      "Axios",
      "Recharts",
      "Lucide React",
      "Tailwind Css",
      "React Hook Form",
      "React Hot Toast",
      "Next.js",
      "React",
      "TypeScript",
      "Eslint",
    ],
  },
];
