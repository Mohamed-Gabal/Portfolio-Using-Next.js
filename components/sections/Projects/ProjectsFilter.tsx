"use client";

import { ProjectFilter, projectFilters } from "@/data/projects";

type Props = {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
};

const ProjectsFilter = ({ activeFilter, onFilterChange }: Props) => {
  return (
    <section className="mt-10 flex flex-wrap justify-center gap-3">
      {projectFilters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
            activeFilter === filter
              ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-200 shadow-lg shadow-cyan-950/20"
              : "border-white/10 bg-white/5 text-white hover:border-cyan-300/30 hover:bg-cyan-300/10"
          }`}
        >
          {filter}
        </button>
      ))}
    </section>
  );
};

export default ProjectsFilter;
