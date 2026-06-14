import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Admin Dashboard",
    subtitle: "React, Next.js, TailwindCSS — Analytics & Management",
    liveUrl: "https://admin-dashboard-v2-henna.vercel.app/login",
    images: [
      "/images/admin-dashboard-1.png",
      "/images/admin-dashboard-2.png",
      "/images/admin-dashboard-3.png",
      "/images/admin-dashboard-4.png",
    ],
    highlights: [
      "Built with React, Next.js & TypeScript for a fully type-safe codebase",
      "Interactive analytics with dynamic charts for revenue and growth tracking",
      "Role-based access control with full CRUD for users and subscriptions",
    ],
  },
  {
    id: 2,
    title: "TronMart E-Commerce",
    subtitle: "Next.js, TailwindCSS — Full Shopping Experience",
    liveUrl: "https://tornmart-ecommerce.vercel.app/",
    images: [
      "/images/tronmart-1.png",
      "/images/tronmart-2.png",
      "/images/tronmart-3.png",
      "/images/tronmart-4.png",
    ],
    highlights: [
      "Complete shopping flow: product browsing, cart, and multi-step checkout",
      "Dynamic flash sales and special offers with live pricing",
      "Integrated blog system with categorized posts and search",
    ],
  },
  {
    id: 3,
    title: "Car Rental App",
    subtitle: "React, Next.js, TailwindCSS — Booking System",
    liveUrl: "https://car-rental-app-green.vercel.app",
    images: [
      "/images/car-rental-1.png",
      "/images/car-rental-2.png",
      "/images/car-rental-3.png",
      "/images/car-rental-4.png",
    ],
    highlights: [
      "Date-range picker for pickup and return with real-time availability",
      "Customer reviews carousel with star ratings",
      "User booking dashboard and admin panel to manage car listings",
    ],
  },
];