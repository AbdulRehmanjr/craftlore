import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

type ChartProps = {
  children: ReactNode;
  className?: string;
};

export const ChartContainer: React.FC<ChartProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={cn("aspect-square w-[19rem] md:aspect-video md:w-[45rem] lg:w-[55rem] xl:w-[80rem] 2xl:w-[90rem]", className)}>
      {children}
    </div>
  );
};
