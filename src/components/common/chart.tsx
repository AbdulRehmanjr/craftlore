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
    <div className={cn("w-full max-w-[19rem] sm:max-w-[30rem] md:max-w-[45rem] lg:max-w-[55rem] xl:max-w-[80rem] 2xl:max-w-[90rem] aspect-square sm:aspect-video", className)}>
      {children}
    </div>
  );
};
