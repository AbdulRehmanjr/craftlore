import { SectionContainer } from "~/components/common/section-container";
import { WorkforceAreaGraph } from "~/components/graphs/employment/area-graph";
import { ArtianGraph } from "~/components/graphs/employment/arstian-graph";
import { WorkforceGraph } from "~/components/graphs/employment/workforce-graph";

export default async function TrendPage() {
  return (
    <SectionContainer className="my-32 grid place-content-center gap-12">
    <h1 className="text-center font-montserrat text-base text-primary md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
      Kashmir Handicrafts Employment Trend
    </h1>
    <ArtianGraph />
    <WorkforceGraph />
    <WorkforceAreaGraph />
  </SectionContainer>
  );
}
