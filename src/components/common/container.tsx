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
    <div 
      className={cn(
        "w-full max-w-full px-4 mx-auto", 
        "sm:max-w-[540px]",
        "md:max-w-[720px]",
        "lg:max-w-[960px]",
        "xl:max-w-[1140px]",
        "2xl:max-w-[1320px]",
        className
      )}
    >
      {children}
    </div>
  );
};