import { Container } from "~/components/common/container";
import { ARCHITECTURE } from "~/constants/data";

export const ArchitectureList = () => {
  return (
    <section className="col-span-12 bg-[#e5edf7]">
      <Container className="grid py-12 sm:py-16 md:py-24 lg:py-32 gap-4 sm:gap-5 md:gap-7 px-4 sm:px-5 md:px-6">
        <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
          Craftlore Architecture
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {ARCHITECTURE.map((architecture, index) => (
            <div
              className="group rounded-lg bg-white p-3 sm:p-4 md:p-6 shadow-sm transition-all duration-300 hover:bg-primary hover:shadow-lg"
              key={index}
            >
              <h2 className="mb-2 sm:mb-3 md:mb-4 font-montserrat text-lg sm:text-xl font-bold group-hover:text-white">
                {architecture.title}
              </h2>

              <div className="mb-2 sm:mb-3 md:mb-4 font-opensans text-xs sm:text-sm group-hover:text-white">
                <h3 className="font-semibold">• Definition:</h3>
                <p className="my-1 sm:my-2 text-gray-700 group-hover:text-white">
                  {architecture.defination}{" "}
                </p>
              </div>
              <div className="font-opensans text-xs sm:text-sm group-hover:text-white">
                <h3 className="font-semibold">• Key Features:</h3>
                <p className="my-1 sm:my-2 text-gray-700 group-hover:text-white">
                  {architecture.features}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};