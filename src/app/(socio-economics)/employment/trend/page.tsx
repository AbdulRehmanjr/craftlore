import { SectionContainer } from "~/components/common/section-container";
import { EmploymentDashboard } from "~/components/graphs/employment/employment-dashboard";

export default async function TrendPage() {
  return (
    <SectionContainer className="my-32 grid gap-12">
    <h1 className="text-center font-montserrat text-base text-primary md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
      Kashmir Handicrafts Employment Trend
    </h1>
    <EmploymentDashboard />
  </SectionContainer>
  );
}
