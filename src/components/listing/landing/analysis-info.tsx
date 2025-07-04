import { FaUserPlus } from "react-icons/fa6";
import { Button } from "~/components/ui/button";

export const AnalysisInfo = () => {
  return (
    <div className="bg-[#e5edf7] pt-12 md:pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 md:gap-16 lg:gap-20">
        <header className="space-y-4 text-center">
          <h2 className="font-opensans text-xl font-bold text-secondary sm:text-2xl">
            Defend Authenticity, Empower Artisans: Join the Movement to
            Transform Kashmir&apos;s Craft Future
          </h2>
          <h3 className="font-montserrat text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
            Join our network for a better future of our Artisans & Craft
            Industry
          </h3>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <article className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-md sm:p-6">
            <p className="font-montserrat text-xl font-bold text-secondary sm:text-2xl">
              +22000
            </p>
            <p className="font-montserrat text-lg text-primary sm:text-xl">
              Artisans
            </p>
          </article>

          <article className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-md sm:p-6">
            <p className="font-montserrat text-xl font-bold text-secondary sm:text-2xl">
              +18
            </p>
            <p className="font-montserrat text-lg text-primary sm:text-xl">
              Craft Associations
            </p>
          </article>

          <article className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-md sm:p-6">
            <p className="font-montserrat text-xl font-bold text-secondary sm:text-2xl">
              +5
            </p>
            <p className="font-montserrat text-lg text-primary sm:text-xl">
              Craft Institutions
            </p>
          </article>

          <article className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-md sm:p-6">
            <p className="font-montserrat text-xl font-bold text-secondary sm:text-2xl">
              +114
            </p>
            <p className="font-montserrat text-lg text-primary sm:text-xl">
              Craft Businesses
            </p>
          </article>
        </div>

        <div className="relative rounded-t-xl bg-primary text-white">
          {/* Content section */}
          <div className="flex flex-col items-center justify-center gap-4 p-6 sm:gap-6 sm:p-8 lg:flex-row lg:justify-between">
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <FaUserPlus className="text-2xl font-bold sm:text-3xl lg:text-4xl" />
              <p className="text-center text-lg sm:text-xl lg:text-left">
                Stay Connected to Craftlore-Kashmir Craft Repository
              </p>
            </div>
            <Button
              variant="secondary"
              className="w-full px-6 py-2 transition-all duration-200 hover:scale-105 sm:px-8 lg:w-auto"
            >
              SUBSCRIBE TODAY
            </Button>
          </div>
          
          {/* Orange border that directly touches the bottom */}
          <div className="h-2 w-full bg-secondary"/>
        </div>
      </div>
    </div>
  );
}