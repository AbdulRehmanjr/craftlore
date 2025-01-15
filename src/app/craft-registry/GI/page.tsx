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
};

const counter = [
  { name: "Products Verified Using Blockchain Technology", value: 9500 },
  { name: "Global Markets Secured with GI Certifications", value: 49 },
  { name: "Counterfeit Cases Detected with AI Tools", value: 32 },
  { name: "Supply Chains Monitored with IoT Sensors", value: 104 },
];

export default function CraftProfilingPage() {
  return (
    <section className="relative">
      <Container className="my-20 grid grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col gap-6 p-4 lg:col-span-1">
          <div className="relative h-[25rem] w-[25rem]">
            <Image src="/images/GI.png" alt="co2 image" fill />
          </div>
          <div className="space-y-6 [&_h2]:font-montserrat [&_h2]:text-3xl [&_h2]:text-gray-950 [&_p]:font-opensans [&_p]:text-xl">
            <h1 className="font-montserrat text-3xl text-secondary">
              Welcome to CraftLore Geographical Indication Promotional Program
              for Kashmir Handicrafts
            </h1>
            <p>
              Our mission is to protect and promote the heritage of Kashmir’s
              unique crafts by ensuring their authenticity and securing their
              rightful place in the global market.
            </p>
            <h2>What is Geographical Indication</h2>
            <p>
              Geographical Indication is a certification that marks a product as
              originating from a specific location, known for its distinct
              quality, craftsmanship, and heritage. For Kashmir handicrafts, GI
              ensures that the products you purchase are genuine and tied to the
              centuries-old traditions of the region.
            </p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-6 rounded-lg bg-primary p-6 shadow-lg lg:col-span-1">
          <h2 className="p-6 text-center font-montserrat text-3xl text-secondary">
            Demand Authenticity, Reject Fake Craft
          </h2>
          <p className="font-montserrat text-sm text-white">
            Verify Geographical Indication of Your Product
          </p>
          <ReportingForm />
        </div>
      </Container>
      <Background color="#e5edf7">
        <Container>
          <GIFeatures />
        </Container>
      </Background>
      <Container>
        <GIApiGuide />
      </Container>
      <Background color="#e5edf7">
        <Container className="space-y-[6rem] pt-[5rem]">
          <Counter counterValues={counter} />
          <BottomBanner />
        </Container>
      </Background>
    </section>
  );
}
