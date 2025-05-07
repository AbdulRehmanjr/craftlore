import { Container } from "~/components/common/container";
import { BuyerAccordin } from "~/components/general/about/memberships/buyer/buyer-accordin";
import { BuyerMembershipForm } from "~/components/general/about/memberships/buyer/buyer-form";
import { Banner } from "~/components/general/landing/banner";
import { MEMBERBANNER } from "~/constants/banner";

export default function BuyerPage() {
  return (
    <>
      <Banner banner={MEMBERBANNER} />
      <section className="col-span-12 gap-4 bg-white">
        <Container className="my-32 grid grid-cols-2 gap-12 p-2 md:p-4">
          <BuyerAccordin />
          <BuyerMembershipForm />
        </Container>
      </section>
    </>
  );
}
