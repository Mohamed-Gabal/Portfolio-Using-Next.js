import { useTranslations } from "next-intl";

import { services } from "@/data/about";

import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/container";

import AboutCard from "./AboutCard";
import ProjectCta from "@/components/ui/ProjectCta";

const About = () => {
  const t = useTranslations("About");

  const tagsData = [
    {
      id: "1",
      text: t("tags.available"),
      bgColor: "#e6fcf5",
      textColor: "#0ca678",
    },
    {
      id: "2",
      text: t("tags.delivery"),
      bgColor: "#e7f5ff",
      textColor: "#1c7ed6",
    },
    {
      id: "3",
      text: t("tags.consultation"),
      bgColor: "#f3f0ff",
      textColor: "#7048e8",
    },
  ];

  return (
    <section id="about">
      <Container className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        {/* Section Header */}
        <Badge
          badge={t("badge")}
          title={
            <>
              {t("title")}{" "}
              <span className="text-cyan-300">{t("titleHighlight")}</span>
            </>
          }
          description={t("description")}
        />

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <AboutCard
              id={service.id}
              key={service.id}
              icon={service.icon}
              name={t(`services.${service.name}.name`)}
              description={t(`services.${service.name}.description`)}
              tags={service.tags}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center mt-20">
          <ProjectCta title={t("ctaTitle")} tags={tagsData} />
        </div>
      </Container>
    </section>
  );
};

export default About;
