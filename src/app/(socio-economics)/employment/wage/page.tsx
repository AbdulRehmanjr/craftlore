import { SectionContainer } from "~/components/common/section-container";
import { WageGraph } from "~/components/graphs/employment/wage-graph";

export default async function WagePage() {
  return (
    <SectionContainer className="my-32 grid place-content-center gap-12">
      <h1 className="text-center font-montserrat text-base text-primary md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
        Kashmir Handicraft&apos;s Employment Wage Equity
      </h1>
      <WageGraph />
    </SectionContainer>
  );
}
