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
        <SponsorAccordin />
        <SponsorMemberShipForm />
      </Container>
    </section>
    </>
  );
}
