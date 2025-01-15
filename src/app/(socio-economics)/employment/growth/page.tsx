import { SectionContainer } from "~/components/common/section-container";
import { GrowthGraph } from "~/components/graphs/employment/growth-graph";

export default async function GrowthPage() {
  return (
    <SectionContainer className="my-32 grid gap-12">
      <h1 className="text-center font-montserrat text-base text-primary md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
        Kashmir Handicrafts Employment Growth
      </h1>
      <GrowthGraph />
    </SectionContainer>
  );
}
