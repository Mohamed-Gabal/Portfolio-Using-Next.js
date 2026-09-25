import { useTranslations } from "next-intl";

import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/container";
import ProjectsInteractive from "./ProjectInterActive";

import { projects } from "@/data/projects";

const Projects = () => {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="pt-16 pb-16">
      <Container>
        <Badge
          badge={t("badge")}
          title={
            <>
              {t("title")} {" "} <span className="text-cyan-300">{t("titleHighlight")}</span>
            </>
          }
          description={t("description")}
        />

        <ProjectsInteractive projects={projects}/>
      </Container>
    </section>
  );
};

export default Projects;
