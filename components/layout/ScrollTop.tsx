"use client";

import { FaArrowUp } from "react-icons/fa";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const ScrollTop = () => {
  const isVisible = useScrollPosition(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[10001]">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="bg-blue-950/60 hover:bg-blue-800 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};
export default ScrollTop;