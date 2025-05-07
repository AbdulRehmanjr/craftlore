import { Container } from "~/components/common/container";
import { CorporateAccordin } from "~/components/general/about/memberships/corporate/corporate-accordin";
import { CorporateMembershipForm } from "~/components/general/about/memberships/corporate/corporate-form";
import { MEMBERBANNER } from "~/constants/banner";
import { Banner } from "~/components/general/landing/banner";

export default function CorporatePage() {
  return (
    <>
    <Banner banner={MEMBERBANNER} />
    <section className="col-span-12 gap-4 bg-white">
      <Container className="my-32 grid grid-cols-2 gap-12 p-4">
        <CorporateAccordin />
        <CorporateMembershipForm />
      </Container>
    </section>
    </>
  );
}
