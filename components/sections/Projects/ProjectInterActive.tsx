"use client";

import { useState } from "react";

import ProjectsFilter from "./ProjectsFilter";
import ProjectCard from "./ProjectsCard";
import ProjectsPagination from "./ProjectsPagination";

import { Project, ProjectFilter } from "@/data/projects";

type Props = {
  projects: Project[];
};

const ProjectsInteractive = ({ projects }: Props) => {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All Projects");

  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 6;

  // Filter Projects
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All Projects") {
      return true;
    }

    if (activeFilter === "Dashboards") {
      return project.category === "Dashboards";
    }

    if (activeFilter === "Ecommerce") {
      return project.ecommerce === true;
    }

    if (activeFilter === "Featured") {
      return project.featured === true;
    }

    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;

  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

  return (
    <>
      <ProjectsFilter
        activeFilter={activeFilter}
        onFilterChange={(filter) => {
          setActiveFilter(filter);
          setCurrentPage(1);
        }}
      />

      <p className="mt-8 text-center text-sm text-gray-400">
        Showing{" "}
        <span className="font-medium text-cyan-300">
          {filteredProjects.length}
        </span>{" "}
        of <span className="font-medium text-white">{projects.length}</span>{" "}
        Projects
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <ProjectsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
};

export default ProjectsInteractive;
