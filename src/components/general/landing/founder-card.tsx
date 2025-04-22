import { CounterInfo } from "~/components/general/counter-info";
import { BottomBanner } from "~/components/general/bottom-banner";
import { SectionContainer } from "~/components/common/section-container";

export const FounderCard = () => {
  return (
    <SectionContainer className="pt-12 sm:pt-16 md:pt-20">
      <div className="grid gap-8 sm:gap-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <article className="order-2 lg:order-1">
            <div className="space-y-6 rounded-xl border-2 border-secondary bg-primary p-6 text-white sm:p-8 md:p-10 lg:p-12">
              <h2 className="font-montserrat text-2xl leading-relaxed sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight">
                Join Craftlore, in exploring the vast repository and experience
                the artistry of Kashmir like never before!
              </h2>
              <footer className="flex justify-end">
                <div className="space-y-1">
                  <p className="text-right font-montserrat text-lg text-secondary sm:text-xl">
                    Jasif Khan
                  </p>
                  <p className="text-right font-montserrat text-lg sm:text-xl">
                    Founder & CEO
                  </p>
                </div>
              </footer>
            </div>
          </article>

          <article className="order-1 space-y-6 lg:order-2">
            <header className="space-y-3">
              <p className="font-montserrat text-lg text-primary sm:text-xl">
                Unlocking 700+ Years of Kashmiri Craft Heritage:
              </p>
              <h2 className="font-montserrat text-2xl font-semibold text-secondary sm:text-3xl">
                Fully Digitized for a New Era, Backed by Science!
              </h2>
            </header>

            <div className="space-y-6 text-base leading-relaxed sm:text-lg md:text-xl">
              <p>
                In a revolutionary step toward preserving cultural heritage, we
                have leveraged advanced technology to safeguard the rich legacy
                of Kashmiri crafts. Craftlore has transformed into the{" "}
                <strong>
                  World&apos;s Largest, Most Interactive Platform for Kashmir Crafts
                </strong>
                , offering an extensive craft registry with access to over{" "}
                <strong>One Million Data Elements Representing 28 Major Crafts</strong>.
                This comprehensive digital repository makes centuries of
                craftsmanship accessible to the world, engaging and educating a
                global audience.
              </p>
              <p>
                Our initiative is a bold stand against the flood of counterfeit
                Kashmiri crafts infiltrating the global market, particularly
                from <strong>China and Amritsar</strong> (India). These imitations tarnish
                the authentic Kashmiri name, and we are committed to defending
                the integrity of our artisans and their time-honored traditions.
                Through Craftlore, we ensure every craft is verified, authentic,
                and a true reflection of the cultural mastery it represents.
              </p>
            </div>
          </article>
        </div>

        <CounterInfo className="w-full" />
        <BottomBanner className="w-full" />
      </div>
    </SectionContainer>
  );
};
