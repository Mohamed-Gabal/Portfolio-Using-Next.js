"use client";

import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { navLinks } from "@/data/navLinks";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNavbar = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[10002] bg-black opacity-70 w-full h-screen`}
      />

      {/* Nav links */}
      <div
        className={`text-white ${navOpen} fixed top-0 right-0 justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[10005]`}
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="text-white w-fit text-xl ml-10 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close Icon */}
        <button
          onClick={closeNav}
          aria-label="Close menu"
          className="absolute top-[0.7rem] right-[1.4rem]"
        >
          <CgClose className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};
export default MobileNavbar;