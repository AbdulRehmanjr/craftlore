import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { CARBONBANNER } from "~/constants/banner";

export const metadata: Metadata = {
  title: "CRAFTLORE | Carbon footprint",
};

export default function CarbonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={CARBONBANNER} />
      <section className="relative -mt-16">{children}</section>
    </>
  );
}
