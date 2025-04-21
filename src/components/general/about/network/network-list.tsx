import { Container } from "~/components/common/container";
import { ORGANIZATIONS } from "~/constants/data";
import Image from "next/image";

export const NetworkList = () => {
  return (
    <section className="col-span-12  bg-[#e5edf7]">
      <Container className="py-32 grid gap-7 px-6">
        <h1 className="font-montserrat text-5xl text-primary">
          Craftlore International Network
        </h1>
        <div className="grid grid-cols-2 gap-8">
          {ORGANIZATIONS.map((organization, index) => (
            <div
              className="group col-span-2 grid rounded-lg bg-white p-6 text-gray-900 shadow-sm hover:bg-primary hover:shadow-lg lg:col-span-1"
              key={index}
            >
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-100 p-2">
                  <Image
                    src="/logo/logo.png"
                    alt={organization.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h2 className="font-montserrat text-xl font-bold text-gray-900 group-hover:text-white">
                  {organization.name}
                </h2>
              </div>
              <p className="mt-4 group-hover:text-white">
                {organization.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
