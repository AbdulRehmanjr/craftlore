import Image from "next/image";
import { ReportingForm } from "~/components/craft-repository/gi/reporting";
import { FakeReportingForm } from "~/components/craft-repository/gi/fake";
import { type Metadata } from "next";
import { Container } from "~/components/common/container";

export const metadata: Metadata = {
  title: "CRAFTLORE | GI Reporting",
  description: "Report and verify Geographical Indication (GI) certified products. Ensure authenticity and protect Kashmiri crafts through our consumer reporting portal.",
};

export default function GIReportingPage() {
  return (
    <main className="relative -mt-16">
      <Container className="py-12 sm:py-16 md:py-20">
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <article className="flex h-[183px] items-center justify-center rounded-xl border-4 border-white bg-secondary p-6 text-center text-white shadow-lg">
            <h1 className="font-montserrat text-xl font-bold leading-tight sm:text-2xl">
              Geographical Indication Promotional Program
            </h1>
          </article>
          
          <article className="flex h-[183px] flex-col items-center justify-center gap-3 rounded-xl bg-white p-6 text-center shadow-lg">
            <p className="font-opensans text-sm font-bold text-gray-500">
              Validate, Secure, Celebrate
            </p>
            <p className="font-montserrat text-2xl font-bold text-gray-900">
              Authenticity
            </p>
            <p className="font-opensans text-sm font-bold text-gray-500">
              Certified Origin
            </p>
          </article>

          <article className="flex h-[183px] flex-col items-center justify-center gap-3 rounded-xl bg-white p-6 text-center shadow-lg">
            <p className="font-opensans text-sm font-bold text-gray-500">
              Verify, Protect, Trust
            </p>
            <p className="font-montserrat text-2xl font-bold text-gray-900">
              Integrity
            </p>
            <p className="font-opensans text-sm font-bold text-gray-500">
              Genuine Craft
            </p>
          </article>

          <article className="flex h-[183px] flex-col items-center justify-center gap-3 rounded-xl bg-white p-6 text-center shadow-lg">
            <p className="font-opensans text-sm font-bold text-gray-500">
              Preserve, Promote, Empower
            </p>
            <p className="font-montserrat text-2xl font-bold text-gray-900">
              Heritage Craft
            </p>
            <p className="font-opensans text-sm font-bold text-gray-500">
              Cultural Pride
            </p>
          </article>
        </section>

        <section className="mt-20 grid gap-12 lg:grid-cols-2">
          <article className="space-y-8">
            <div className="relative aspect-square w-full max-w-[25rem]">
              <Image 
                src="/images/GI.png" 
                alt="Geographical Indication illustration" 
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="font-montserrat text-2xl font-bold text-secondary sm:text-3xl">
                Consumer Reporting Portal
              </h2>
              <h3 className="font-montserrat text-3xl font-bold text-primary sm:text-4xl">
                Empowering Consumer Vigilance & Transparency
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Consumer reporting is a vital feature integrated into the
                Geographical Indication (GI) Registry, enabling consumers to play
                an active role in safeguarding the authenticity of GI-certified
                products, such as Kashmiri crafts. This system fosters
                transparency and accountability by allowing buyers to report any
                suspected counterfeits or discrepancies directly to regulatory
                bodies.
              </p>
              
              <div className="space-y-4 rounded-xl bg-gray-50 p-6">
                <h4 className="font-montserrat text-xl font-semibold text-gray-900">
                  Ensure the following steps before filing a report:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-base text-gray-700">
                      Double-check the <strong className="text-primary">8-digit GI ID</strong> on the product or certification.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-base text-gray-700">
                      Confirm all product details <strong className="text-primary">match the registered craft information</strong>.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-base text-gray-700">
                      If you <strong className="text-primary">still find discrepancies</strong> after re-verification, proceed with the report.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <div className="space-y-8">
            <article className="flex flex-col gap-6 rounded-xl bg-primary p-6 shadow-lg sm:p-8">
              <header className="space-y-3 text-center">
                <h2 className="font-montserrat text-2xl font-bold text-secondary sm:text-3xl">
                  Caution for Users: Re-Verify Your GI ID Before Reporting
                </h2>
                <p className="font-montserrat text-base text-white/90">
                  Your diligence can prevent artisans or producers from being
                  penalized for an unintended mistake
                </p>
              </header>
              <ReportingForm />
            </article>

            <article className="flex flex-col gap-6 rounded-xl bg-primary p-6 shadow-lg sm:p-8">
              <header className="space-y-3 text-center">
                <h2 className="font-montserrat text-2xl font-bold text-secondary sm:text-3xl">
                  Fake Product ID?
                </h2>
                <p className="font-montserrat text-base text-white/90">
                  Report a Suspected Issue
                </p>
              </header>
              <FakeReportingForm />
            </article>
          </div>
        </section>
      </Container>
    </main>
  );
}
