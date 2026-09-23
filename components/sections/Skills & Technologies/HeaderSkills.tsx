"use client";

import { useState } from "react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/container";
import SkillsFilter from "./SkillsFilter";
import SkillCard from "./SkillCard";

import { SkillCategory, SkillsData } from "@/data/skills";
import FeatureHighlights from "./FeatureHighlights";

type FilterCategory = "All Skills" | SkillCategory;

const HeaderSkills = () => {
  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>("All Skills");

  const filterSkills =
    activeCategory === "All Skills"
      ? SkillsData
      : SkillsData.filter((skill) => skill.category === activeCategory);
  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <Container>
        <Badge
          badge="🛠️ My Technical Toolbox"
          title={
            <>
              Skills & <span className="text-cyan-300">Technologies</span>
            </>
          }
          description="A curated collection of tools, frameworks, and programming languages I use to build premium digital products."
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
