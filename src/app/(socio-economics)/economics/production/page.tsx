import dayjs from "dayjs";
import { SectionContainer } from "~/components/common/section-container";
import { HandiCraftGraph } from "~/components/general/economics/production/handicraft-graph";
import { ProductionTrendGraph } from "~/components/general/economics/production/trend-graph";

export default async function ProductionPage() {
  return (
    <SectionContainer className="my-32 grid gap-12">
      <h1 className="text-center font-montserrat text-base text-primary md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
        Overall Handicraft Production Trend(
        <span className="text-secondary">2010-{dayjs().year()}</span>)
      </h1>
      <ProductionTrendGraph />
      <h1 className="text-center font-montserrat text-base text-primary md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
        Estimated Production Across Different Crafts of the Handicraft Industry
        of J&K(<span className="text-secondary">2010-{dayjs().year()}</span>)
      </h1>
      <HandiCraftGraph />
    </SectionContainer>
  );
}
