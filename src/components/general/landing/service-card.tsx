import Image from "next/image";
import Link from "next/link";
import { Container } from "~/components/common/container";
import { SERVICES } from "~/constants/data";

export const ServiceCard = () => {
  return (
    <Container className="relative -mt-6 sm:-mt-12 md:-mt-16 lg:-mt-24">
      <div className="grid grid-cols-1 gap-3 sm:gap-4 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {SERVICES.map((service, index) => (
          <Link
            href={service.href}
            className="group flex flex-col items-center gap-2 sm:gap-3 rounded-lg border bg-white p-3 sm:p-4 transition-all duration-300 hover:bg-secondary hover:shadow-2xl"
            key={index}
          >
            <Image
              className="h-8 w-8 sm:h-9 sm:w-9 transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(1)]"
              src={service.icon}
              alt={service.title}
              width={36}
              height={36}
            />
            <h3 className="text-center text-xs font-extrabold text-gray-900 group-hover:text-white sm:text-sm md:text-base lg:text-lg">
              {service.title}
            </h3>
            <p className="text-center text-xs text-gray-900 group-hover:text-white sm:text-sm">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
};