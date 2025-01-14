import { type Metadata } from "next";
import { Counter } from "~/components/animations/counter";
import { Background } from "~/components/common/background";
import { Container } from "~/components/common/container";
import { ProfileApiGuide } from "~/components/craft-repository/profiling/api-guide";
import { ProfileFeatures } from "~/components/craft-repository/profiling/features";
import { ProfileHome } from "~/components/craft-repository/profiling/home";
import { BottomBanner } from "~/components/general/bottom-banner";

export const metadata: Metadata = {
  title: "CRAFTLORE | Craft Profiling",
};

const counter = [
  { name: "Verified artisans", value: 25000 },
  { name: "Green Networks", value: 20 },
  { name: "Eco Institutions", value: 8 },
  { name: "Great Businesses", value: 120 },
];

export default function CraftProfilingPage() {
  return (
    <section className="relative -mt-16">
      <Container className="flex flex-wrap justify-center gap-10">
        <div className="grid h-[183px] w-72 place-content-center border-4 border-white bg-secondary p-10 text-center text-white">
          <h1 className="whitespace-pre-line font-montserrat text-xl font-bold">
            CARBON FOOTPRINT CRAFT REGISTRY
          </h1>
        </div>
        <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Measure, Reduce, Thrive
          </p>
          <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
            Sustainability
          </p>
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Sustainable impact.
          </p>
        </div>
        <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Track, Verify, Improve
          </p>
          <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
            Accountability
          </p>
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Responsible craft.
          </p>
        </div>
        <div className="grid h-[183px] w-72 place-content-center gap-4 bg-white p-10 text-center text-gray-900">
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Sustain, Showcase, Lead
          </p>
          <p className="whitespace-pre-line font-montserrat text-2xl font-bold">
            Eco-Craft
          </p>
          <p className="whitespace-pre-line font-opensans text-sm font-bold text-gray-500">
            Eco leadership.
          </p>
        </div>
      </Container>
      <Container className="mt-6 grid gap-32">
        <ProfileHome />
      </Container>
      <Background color="#e5edf7">
        <Container>
          <ProfileFeatures />
        </Container>
      </Background>
      <Container>
        <ProfileApiGuide />
      </Container>
      <Background color="#e5edf7">
        <div className="mx-6 space-y-[6rem] pt-[5rem] lg:container">
          <h2 className="text-center font-montserrat text-xl text-secondary">
            Defend Fair Trade, Empower Artisans: Join the Movement for
            Transparent Pricing in Kashmiri Crafts
          </h2>
          <h2 className="text-center font-montserrat text-3xl text-primary">
            Join our mission to establish fair, transparent pricing for Kashmiri
            artisans and their unique crafts.
          </h2>
          <Counter counterValues={counter} />
          <BottomBanner />
        </div>
      </Background>
    </section>
  );
}
