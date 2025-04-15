import { SectionContainer } from "~/components/common/section-container";
import { CraftExportDashboard } from "~/components/general/economics/export/craftwise-graph";
import { HandiCraftExportGraph } from "~/components/general/economics/export/handicraft-export-graph";
import dayjs from "dayjs";
export default async function ExportPage() {
  return (
    <SectionContainer className="my-32 grid gap-12">
      <h1 className="text-center font-montserrat text-base text-primary md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
        Overall Handicraft Export Trend(
        <span className="text-secondary">2010-{dayjs().year()}</span>)
      </h1>
      <HandiCraftExportGraph />
      <h1 className="text-center font-montserrat text-base text-primary md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
        Craft-Wise Direct Export of Handicraft Items(
        <span className="text-secondary">J&K</span>)
      </h1>
      <CraftExportDashboard />
    </SectionContainer>
  );
}
