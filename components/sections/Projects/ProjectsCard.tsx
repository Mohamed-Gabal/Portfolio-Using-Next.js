"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const totalImages = project.images.length;

  const goToPrevious = () => {
    setCurrentImage((prev) =>
      prev === 0 ? totalImages - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentImage((prev) =>
      prev === totalImages - 1 ? 0 : prev + 1,
    );
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.05]">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-white/5">
        <Image
          src={project.images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          fill
          priority={currentImage === 0}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Navigation Arrows */}
        {totalImages > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous project image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-100 backdrop-blur-sm transition hover:bg-black/70 md:opacity-0 md:group-hover:opacity-100"
            >
              <FiChevronLeft className="text-lg" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next project image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-100 backdrop-blur-sm transition hover:bg-black/70 md:opacity-0 md:group-hover:opacity-100"
            >
              <FiChevronRight className="text-lg" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {currentImage + 1} / {totalImages}
            </div>
          </>
        )}
      </div>

      {/* Project Content */}
      <div className="p-5">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="text-sm text-gray-400">
            {project.company} • {project.date}
          </p>
        </div>

        {/* Description */}
        <p className="mt-2 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mt-2">
          <h4 className="text-sm font-semibold text-white">
            Key Features
          </h4>

          <ul className="mt-2 space-y-2">
            {project.highlights.slice(0, 3).map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2 text-sm leading-6 text-gray-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-2">
          <h4 className="text-sm font-semibold text-white">
            Technologies
          </h4>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
              >
                {technology}
              </span>
            ))}

            {project.technologies.length > 5 && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Live Demo */}
        <div className="mt-6">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
          >
            Live Demo
            <FiExternalLink className="text-base" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;