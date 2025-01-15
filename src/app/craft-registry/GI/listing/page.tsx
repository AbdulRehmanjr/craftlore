import { type Metadata } from "next";
import { Container } from "~/components/common/container";
import { GIListing } from "~/components/craft-repository/gi/listing";

export const metadata: Metadata = {
  title: "CRAFTLORE | GI Listing",
};

export default function GIListingPage() {
  return (
    <section className="grid gap-4 bg-[#e5edf7]">
      <Container className="my-10 grid gap-10">
        <GIListing />
      </Container>
    </section>
  );
}
