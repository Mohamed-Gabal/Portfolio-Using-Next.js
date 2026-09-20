export type ProjectFilter =
  | "All Projects"
  | "Dashboards"
  | "Ecommerce"
  | "Featured";

export const projectFilters: ProjectFilter[] = [
  "All Projects",
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
  subtitle: string;
  description: string;
  liveUrl: string;
  images: string[];
  highlights: string[];
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

    subtitle:
      "Modern E-commerce platform with responsive UI and interactive shopping experience.",

    description:
      "A responsive E-commerce platform focused on product discovery, cart management, and a smooth shopping experience across all devices.",

    liveUrl: "https://ziad-shop.vercel.app/",
    images: [
      "/images/ziad1.png",
      "/images/ziad2.png",
      "/images/ziad3.png",
      "/images/ziad4.png",
    ],
    highlights: [
      "Dynamic product catalog with organized product browsing and detailed product views.",
      "Interactive shopping cart with real-time item and quantity management.",
      "Responsive mobile-first interface optimized for different screen sizes.",
      "Smooth page interactions and optimized loading experience.",
      "Dark and light theme support.",
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

    subtitle:
      "Car rental platform with vehicle browsing, booking, and responsive user experience.",

    description:
      "A modern car rental web application designed to help users explore available vehicles and manage their rental experience through a responsive and interactive interface.",

    liveUrl: "https://car-rental-app-green.vercel.app/",

    images: [
      "/images/car-rental-1.png",
      "/images/car-rental-2.png",
      "/images/car-rental-3.png",
      "/images/car-rental-4.png",
    ],

    highlights: [
      "Vehicle browsing and rental-focused user experience.",
      "Responsive interface optimized for desktop, tablet, and mobile devices.",
      "Interactive booking flow for selecting rental details.",
      "Smooth user interactions and modern animated UI.",
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

    subtitle:
      "Modern E-commerce store with interactive product browsing and responsive UI.",

    description:
      "A modern E-commerce experience focused on product discovery, responsive layouts, interactive components, and smooth user interactions.",

    liveUrl: "https://tornmart-ecommerce.vercel.app/",

    images: [
      "/images/tornmart1.png",
      "/images/tornmart2.png",
      "/images/tornmart3.png",
      "/images/tornmart4.png",
    ],

    highlights: [
      "Interactive product browsing and detailed product presentation.",
      "Responsive E-commerce interface across desktop, tablet, and mobile.",
      "Smooth UI interactions and animated content sections.",
      "Optimized loading experience for a faster browsing flow.",
      "Reusable frontend components for consistent UI development.",
    ],

    technologies: [
      "React",
      "react-router-dom",
      "Tailwind Css",
      "Swiper.js",
      " React Inner Image Zoom",
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

    subtitle:
      "Responsive E-commerce storefront with modern product browsing experience.",

    description:
      "An E-commerce storefront focused on clean product presentation, responsive layouts, and an interactive shopping experience.",

    liveUrl: "https://react-ecommerce-store-rust.vercel.app/",

    images: [
      "/images/fover1.png",
      "/images/fover2.png",
      "/images/fover3.png",
      "/images/fover4.png",
    ],

    highlights: [
      "Product catalog with structured product browsing.",
      "Responsive storefront optimized for different devices.",
      "Interactive shopping experience with reusable UI components.",
      "Smooth navigation and frontend interactions.",
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

    subtitle:
      "Animated corporate landing page with responsive sections and modern UI.",

    description:
      "A modern corporate landing page featuring structured content sections, responsive layouts, animated interactions, and a complete marketing-style experience.",

    liveUrl: "https://education-landing-page-eight-rho.vercel.app/",

    images: [
      "/images/education1.png",
      "/images/education2.png",
      "/images/education3.png",
      "/images/education4.png",
    ],

    highlights: [
      "Animated sections and smooth content reveal while scrolling.",
      "Responsive navigation and mobile-friendly layout.",
      "Structured About, Services, Work Process, Portfolio, Blog, and Contact sections.",
      "Interactive visual sections with images and content transitions.",
      "Responsive design optimized across different screen sizes.",
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

    subtitle:
      "Project management dashboard for organizing projects, tasks, epics, and team members.",

    description:
      "A full-featured project and task management system inspired by Jira, Trello, and ClickUp, with authentication, persistent sessions, responsive dashboards, and complete project workflows.",

    liveUrl: "https://project-management-ten-sigma.vercel.app/",

    images: [
      "/images/task1.png",
      "/images/task2.png",
      "/images/task3.png",
      "/images/task4.png",
    ],

    highlights: [
      "Built a complete authentication system (sign-up and login) with forgot-password and reset-password flows.",
      'Implemented "Remember Me" functionality alongside refresh-token handling to keep user sessions persistent and secure.',
      "Sole frontend developer on a full-featured project and task management system (Jira/Trello/ClickUp-inspired), delivering 100% of the UI over a 2-month development cycle.",
      "Responsive dashboard layout with sidebar navigation.",
      "Delivered a fully responsive UI across mobile and desktop screens.",
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

    subtitle:
      "Modern admin dashboard for authentication, analytics, and management workflows.",

    description:
      "A modern administrative dashboard with authentication and management-focused interfaces built around a responsive dashboard experience.",

    liveUrl: "https://admin-dashboard-v2-henna.vercel.app/",

    images: [
      "/images/admin1.png",
      "/images/admin2.png",
      "/images/admin3.png",
      "/images/admin4.png",
    ],

    highlights: [
      "Built a Next.js and TypeScript dashboard application with authentication and roles/permissions",
      "Implemented REST API data fetching and caching with TanStack Query.",
      "Added form validation using React Hook Form and Zod with reusable components.",
      "Implemented dark/light mode and a responsive dashboard UI with a clean, maintainable structure.",
      "Smooth interface interactions and loading experience.",
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
