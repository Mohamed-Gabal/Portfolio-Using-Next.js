import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/container";
import ProjectsInteractive from "./ProjectInterActive";

import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-16">
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

        <ProjectsInteractive projects={projects}/>
      </Container>
    </section>
  );
};

export default Projects;
