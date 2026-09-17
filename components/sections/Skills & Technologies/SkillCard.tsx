import { Skill } from "@/data/skills";

type Props = {
  skills: Skill[];
};

const SkillCard = ({ skills }: Props) => {
  return (
    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skills.map((skill) => {
        const Icon = skill.icon; 

        return (
          <article
            key={skill.id}
            className={`group cursor-pointer rounded-2xl border border-white/10 bg-[#11162d]/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#151b36] hover:shadow-xl ${skill.color.glow}`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-transform duration-300 group-hover:scale-110 ${skill.color.icon}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-semibold text-white">{skill.name}</h3>

                <span
                  className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${skill.color.badge}`}
                >
                  {skill.level}
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default SkillCard;
