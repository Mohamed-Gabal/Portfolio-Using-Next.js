import Image from "next/image";
import { Service } from "@/types";

const ServicesCard = ({ description, icon, name }: Service) => {
  return (
    <div className="p-6 bg-blue-950/20 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Image
        src={icon}
        alt={`${name} icon`}
        width={60}
        height={60}
        className="w-12 h-12 sm:w-14 sm:h-14"
      />
      <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-white">
        {name}
      </h3>
      <p className="mt-2 text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};
export default ServicesCard;