"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";
import { useState } from "react";

import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const t = useTranslations("Projects");

  const [currentImage, setCurrentImage] = useState(0);

  const totalImages = project.images.length;

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-cyan-950/20">
      {/* Project Link */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("actions.viewProject", {
          title: project.title,
        })}
        className="absolute inset-0 z-10 cursor-pointer rounded-2xl"
      />

      {/* Project Image */}
      <div className="relative aspect-video shrink-0 overflow-hidden bg-white/5">
        <Image
          src={project.images[currentImage]}
          alt={t("imageAlt", {
            title: project.title,
            number: currentImage + 1,
          })}
          priority={currentImage === 0}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Navigation Arrows */}
        {totalImages > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label={t("actions.previousImage")}
              className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-100 backdrop-blur-sm transition hover:bg-black/70 md:opacity-0 md:group-hover:opacity-100"
            >
              <FiChevronLeft className="text-lg" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label={t("actions.nextImage")}
              className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-100 backdrop-blur-sm transition hover:bg-black/70 md:opacity-0 md:group-hover:opacity-100"
            >
              <FiChevronRight className="text-lg" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-3 right-3 z-20 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {currentImage + 1} / {totalImages}
            </div>
          </>
        )}
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Title */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>

          <p className="shrink-0 text-sm text-gray-400">
            {project.company} • {project.date}
          </p>
        </div>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-gray-400">
          {t(`projects.${project.id}.description`)}
        </p>

        {/* Highlights */}
        <div className="mt-2">
          <h4 className="text-sm font-semibold text-white">
            {t("labels.keyFeatures")}
          </h4>

          <ul className="mt-2 space-y-1.5">
            {t.raw(`projects.${project.id}.highlights`)
              .slice(0, 2)
              .map((highlight: string) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm leading-5 text-gray-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{highlight}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-2">
          <h4 className="text-sm font-semibold text-white">{t("labels.technologies")}</h4>

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
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
            {t("actions.liveDemo")}
            <FiExternalLink className="text-base" />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
