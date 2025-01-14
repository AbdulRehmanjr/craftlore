import { SectionContainer } from "~/components/common/section-container";
import { GenderInsightGraph } from "~/components/graphs/static-insight";

export default async function InsightPage() {
  return (
    <SectionContainer className="my-32 grid gap-12">
      <h1 className="text-center font-montserrat text-base text-primary md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
        Statistical Insights - Handicraft Gender Economics Dynamics
      </h1>
      <GenderInsightGraph />
    </SectionContainer>
  );
}
