import { BlockchainHome } from "~/components/craft-repository/blockchain/home";
import { BottomBanner } from "~/components/general/bottom-banner";
import { Counter } from "~/components/animations/counter";
import { BlockFeatures } from "~/components/craft-repository/blockchain/feature";
import { BlockchainApiGuide } from "~/components/craft-repository/blockchain/api-guide";
import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { BLOCKBANNER } from "~/constants/banner";
import { Container } from "~/components/common/container";

export const metadata: Metadata = {
  title: "CRAFTLORE | Blockchain",
  description: "Explore our Blockchain Traceability Registry for Kashmiri crafts. Track, verify, and ensure the authenticity of handicrafts through immutable blockchain records.",
};

const counterMetrics = [
  { name: "Registered Artisans", value: 25000 },
  { name: "Blockchain Networks", value: 20 },
  { name: "Blockchain-Linked Craft Hubs", value: 8 },
  { name: "Traceable Product Lines", value: 120 },
];

export default function BlockChainPage() {
  return (
    <>
      <Banner banner={BLOCKBANNER} />
      <section className="relative -mt-16">
        <Container className="py-8 sm:py-12 md:py-16 lg:py-20">
          <section className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <article className="flex h-[160px] sm:h-[183px] items-center justify-center rounded-xl border-4 border-white bg-secondary p-4 sm:p-6 text-center text-white shadow-lg">
              <h1 className="font-montserrat text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                Blockchain Traceability Registry
              </h1>
            </article>
            
            <article className="flex h-[160px] sm:h-[183px] flex-col items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white p-4 sm:p-6 text-center shadow-lg">
              <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
                Track, Trace, Trust
              </p>
              <p className="font-montserrat text-xl sm:text-2xl font-bold text-gray-900">
                Transparency
              </p>
              <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
                Proven Origins
              </p>
            </article>

            <article className="flex h-[160px] sm:h-[183px] flex-col items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white p-4 sm:p-6 text-center shadow-lg">
              <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
                Verify, Authenticate, Assure
              </p>
              <p className="font-montserrat text-xl sm:text-2xl font-bold text-gray-900">
                Security
              </p>
              <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
                Immutable Records
              </p>
            </article>

            <article className="flex h-[160px] sm:h-[183px] flex-col items-center justify-center gap-2 sm:gap-3 rounded-xl bg-white p-4 sm:p-6 text-center shadow-lg">
              <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
                Protect, Preserve, Guarantee
              </p>
              <p className="font-montserrat text-xl sm:text-2xl font-bold text-gray-900">
                Craft Integrity
              </p>
              <p className="font-opensans text-xs sm:text-sm font-bold text-gray-500">
                Certified Excellence
              </p>
            </article>
          </section>

          <section className="mt-12 sm:mt-16 md:mt-20">
            <BlockchainHome />
          </section>
        </Container>

        <div className="bg-[#e5edf7] py-8 sm:py-12 md:py-16 lg:py-20">
          <Container>
            <BlockFeatures />
          </Container>
        </div>

        <div className="py-8 sm:py-12 md:py-16 lg:py-20">
          <Container>
            <BlockchainApiGuide />
          </Container>
        </div>

        <div className="bg-[#e5edf7] pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <Container className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
            <header className="space-y-3 sm:space-y-4 text-center">
              <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
                Ensure Authenticity, Empower Artisans
              </h2>
              <h3 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                Join the Revolution of Blockchain Traceability in Kashmiri Handicrafts
              </h3>
            </header>
            <Counter counterValues={counterMetrics} />
            <BottomBanner />
          </Container>
        </div>
      </section>
    </>
  );
}
