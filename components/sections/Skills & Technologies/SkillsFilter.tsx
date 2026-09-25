"use client";

import { useTranslations } from "next-intl";
import { skillCategories, SkillCategory } from "@/data/skills";

type FilterCategory = "all" | SkillCategory;

type Props = {
  activeCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
};

const SkillsFilter = ({
  activeCategory,
  onCategoryChange,
}: Props) => {
  const t = useTranslations("Skills");


  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      <button
        type="button"
        onClick={() => onCategoryChange("all")}
        className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
          activeCategory === "all"
            ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-200 shadow-lg shadow-cyan-950/20"
            : "border-white/10 bg-white/5 text-white hover:border-cyan-300/30 hover:bg-cyan-300/10"
        }`}
      >
        {t("filter.all")}
      </button>

      {skillCategories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
            activeCategory === category
              ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-200 shadow-lg shadow-cyan-950/20"
              : "border-white/10 bg-white/5 text-white hover:border-cyan-300/30 hover:bg-cyan-300/10"
          }`}
        >
          {t(`categories.${category}`)}
        </button>
      ))}
    </div>
  );
};

export default SkillsFilter;
