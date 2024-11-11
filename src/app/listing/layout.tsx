

import { type Metadata } from "next";
import { Banner } from "~/components/general/landing/banner";

export const metadata: Metadata = {
    title: 'CRAFTLORE | Registration',
    description: 'Tecch - Technology & IT Solutions Next js Template',
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Banner />
            <div className="col-span-12 relative -mt-16">
                {children}
            </div>
        </>
    );
}
