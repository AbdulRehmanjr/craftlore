import { Container } from "~/components/common/container";
import { SPONSORS } from "~/constants/data";
import Image from "next/image";

export const SponsorList = () => {
  return (
    <section className="col-span-12 py-12 bg-[#e5edf7]">
      <Container className="grid gap-7 rounded-md bg-white px-6 py-8 shadow-md">
        <h1 className="font-montserrat text-5xl text-primary">
          Craftlore Sponsors
        </h1>
        <div className="grid grid-cols-2 gap-8">
          {SPONSORS.map((sponsor, index) => (
            <div
              className="group col-span-2 grid rounded-lg bg-primary p-6 text-white shadow-sm hover:shadow-lg lg:col-span-1"
              key={index}
            >
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-full bg-white/20 p-2">
                  <Image
                    src="/logo/logo.png"
                    alt={sponsor.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h2 className="font-montserrat text-xl font-bold text-white">
                  {sponsor.name}
                </h2>
              </div>
              <p className="mt-4">{sponsor.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
