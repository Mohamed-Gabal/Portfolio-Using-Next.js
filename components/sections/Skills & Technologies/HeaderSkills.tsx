"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/container";
import SkillsFilter from "./SkillsFilter";
import SkillCard from "./SkillCard";

import { SkillCategory, SkillsData } from "@/data/skills";
import FeatureHighlights from "./FeatureHighlights";

type FilterCategory = "all" | SkillCategory;

const HeaderSkills = () => {
  const t = useTranslations("Skills");


  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>("all");

  const filterSkills =
    activeCategory === "all"
      ? SkillsData
      : SkillsData.filter((skill) => skill.category === activeCategory);
  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
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

        <SkillsFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <SkillCard skills={filterSkills} />

        {/* FeatureHighlights */}
        <FeatureHighlights />
      </Container>
    </section>
  );
};

export default HeaderSkills;
