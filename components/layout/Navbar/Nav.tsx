"use client";

import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { navLinks } from "@/data/navLinks";
import { siteConfig } from "@/config/site.config";
import { useScrollPosition } from "@/hooks/useScrollPosition";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const navBg = useScrollPosition(90);

  return (
    <div
      className={`fixed top-0 w-full z-[10000] h-[12vh] transition-all duration-200 ${
        navBg ? "bg-[#0f142ed9] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <Link
            href="#home"
            className="text-xl hidden sm:block md:text-2xl text-white font-bold"
          >
            {siteConfig.brand}
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* CV Download */}
          
           <a href={siteConfig.resumeUrl}
            download
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </a>

          {/* Burger Menu */}
          <button
            onClick={openNav}
            aria-label="Open menu"
            className="lg:hidden"
          >
            <HiMiniBars3BottomRight className="w-8 h-8 cursor-pointer text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Nav;