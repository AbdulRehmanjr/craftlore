import { FaUserPlus } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface BottomBannerProps {
  className?: string;
}

export const BottomBanner = ({ className }: BottomBannerProps) => {
  return (
    <div 
      className={cn(
        "relative mt-24 sm:mt-28 md:mt-32 lg:mt-36",
        "rounded-t-xl border-b-8 border-secondary bg-primary",
        "flex flex-col items-center justify-center gap-4 px-4 py-8 text-center sm:gap-6 sm:px-6 sm:py-10 md:py-12",
        "lg:flex-row lg:gap-8 lg:px-8 xl:gap-12",
        className
      )}
    >
      <FaUserPlus 
        className="text-2xl text-white transition-transform hover:scale-110 sm:text-3xl md:text-4xl lg:text-5xl" 
        aria-hidden="true"
      />
      <h2 className="font-opensans text-base font-medium text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Stay Connected to Craftlore-Kashmir Craft Repository
      </h2>
      <Button 
        variant="secondary"
        className="min-w-[160px] transform transition-all duration-300 hover:scale-105"
      >
        SUBSCRIBE TODAY
      </Button>
    </div>
  );
};
