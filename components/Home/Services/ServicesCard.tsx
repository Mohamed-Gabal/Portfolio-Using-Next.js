
import Image from "next/image";

// Type For ServicesCard
type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServicesCard = ({ description, icon, name }: Props) => {
  return (
    <div className="p-6 bg-blue-950/20  rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      <Image
        src={icon}
        alt={`${name} icon`}
        width={60}
        height={60}
        className="w-12 h-12 sm:w-14 sm:h-14"
      />

      <h1 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-white">
        {name}
      </h1>

      <p className="mt-2 text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};
export default ServicesCard;