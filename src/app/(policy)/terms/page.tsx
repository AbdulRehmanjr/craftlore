import type { Metadata } from "next";
import { Container } from "~/components/common/container";

export const metadata: Metadata = {
  title: "Terms of Service | Craftlore",
  description: "Terms of service and user agreement for Craftlore platform, operated by the Hamadan Craft Revival Foundation.",
  openGraph: {
    title: "Terms of Service | Craftlore",
    description: "Terms of service and user agreement for Craftlore platform.",
    type: "website",
  },
};

export default function TermsOfService() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7] py-10">
      <Container className="grid gap-7 lg:container">
        <h1 className="font-montserrat text-5xl text-primary">
          Terms of Service
        </h1>
        <p className="font-opensans text-gray-600">Last Updated: February 9, 2025</p>

        <div className="rounded-lg bg-white p-8 shadow-sm">
          <div className="space-y-10">
            {/* Introduction */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                1. Introduction
              </h2>
              <p className="font-opensans text-sm text-gray-700">
                Welcome to Craftlore (&quot;Kashmir Craft Repository Platform&quot;), operated by the Hamadan Craft Revival Foundation. 
                By accessing or using our platform, you agree to be bound by these Terms of Service (&quot;Terms&quot;). 
                <br/>Please read them carefully.
              </p>
            </div>

            {/* Platform Purpose */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                2. Platform Purpose
              </h2>
              <div className="font-opensans text-sm">
                <p className="mb-4 text-gray-700">
                  Craftlore is a non-commercial, educational platform dedicated to preserving 
                  and documenting Kashmir&apos;s craft heritage. We provide:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc pl-6">
                  <li>Access to craft documentation and historical records</li>
                  <li>Verification tools for authentic Kashmiri crafts</li>
                  <li>Educational resources about Kashmir&apos;s craft traditions</li>
                  <li>Geographical indication certification information</li>
                  <li>Carbon footprint tracking for craft products</li>
                  <li>Blockchain-based traceability services</li>
                  <li>Price valuation tools</li>
                </ul>
              </div>
            </div>

            {/* User Obligations */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                3. User Obligations
              </h2>
              <div className="font-opensans text-sm space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-3">3.1 Account Registration</h3>
                  <ul className="space-y-2 text-gray-700 list-disc pl-6">
                    <li>You must provide accurate information when using our platform</li>
                    <li>You are responsible for maintaining the confidentiality of your account</li>
                    <li>You must be at least 18 years old to use our services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">3.2 Acceptable Use</h3>
                  <ul className="space-y-2 text-gray-700 list-disc pl-6">
                    <li>Use the platform for educational and verification purposes only</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not attempt to circumvent any platform security measures</li>
                    <li>Not use the platform for commercial promotion or advertising</li>
                    <li>Not misrepresent affiliations with artisans or craft organizations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                12. Contact Information
              </h2>
              <div className="font-opensans text-sm">
                <p className="text-gray-700">For questions about these terms, contact:</p>
                <div className="mt-2">
                  <strong className="text-primary">Hamadan Craft Revival Foundation</strong>
                  <p className="text-gray-700">director@khcrf.org - info@khcrf.org</p>
                  <p className="text-gray-700">HCRF 2 Darul Zamrood - Gousia Colony Ext, Zakura - Srinagar, Jammu & Kashmir India 190006</p>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                13. Acknowledgment
              </h2>
              <div className="font-opensans text-sm">
                <p className="mb-4 text-gray-700">By using Craftlore, you acknowledge:</p>
                <ul className="space-y-2 text-gray-700 list-disc pl-6">
                  <li>Having read these terms</li>
                  <li>Understanding your obligations</li>
                  <li>Agreeing to comply with all provisions</li>
                  <li>Understanding the non-commercial nature of the platform</li>
                </ul>
                <p className="mt-6 text-gray-700 font-medium">
                  These terms constitute the entire agreement between users and Craftlore 
                  regarding platform use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}