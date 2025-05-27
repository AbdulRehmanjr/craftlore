import { Counter } from "~/components/animations/counter";
import { cn } from "~/lib/utils";

type CounterProps = {
  className?: string;
};

const counter = [
  { name: "Platform Visiters", value: 108562 },
  { name: "Artisans", value: 2000 },
  { name: "Craft Associations", value: 18 },
  { name: "Craft Insitutions", value: 5 },
  { name: "Donor", value: 4 },
];

export const CounterInfo = ({ className }: CounterProps) => {
  return (
    <div className={cn("grid gap-4 sm:gap-6 md:gap-8 lg:gap-10", className)}>
      <h6 className="text-center font-montserrat text-lg sm:text-xl md:text-2xl text-secondary">
        Defend Authenticity, Empower Artisans: Join the Movement to Transform
        Kashmir&apos;s Craft Future
      </h6>
      <h6 className="text-center font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary">
        Join our network for a better future of our Artisans & Craft Industry
      </h6>
      <Counter counterValues={counter} />
    </div>
  );
};