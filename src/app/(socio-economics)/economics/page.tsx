import dayjs from "dayjs";
import { SectionContainer } from "~/components/common/section-container";
import { ComponentList } from "~/components/general/economics/component-list";
import { HandiCraftGraph } from "~/components/general/economics/production/handicraft-graph";
import { ProductionTrendGraph } from "~/components/general/economics/production/trend-graph";
import { StakHolderList } from "~/components/general/economics/stake-list";
import { VisionList } from "~/components/general/economics/vision-list";

export default async function EconomyPage() {
  return (
    <SectionContainer className="my-12 sm:my-16 md:my-24 lg:my-32 grid gap-6 sm:gap-8 md:gap-12">
      <h1 className="text-center font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-primary">
        Kashmir Handicrafts Economics Monitoring
      </h1>
      <p className="font-opensans text-sm sm:text-base md:text-lg lg:text-xl">
        The Craftlore Kashmir Handicrafts Economics Monitoring Center stands
        as a pioneering initiative dedicated to the ongoing assessment,
        analysis, and promotion of the economic health of the Kashmiri
        handicrafts sector. Designed as a comprehensive platform that
        integrates traditional wisdom with cutting-edge technology, the center
        seeks to revolutionize the way Kashmiri crafts are understood,
        marketed, and supported on a global scale. By focusing on real-time
        data and predictive analytics, the Economics Monitoring Center
        empowers stakeholders—from artisans to policymakers—to make informed,
        strategic decisions that drive sustainable growth for the industry.
      </p>
      <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary">
        Purpose and Vision
      </h2>
      <p className="font-opensans text-sm sm:text-base md:text-lg lg:text-xl">
        The core mission of the Kashmir Handicrafts Economics Monitoring
        Center is to provide unparalleled visibility into the market dynamics
        of the handicrafts sector. It seeks to:
      </p>
      <VisionList />
      <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary">
        Key Components
      </h2>
      <ComponentList />
      <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary">
        Impact on Stakeholders
      </h2>
      <StakHolderList />
      <div className="grid gap-3 sm:gap-4 rounded-lg bg-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 shadow-md">
        <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary">
          Future Vision
        </h2>
        <p className="font-opensans text-sm sm:text-base md:text-lg lg:text-xl">
          The <strong>
            Craftlore Kashmir Handicrafts Economics Monitoring Center
          </strong>{" "}
          aspires to become the world&apos;s most comprehensive database for the
          Kashmiri handicraft industry. As it grows, the center will expand
          its capabilities to cover more intricate aspects of the craft
          economy, such as labor dynamics, the effect of globalization on
          local economies, and how Kashmiri crafts can better integrate into
          the luxury and sustainable markets.
        </p>
        <p className="font-opensans text-sm sm:text-base md:text-lg lg:text-xl">
          With its ability to merge <strong>heritage</strong> and <strong>innovation</strong>,
          Craftlore&apos;s Economics Monitoring Center is not only safeguarding the
          future of Kashmir&apos;s handicrafts but also setting a global precedent
          for how traditional arts can thrive in the modern economy. Through a
          combination of{" "}
          <strong>
            real-time data, predictive analytics, and sustainable business
            practices
          </strong>
          , the center ensures that the Kashmiri handicraft industry remains a
          vibrant part of both the local and global economy for generations to
          come.
        </p>
      </div>
      <h2 className="text-center font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary">
        Overall Handicraft Production Trend(
        <span className="text-secondary">2010-{dayjs().year()}</span>)
      </h2>
      <ProductionTrendGraph />
      <h2 className="text-center font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary">
        Estimated Production Across Different Crafts of the Handicraft
        Industry of J&K(<span className="text-secondary">2010-{dayjs().year()}</span>)
      </h2>
      <HandiCraftGraph />
    </SectionContainer>
  );
}