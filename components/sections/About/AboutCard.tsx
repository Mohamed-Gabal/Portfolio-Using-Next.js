import Image from "next/image";
import { Service } from "@/types";

const AboutCard = ({ description, icon, name, tags }: Service) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#11162d]/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[#151b36] hover:shadow-xl hover:shadow-cyan-950/20 sm:p-8 cursor-pointer">
      {/* Hover Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-300 group-hover:bg-cyan-400/10"
      />

      <div className="relative">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10">
          <Image
            src={icon}
            alt=""
            width={60}
            height={60}
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
          {name}
        </h3>

        {/* Description */}
        <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-300/10 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
