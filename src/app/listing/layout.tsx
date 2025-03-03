

import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";
import { BUSINESSBANNER } from "~/constants/banner";

export const metadata: Metadata = {
    title: 'CRAFTLORE | Listing',
};

export default function ListingLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Banner banner={BUSINESSBANNER} />
            <section className="relative -mt-16">
                {children}
            </section>
        </>
    );
}
