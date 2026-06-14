import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

type Props = {
  image: string;
  title: string;
  highlights: string[];
  liveUrl: string;
};

const ProjectFeedbackCard = ({ image, title, highlights, liveUrl }: Props) => {
  return (
    <div className="bg-gray-800 rounded-2xl text-left text-white shadow-lg mx-3 h-full border border-gray-700 flex flex-col overflow-hidden hover:border-cyan-500/50 transition-colors duration-300">
      {/* Screenshot */}
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
          {title}
        </h3>

        <ul className="space-y-2 mb-6 flex-1">
          {highlights.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-300 text-sm md:text-base leading-relaxed"
            >
              <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0 w-4 h-4" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-300 text-sm sm:text-base font-medium hover:underline w-fit"
        >
          View Live Project
          <BsArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
export default ProjectFeedbackCard;