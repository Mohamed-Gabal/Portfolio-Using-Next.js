"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { BsChevronDown } from "react-icons/bs";
import { siteConfig } from "@/config/site.config";

const HeroPage = () => {
  return (
    <section className="relative min-h-[calc(100svh-10vh)] overflow-hidden">
      <div className="w-full max-w-[1470px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-6 py-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl"
          >
            <p className="text-lg sm:text-xl">Hi, I,m</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-wide mt-5">
              Mohamed Ali
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-cyan-300 font-extrabold mt-5">
              Frontend Developer
            </h2>

            <p className="text-base sm:text-lg mt-6 leading-relaxed">
              I craft highly interactive, blazing fast, and stunningly designed
              web interfaces that elevate brand identities and delight users.
            </p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
            >
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                className="px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 bg-blue-800 hover:scale-105 focus:outline-none focus:ring-2 transition-all duration-300"
              >
                View My CV
              </Link>

              <Link
                href={siteConfig.social.linkedIn}
                target="_blank"
                className="px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 bg-blue-800 hover:scale-105 focus:outline-none focus:ring-2 transition-all duration-300"
              >
                LinkedIn Profile
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
            >
              <Link
                href="#projects"
                className="mt-4 px-6 py-3 md:px-8 rounded-full font-medium flex items-center justify-center gap-2 bg-blue-800 hover:scale-105 focus:outline-none focus:ring-2 transition-all duration-300"
              >
                Explore My Work
                <BsChevronDown className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative flex items-center justify-center w-50 h-50 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Outer Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border"
            />

            {/* Inner Ring */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-6 rounded-full border"
            />

            {/* Floating Dot 1 */}
            <motion.span
              animate={{
                y: [0, -15, 0, 10, 0],
                x: [0, 5, 0, -5, 0],
                opacity: [0.5, 1, 0.7, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-2 right-6 w-4 h-4 rounded-full bg-purple-500"
            />

            {/* Floating Dot 2 */}
            <motion.span
              animate={{
                y: [0, 10, 0, -12, 0],
                x: [0, -8, 0, 6, 0],
                opacity: [0.4, 1, 0.6, 1, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-2 -left-4 w-3 h-3 rounded-full bg-blue-500"
            />

            {/* Floating Dot 3 */}
            <motion.span
              animate={{
                y: [0, -10, 0, 8, 0],
                opacity: [0.3, 1, 0.5, 1, 0.3],
                scale: [1, 1.2, 1, 0.9, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-1/2 -right-5 w-3 h-3 rounded-full bg-cyan-400"
            />

            {/*  Profile Image */}
            <motion.div
              animate={{
                y: [0, -12, 0, 12, 0],
              }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/photo.jpeg"
                alt="Mohamed Ali - Frontend Developer"
                width={320}
                height={320}
                priority
                className="w-30 h-30 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
