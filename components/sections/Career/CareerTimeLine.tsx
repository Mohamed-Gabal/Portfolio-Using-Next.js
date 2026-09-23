import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/container";
import CareerTimeLineItem from "./CareerTimeLineItem";

import { careers } from "@/data/career";

const CareerTimeLine = () => {
  return (
    <section id="experience" className="pt-16 pb-16">
      <Container>
        <Badge
          badge="📈 Timeline & Growth"
          title={
            <>
              Professional <span className="text-cyan-300">Journey</span>
            </>
          }
          description="A timeline of my professional experience, freelance path, and continuous skill expansion."
        />

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent md:block" />

          <div className="space-y-10 md:space-y-16">
            {careers.map((career, index) => (
              <CareerTimeLineItem
                key={career.id}
                career={career}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CareerTimeLine;
