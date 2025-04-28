import Image from "next/image";
import Link from "next/link";
import { Container } from "~/components/common/container";
import { REGISTER } from "~/constants/data";

export const RegisterCard = () => {
  return (
    <section className="relative w-full bg-[#e5edf7] pb-24 pt-12 sm:pb-32 sm:pt-16 md:pb-48 md:pt-24 lg:pb-64 lg:pt-32">
      <Container className="relative grid w-full gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-12 lg:gap-10">
          <article className="space-y-4 sm:space-y-6 lg:col-span-8">
            <div className="h-0.5 w-20 bg-secondary sm:w-24" />
            <h4 className="font-montserrat text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl">
              Unlock Everything Our Platform Offers-At No Cost to You
            </h4>
            <h4 className="font-montserrat text-lg font-bold text-secondary sm:text-xl md:text-2xl lg:text-3xl">
              A wealth of tools and insights, completely free.
            </h4>
            <p className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl">
              Our platform provides a comprehensive suite of tools designed to
              offer transparency, ethical evaluation, and deeper insights into
              the craftsmanship behind every piece. From verifying origins
              through <b>Geographical Indications (GI)</b> to tracking each
              product&apos;s journey with blockchain, we ensure every craft you
              encounter reflects true heritage and integrity. With services
              ranging from price valuation and carbon footprint assessment to
              empowering women artisans and protecting vulnerable crafts,
              Craftlore is your trusted source for everything related to
              Kashmir&apos;s rich craft tradition.
            </p>
          </article>

          <div className="relative lg:col-span-4">
            <div className="relative h-64 w-64 md:h-96 md:w-96 lg:h-[40rem] lg:w-[40rem]">
              <Link href="#" className="block h-full w-full">
                <Image
                  src="/images/register.png"
                  alt="Register for Craftlore platform"
                  fill
                  className="object-cover"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {REGISTER.map((register, index) => (
            <Link
              href={register.link}
              key={index}
              className="group relative flex flex-col gap-3 rounded-lg border bg-white p-4 transition-all duration-300 hover:bg-primary hover:shadow-2xl sm:gap-4 sm:p-5 md:p-6"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                  <Image
                    className="transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(1)]"
                    src={register.icon}
                    alt={`${register.title} icon`}
                    fill
                    sizes="(max-width: 640px) 3rem, 3.5rem"
                  />
                </div>
                <h3 className="font-montserrat text-base font-bold text-gray-900 group-hover:text-white sm:text-lg md:text-xl">
                  {register.title}
                </h3>
                <p className="text-xs text-gray-900 group-hover:text-white sm:text-sm md:text-base">
                  {register.description}
                </p>
                <span className="mt-1 text-xs text-gray-900 underline underline-offset-4 group-hover:text-secondary sm:mt-2 sm:text-sm">
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
