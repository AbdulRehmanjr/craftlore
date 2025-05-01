import { CounterInfo } from "~/components/general/counter-info";
import { BottomBanner } from "~/components/general/bottom-banner";
import { SectionContainer } from "~/components/common/section-container";
import { Testimonials } from "~/components/general/landing/testimonials";

export const FounderCard = () => {
  return (
    <SectionContainer className="pt-8 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="grid gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Blue section - Added flex and justify-between for vertical centering */}
          <article className="order-2 lg:order-1 h-full">
            <div className="h-full space-y-4 sm:space-y-6 rounded-xl border-2 border-secondary bg-primary p-4 sm:p-6 md:p-8 lg:p-10 text-white flex flex-col justify-between">
              <div className="flex items-center justify-center flex-grow">
                <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center">
                  Join Craftlore, in exploring the vast repository and experience
                  the artistry of Kashmir like never before!
                </h2>
              </div>
              <footer className="flex justify-end mt-auto">
                <div className="space-y-1">
                  <p className="text-right font-montserrat text-base sm:text-lg md:text-xl text-secondary">
                    Jasif Khan
                  </p>
                  <p className="text-right font-montserrat text-base sm:text-lg md:text-xl">
                    Founder & CEO
                  </p>
                </div>
              </footer>
            </div>
          </article>

          {/* Text section */}
          <article className="order-1 space-y-4 sm:space-y-6 lg:order-2 h-full flex flex-col">
            <header className="space-y-2 sm:space-y-3">
              <p className="font-montserrat text-base sm:text-lg md:text-xl text-primary">
                Unlocking 700+ Years of Kashmiri Craft Heritage:
              </p>
              <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold text-secondary">
                Fully Digitized for a New Era, Backed by Science!
              </h2>
            </header>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed flex-grow">
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
        <Testimonials/>
        <CounterInfo className="w-full" />
        <BottomBanner className="w-full" />
      </div>
    </SectionContainer>
  );
};