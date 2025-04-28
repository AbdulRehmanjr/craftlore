import { Container } from "~/components/common/container";
import { SponsorAccordin } from "~/components/general/about/memberships/sponsorship/sponsor-accordin";
import { SponsorMemberShipForm } from "~/components/general/about/memberships/sponsorship/sponsorship-form";
import { Banner } from "~/components/general/landing/banner";
import { MEMBERBANNER } from "~/constants/banner";

export default function SponsorshipPage() {
  return (
    <>
    <Banner banner={MEMBERBANNER} />
    <section className="col-span-12 gap-4 bg-white">
      <Container className="my-32 grid grid-cols-2 gap-12 p-4">
        <h1 className="col-span-2 mb-8 font-montserrat text-2xl text-primary sm:mb-12 sm:text-3xl md:text-4xl lg:mb-16 lg:text-5xl">
          Craftlore&apos;s Sponsor Membership{" "}
          <span className="text-secondary">Benefits</span>
        </h1>
        <SponsorAccordin />
        <SponsorMemberShipForm />
      </Container>
    </section>
    </>
  );
}
