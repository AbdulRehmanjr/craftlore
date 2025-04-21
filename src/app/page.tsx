import { Banner } from "~/components/general/landing/banner";
import { FounderCard } from "~/components/general/landing/founder-card";
import { GraphCard } from "~/components/general/landing/graph-card";
import { HelpUs } from "~/components/general/landing/helpus-card";
import { InfoCard } from "~/components/general/landing/info-card";
import { RegisterCard } from "~/components/general/landing/register-card";
import { ServiceCard } from "~/components/general/landing/service-card";
import { CraftloreComing } from "~/components/general/landing/soon-counter";
import { SupportNetwork } from "~/components/general/landing/support-network";
import { Testimonials } from "~/components/general/landing/testimonials";
import { WelcomeCard } from "~/components/general/landing/welcome-card";
import { BANNERS } from "~/constants/banner";

export default async function Home() {

  return (
    <>
      <Banner banner={BANNERS}/>
      <ServiceCard />
      <CraftloreComing/>
      <Testimonials/>
      <WelcomeCard />
      <RegisterCard />
      <GraphCard />
      <InfoCard />
      <HelpUs />
      <SupportNetwork />
      <FounderCard />
    </>
  );
}
