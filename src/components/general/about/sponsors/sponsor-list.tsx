import { Container } from "~/components/common/container";
import { SPONSORS } from "~/constants/data";
import Image from "next/image";

export const SponsorList = () => {
  return (
    <section className="col-span-12 py-6 sm:py-8 md:py-12 bg-[#e5edf7]">
      <Container className="grid gap-4 sm:gap-5 md:gap-7 rounded-md bg-white px-4 sm:px-5 md:px-6 py-5 sm:py-6 md:py-8 shadow-md">
        <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
          Craftlore Sponsors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {SPONSORS.map((sponsor, index) => (
            <div
              className="group grid rounded-lg bg-primary p-3 sm:p-4 md:p-6 text-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
              key={index}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 overflow-hidden rounded-full bg-white/20 p-1 sm:p-2">
                  <Image
                    src="/logo/logo.png"
                    alt={sponsor.name}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                  />
                </div>
                <h2 className="font-montserrat text-lg sm:text-xl font-bold text-white">
                  {sponsor.name}
                </h2>
              </div>
              <p className="mt-3 md:mt-4 text-sm sm:text-base">{sponsor.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};