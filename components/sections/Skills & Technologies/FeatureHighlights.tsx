import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { PiWrenchLight } from "react-icons/pi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { HiOutlineDeviceMobile } from "react-icons/hi";

type Feature = {
  icon: React.ReactNode;
  label: string;
};

const features: Feature[] = [
  {
    icon: <HiOutlineCubeTransparent className="h-5 w-5 text-sky-400" />,
    label: "Component Design",
  },
  {
    icon: <PiWrenchLight className="h-5 w-5 text-pink-400" />,
    label: "UI/UX Focus",
  },
  {
    icon: <HiOutlineLightningBolt className="h-5 w-5 text-yellow-400" />,
    label: "Performance",
  },
  {
    icon: <HiOutlineDeviceMobile className="h-5 w-5 text-emerald-400" />,
    label: "Responsive",
  },
];

const FeatureHighlights = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-20 items-center justify-center rounded-2xl bg-[#11162d]/70 border-white/10 px-6 py-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          {feature.icon}
          <span className="text-sm text-slate-200 sm:text-base">
            {feature.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureHighlights;