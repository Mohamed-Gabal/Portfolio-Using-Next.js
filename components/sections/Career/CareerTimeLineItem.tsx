import { Career } from "@/data/career";

type Props = {
  career: Career;
  index: number;
};

const CareerTimeLineItem = ({ career, index }: Props) => {
  const Icon = career.icon;

  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
      {/* Timeline Point */}
      <div className="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 md:flex">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-[#0f142e] text-cyan-300 shadow-lg shadow-cyan-950/30">
          <Icon className="text-xl" />
        </div>
      </div>

      {/* Content */}
      <div
        className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-cyan-950/20 ${
          isEven ? "md:col-start-1 md:text-right" : "md:col-start-2"
        }`}
      >
        <div
          className={`flex flex-wrap items-center gap-2 text-sm text-cyan-300 ${
            isEven ? "md:justify-end" : ""
          }`}
        >
          <span>{career.subtitle}</span>
          <span className="text-gray-600">•</span>
          <span>{career.date}</span>
        </div>

        <h3 className="mt-2 text-xl font-semibold text-white">
          {career.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          {career.description}
        </p>
      </div>
    </div>
  );
};

export default CareerTimeLineItem;
