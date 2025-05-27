import { type Metadata } from "next";
import { Counter } from "~/components/animations/counter";
import { Background } from "~/components/common/background";
import { Container } from "~/components/common/container";
import { ReportingForm } from "~/components/craft-repository/gi/reporting";
import { BottomBanner } from "~/components/general/bottom-banner";
import Image from "next/image";
import { GIFeatures } from "~/components/craft-repository/gi/features";
import { GIApiGuide } from "~/components/craft-repository/gi/guide";

export const metadata: Metadata = {
  title: "CRAFTLORE | GI",
  description: "Geographical Indication Promotional Program for Kashmir Handicrafts",
};

const counterMetrics = [
  { name: "Products Verified Using Blockchain Technology", value: 9500 },
  { name: "Global Markets Secured with GI Certifications", value: 49 },
  { name: "Counterfeit Cases Detected with AI Tools", value: 32 },
  { name: "Supply Chains Monitored with IoT Sensors", value: 104 },
];

export default function CraftProfilingPage() {
  return (
    <>
      <Container className="py-12 sm:py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <article className="space-y-8">
            <div className="relative mx-auto aspect-square w-full max-w-[25rem]">
              <Image 
                src="/images/GI.png" 
                alt="Geographical Indication illustration" 
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="font-montserrat text-2xl font-bold text-secondary sm:text-3xl md:text-4xl">
                Welcome to CraftLore Geographical Indication Promotional Program
                for Kashmir Handicrafts
              </h1>
              <p className="text-base leading-relaxed sm:text-lg md:text-xl">
                Our mission is to protect and promote the heritage of Kashmir&apos;s
                unique crafts by ensuring their authenticity and securing their
                rightful place in the global market.
              </p>
              <h2 className="font-montserrat text-xl font-semibold text-gray-950 sm:text-2xl md:text-3xl">
                What is Geographical Indication
              </h2>
              <p className="text-base leading-relaxed sm:text-lg md:text-xl">
                Geographical Indication is a certification that marks a product as
                originating from a specific location, known for its distinct
                quality, craftsmanship, and heritage. For Kashmir handicrafts, GI
                ensures that the products you purchase are genuine and tied to the
                centuries-old traditions of the region.
              </p>
            </div>
          </article>

          <article className="rounded-xl bg-primary p-6 shadow-lg sm:p-8 md:p-10">
            <header className="mb-6 space-y-3 text-center">
              <h2 className="font-montserrat text-2xl font-bold text-secondary sm:text-3xl">
                Verify Geographical Indication of Your Product
              </h2>
              <p className="font-montserrat text-base text-white sm:text-lg">
                Demand Authenticity, Reject Fake Craft
              </p>
            </header>
            <ReportingForm />
          </article>
        </div>
      </Container>

      <Background color="#e5edf7">
        <Container className="py-12 sm:py-16 md:py-20">
          <GIFeatures />
        </Container>
      </Background>

      <Container className="py-12 sm:py-16 md:py-20">
        <GIApiGuide />
      </Container>

      <Background color="#e5edf7">
        <Container className="space-y-12 pt-12 sm:space-y-16 sm:pt-16 md:space-y-20 md:pt-20">
          <Counter counterValues={counterMetrics} />
          <BottomBanner />
        </Container>
      </Background>
    </>
  );
}
