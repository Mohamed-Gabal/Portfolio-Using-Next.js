"use client";

import { useState } from "react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/container";
import ProjectsFilter from "./ProjectsFilter";
import ProjectCard from "./ProjectsCard";
import ProjectsPagination from "./ProjectsPagination";

import { ProjectFilter, projects } from "@/data/projects";

const Projects = () => {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All Projects");

  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 6;

  // Filter Projects
  const filterProjects = projects.filter((project) => {
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
  const totalPages = Math.ceil(filterProjects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;

  const paginatedProjects = filterProjects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

  return (
    <section className="pt-16 pb-16">
      <Container>
        <Badge
          badge="💼 Selected Work"
          title={
            <>
              Recent <span className="text-cyan-300">Projects</span>
            </>
          }
          description="Discover a selection of recent freelance projects, case studies, and modern web applications built using advanced frontend tech."
        />

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
            {filterProjects.length}
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
      </Container>
    </section>
  );
};

export default Projects;
