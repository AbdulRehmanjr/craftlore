import dayjs from "dayjs";
import { Container } from "~/components/common/container";
import { MilestoneNumberGraph } from "~/components/graphs/milestone-number";
import { MilestonePercentageGraph } from "~/components/graphs/milestone-percentage";

export const GraphCard = () => {
  return (
    <Container className="relative">
      <header className="relative rounded-t-xl border-b-[6px] border-[#FF5C00] bg-[#003B95] px-6 py-8 text-center -mt-28">
        <h2 className="font-opensans text-lg font-bold text-white sm:text-xl md:text-4xl lg:text-5xl">
          Data Insights - Craftlore Platform Milestones : Year {dayjs().year()}
        </h2>
      </header>

      <div className="my-12 grid gap-8 bg-white px-4 sm:my-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <article className="space-y-6 lg:col-span-6">
          <p className="text-base leading-relaxed text-gray-800 sm:text-lg md:text-xl lg:text-2xl">
            Craftlore&apos;s {dayjs().year()} milestones provide quantifiable,{" "}
            <strong className="font-bold">Data-driven</strong> evidence of the platform&apos;s
            transformative impact on the Global Kashmir Handicraft sector. Each{" "}
            <strong className="font-bold">Metric</strong> highlights our commitment to eradicating
            counterfeit products, promoting artisan craftsmanship, and fostering a
            transparent, direct marketplace between artisans and global buyers
            through advanced technological integration.
          </p>
          <p className="text-base leading-relaxed text-gray-800 sm:text-lg md:text-xl lg:text-2xl">
            These figures are not mere statistics; they are{" "}
            <strong className="font-bold">Critical Key Performance Indicators</strong> (KPIs) that
            underscore a strategic, systemic shift in the craft ecosystem. By
            empowering artisans and ensuring data-driven authenticity
            verification, Craftlore is not only preserving Kashmir&apos;s cultural
            heritage but also redefining the global craft industry with its{" "}
            <strong className="font-bold">
              Advanced Sustainability Metrics, Blockchain-Enabled Traceability
              Frameworks, and Trust-Based Transactional Protocols
            </strong>
            .
          </p>
          <p className="text-base leading-relaxed text-gray-800 sm:text-lg md:text-xl lg:text-2xl">
            As the platform scales, it continues to serve as a pioneering model
            of innovation, excellence, and traceability standards in the global
            handmade craft marketplace.
          </p>
        </article>

        <div className="space-y-8 lg:col-span-6">
        <MilestoneNumberGraph />
        <MilestonePercentageGraph />
        </div>
      </div>
    </Container>
  );
};
