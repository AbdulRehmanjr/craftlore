'use client'
import { FaUserPlus } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import { useAuthStore } from "~/hooks/use-register-dialog";
import { cn } from "~/lib/utils";

interface BottomBannerProps {
  className?: string;
}

export const BottomBanner = ({ className }: BottomBannerProps) => {

  const {setOpen} = useAuthStore()
  return (
    <div
      className={cn(
        "relative mt-12 sm:mt-16 md:mt-24 lg:mt-32",
        "sm:border-b-6 rounded-t-xl border-b-4 border-secondary bg-primary md:border-b-8",
        "flex flex-col items-center justify-center gap-4 px-4 py-6 text-center sm:gap-5 sm:px-6 sm:py-8 md:gap-6 md:py-10 lg:py-12",
        "lg:flex-row lg:gap-6 lg:px-8 xl:gap-8",
        className,
      )}
    >
      <FaUserPlus
        className="text-xl text-white transition-transform hover:scale-110 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        aria-hidden="true"
      />
      <h2 className="font-opensans text-sm font-medium text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        Stay Connected to Craftlore-Kashmir Craft Repository
      </h2>
      <Button
        type="button"
        variant="secondary"
        className="mt-2 min-w-[120px] transform text-xs transition-all duration-300 hover:scale-105 sm:min-w-[140px] sm:text-sm md:min-w-[160px] md:text-base lg:mt-0"
        onClick={() => setOpen(true)}
      >
        SUBSCRIBE TODAY
      </Button>
    </div>
  );
};
