
import Link from "next/link";
import { technologies } from "@/data/techMarquee";
import Container from "@/components/layout/container";

const REPEAT = 3;

const TechMarquee = () => {
  const groupItems = Array.from({ length: REPEAT }).flatMap(() => technologies);

  return (
    <Container className="relative overflow-hidden py-5 bg-white/5">
      <div dir="ltr" className="group flex overflow-hidden">
        {[0, 1].map((group) => (
          <div
            key={group}
            aria-hidden={group === 1}
            className="flex min-w-full shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused]"
          >
            {groupItems.map((tech, index) => (
              <Link
                key={`${group}-${tech.name}-${index}`}
                href={tech.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={group === 1 ? -1 : undefined}
                className="flex items-center justify-center w-24 h-16 mx-4 shrink-0 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
                aria-label={`${tech.name} documentation`}
              >
                <tech.icon className="w-10 h-10" style={{ color: tech.color }} />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TechMarquee;