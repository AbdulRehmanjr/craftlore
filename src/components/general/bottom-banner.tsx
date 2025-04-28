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
        "relative mt-12 sm:mt-16 md:mt-24 lg:mt-32",
        "rounded-t-xl border-b-4 sm:border-b-6 md:border-b-8 border-secondary bg-primary",
        "flex flex-col items-center justify-center gap-4 px-4 py-6 text-center sm:gap-5 sm:px-6 sm:py-8 md:gap-6 md:py-10 lg:py-12",
        "lg:flex-row lg:gap-6 lg:px-8 xl:gap-8",
        className
      )}
    >
      <FaUserPlus 
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white transition-transform hover:scale-110" 
        aria-hidden="true"
      />
      <h2 className="font-opensans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white">
        Stay Connected to Craftlore-Kashmir Craft Repository
      </h2>
      <Button 
        variant="secondary"
        className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] text-xs sm:text-sm md:text-base transform transition-all duration-300 hover:scale-105 mt-2 lg:mt-0"
      >
        SUBSCRIBE TODAY
      </Button>
    </div>
  );
};