import Link from "next/link";
import { technologies } from "@/data/techMarquee";
import Container from "@/components/layout/container";

const TechMarquee = () => {
  const marqueeItems = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
  ];
  return (
    <Container className="relative overflow-hidden py-5 bg-white/5">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {marqueeItems.map((tech, index) => (
          <Link
            key={`${tech.name}-${index}`}
            href={tech.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-24 h-16 mx-4 shrink-0 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
            aria-label={`${tech.name} documentation`}
          >
            <tech.icon className="w-10 h-10" style={{ color: tech.color }} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default TechMarquee;
