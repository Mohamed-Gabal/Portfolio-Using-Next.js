"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

const Hero = () => {
  return (
    <div className="relative min-h-[100svh] flex flex-col items-center justify-center text-white text-center">
      
      <Image
        src="/images/photo.jpeg"
        alt="Mohamed Ali"
        width={100}
        height={100}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-8 border-[#0c0c48aa]"
      />

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 font-bold tracking-wide">
        Creating web products,
        <span className="text-cyan-300 block">
          brands, and experiences.
        </span>
      </h1>

      <h2 className="mt-5 text-base sm:text-lg md:text-xl font-medium flex flex-wrap justify-center">
        Hi! I'm Mohamed Ali - A passionate
        <span className="text-cyan-300 font-bold pl-2">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "React, Next.js, TypeScript",
                "Web Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h2>

      <button className="mt-6 px-8 py-3 sm:px-10 sm:py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 rounded-full text-base sm:text-lg font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
        See my work
        <BsArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
export default Hero;
