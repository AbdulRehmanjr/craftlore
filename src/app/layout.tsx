import "~/styles/globals.css";

import { Montserrat, Open_Sans, Manrope } from "next/font/google";
import { Providers } from "~/app/provider";
import { type Metadata } from "next";
import { Header } from "~/components/general/headers/header";
import { Footer } from "~/components/general/footers/footer";
import { Toaster } from "~/components/ui/toaster";
import { ScrollToTop } from "~/components/animations/scroll-top";
import { AuthDialog } from "~/components/craft-repository/registration/register-dialog";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-montserrat",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-opensans",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "CRAFTLORE",
  description: "Tecch - Technology & IT Solutions Next js Template",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${opensans.variable} ${manrope.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header/>
          <main className="flex-grow">{children}</main>
          <ScrollToTop />
          <Footer />
          <AuthDialog/>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
