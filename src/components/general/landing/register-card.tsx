import Image from "next/image";
import Link from "next/link";
import { Container } from "~/components/common/container";
import { REGISTER } from "~/constants/data";

export const RegisterCard = () => {
  return (
    <section className="bg-[#e5edf7] py-16 sm:py-32 md:py-40">
      <Container className="grid gap-8 sm:gap-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <article className="space-y-6 lg:col-span-8">
            <div className="h-0.5 w-24 bg-secondary" />
            <h4 className="font-montserrat text-2xl font-extrabold sm:text-3xl md:text-4xl">
              Unlock Everything Our Platform Offers-At No Cost to You
            </h4>
            <h4 className="font-montserrat text-2xl font-bold text-secondary sm:text-3xl md:text-4xl">
              A wealth of tools and insights, completely free.
            </h4>
            <p className="text-base leading-relaxed sm:text-lg md:text-xl">
              Our platform provides a comprehensive suite of tools designed to
              offer transparency, ethical evaluation, and deeper insights into the
              craftsmanship behind every piece. From verifying origins through{" "}
              <b>Geographical Indications (GI)</b> to tracking each product&apos;s
              journey with blockchain, we ensure every craft you encounter
              reflects true heritage and integrity. With services ranging from
              price valuation and carbon footprint assessment to empowering women
              artisans and protecting vulnerable crafts, Craftlore is your trusted
              source for everything related to Kashmir&apos;s rich craft
              tradition.
            </p>
          </article>

          <div className="relative aspect-[4/5] lg:col-span-4">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REGISTER.map((register, index) => (
            <Link
              href={register.link}
              key={index}
              className="group relative flex flex-col gap-4 rounded-lg border bg-white p-6 transition-all duration-300 hover:bg-primary hover:shadow-2xl"
            >
              <div className="flex flex-col gap-4">
                <Image
                  className="h-14 w-14 transition-all duration-300 group-hover:[filter:brightness(0)_saturate(100%)_invert(1)]"
                  src={register.icon}
                  alt={`${register.title} icon`}
                  width={55}
                  height={55}
                />
                <h3 className="font-montserrat text-lg font-bold text-gray-900 group-hover:text-white sm:text-xl">
                  {register.title}
                </h3>
                <p className="text-sm text-gray-900 group-hover:text-white sm:text-base">
                  {register.description}
                </p>
                <span className="mt-2 text-sm text-gray-900 underline underline-offset-4 group-hover:text-secondary">
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
