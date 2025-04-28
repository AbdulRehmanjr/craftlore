import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={cn("mx-4 sm:mx-6 lg:mx-auto lg:max-w-[90%] xl:max-w-7xl", className)}>
      {children}
    </div>
  );
};