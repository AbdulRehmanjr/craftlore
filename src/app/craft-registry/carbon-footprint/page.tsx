import { CarbonEstimationHome } from "~/components/craft-repository/carbon-footprint/home";
import { CarbonApiGuide } from "~/components/craft-repository/carbon-footprint/api-guide";
import { CarbonFeatures } from "~/components/craft-repository/carbon-footprint/features";
import { Counter } from "~/components/animations/counter";
import { BottomBanner } from "~/components/general/bottom-banner";
import { type Metadata } from "next";
import { Container } from "~/components/common/container";

export const metadata: Metadata = {
  title: "CRAFTLORE | Carbon Footprint",
  description: "Measure and reduce the carbon footprint of Kashmiri crafts. Join our mission for sustainable and eco-conscious craft production.",
};

const counterMetrics = [
  { name: "Verified artisans", value: 25000 },
  { name: "Global Markets", value: 20 },
  { name: "Industry", value: 8 },
  { name: "Craft Businesses", value: 120 },
];

export default function CarbonPrintPage() {
  return (
    <section className="relative -mt-16">
      <Container className="py-8 sm:py-12 md:py-16 lg:py-20">
        <section className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <article className="flex h-[160px] sm:h-[183px] items-center justify-center rounded-xl border-4 border-white bg-secondary p-4 sm:p-6 text-center text-white shadow-lg">
            <h1 className="font-montserrat text-lg sm:text-xl md:text-2xl font-bold leading-tight">
              Carbon Footprint Craft Registry
            </h1>
          </article>
          
          <article className="flex h-[160px] sm:h-[183px] flex-col items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white p-4 sm:p-6 text-center shadow-lg">
            <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
              Measure, Reduce, Thrive
            </p>
            <p className="font-montserrat text-xl sm:text-2xl font-bold text-gray-900">
              Sustainability
            </p>
            <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
              Sustainable Impact
            </p>
          </article>

          <article className="flex h-[160px] sm:h-[183px] flex-col items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white p-4 sm:p-6 text-center shadow-lg">
            <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
              Track, Verify, Improve
            </p>
            <p className="font-montserrat text-xl sm:text-2xl font-bold text-gray-900">
              Accountability
            </p>
            <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
              Responsible Craft
            </p>
          </article>

          <article className="flex h-[160px] sm:h-[183px] flex-col items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white p-4 sm:p-6 text-center shadow-lg">
            <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
              Sustain, Showcase, Lead
            </p>
            <p className="font-montserrat text-xl sm:text-2xl font-bold text-gray-900">
              Eco-Craft
            </p>
            <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
              Eco Leadership
            </p>
          </article>
        </section>

        <section className="mt-12 sm:mt-16 md:mt-20">
          <CarbonEstimationHome />
        </section>
      </Container>

      <div className="bg-[#e5edf7] py-8 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <CarbonFeatures />
        </Container>
      </div>

      <div className="py-8 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <CarbonApiGuide />
        </Container>
      </div>

      <div className="bg-[#e5edf7] pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        <Container className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          <header className="space-y-3 sm:space-y-4 text-center">
            <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
              Defend Sustainability, Empower Artisans: Join the Movement for a
              Greener Future in Kashmiri Crafts
            </h2>
            <h3 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              Join our mission to create a more sustainable and eco-conscious
              future for Kashmiri artisans and the craft industry.
            </h3>
          </header>
          <Counter counterValues={counterMetrics} />
          <BottomBanner />
        </Container>
      </div>
    </section>
  );
}
