import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { PRICEBANNER } from "~/constants/banner";

export const metadata: Metadata = {
    title: "CRAFTLORE | Cost estimation",
  };
  
export default function CostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Banner banner={PRICEBANNER} />
      <section className="relative -mt-16">{children}</section>
    </>
  );
}
