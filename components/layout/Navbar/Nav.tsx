import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { siteConfig } from "@/config/site.config";
import LanguageSwitcher from "./LanguageSwitcher";

const Nav = () => {
  return (
    <header className="relative z-[100] h-[10vh] bg-[#0f142ed9] backdrop-blur-md shadow-md">
      <div className="w-full h-full px-6 sm:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <FaCode className="w-6 h-6 text-blue-500" />
          <span className="hidden md:block text-lg sm:text-xl font-semibold text-white">
            {siteConfig.brand}
          </span>
        </Link>

        {/* Language Switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Nav;
