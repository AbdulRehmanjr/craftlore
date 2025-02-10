import type { Metadata } from "next";
import { Container } from "~/components/common/container";

export const metadata: Metadata = {
  title: "Privacy Policy | Craftlore",
  description: "Privacy policy and data protection guidelines for Craftlore platform, operated by the Hamadan Craft Revival Foundation.",
  openGraph: {
    title: "Privacy Policy | Craftlore",
    description: "Privacy policy and data protection guidelines for Craftlore platform.",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7] py-10">
      <Container className="grid gap-7 lg:container">
        <h1 className="font-montserrat text-5xl text-primary">
          Privacy Policy
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
                At Craftlore, we are committed to protecting your privacy while preserving Kashmir&apos;s craft heritage. 
                This Privacy Policy explains how we collect, use, and protect your information when you use our platform.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                2. Information We Collect
              </h2>
              <div className="font-opensans text-sm space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-3">2.1 Personal Information</h3>
                  <ul className="space-y-2 text-gray-700 list-disc pl-6">
                    <li>Name and contact information</li>
                    <li>Account credentials</li>
                    <li>Professional affiliations with craft organizations</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">2.2 Platform Usage Data</h3>
                  <ul className="space-y-2 text-gray-700 list-disc pl-6">
                    <li>Craft verification requests</li>
                    <li>Search history related to crafts</li>
                    <li>Platform interaction metrics</li>
                    <li>Device and browser information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                3. How We Use Your Information
              </h2>
              <ul className="font-opensans text-sm space-y-2 text-gray-700 list-disc pl-6">
                <li>Verify craft authenticity and origin</li>
                <li>Improve platform functionality and user experience</li>
                <li>Conduct research on craft preservation</li>
                <li>Generate anonymous usage statistics</li>
                <li>Protect against fraudulent activities</li>
                <li>Communicate platform updates and educational content</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                4. Data Protection
              </h2>
              <div className="font-opensans text-sm">
                <p className="mb-4 text-gray-700">We implement robust security measures to protect your information:</p>
                <ul className="space-y-2 text-gray-700 list-disc pl-6">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security audits</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage practices</li>
                  <li>Employee data handling training</li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                5. Data Sharing
              </h2>
              <div className="font-opensans text-sm">
                <p className="mb-4 text-gray-700">We share information only with:</p>
                <ul className="space-y-2 text-gray-700 list-disc pl-6">
                  <li>Verified craft authentication partners</li>
                  <li>Research institutions studying craft preservation</li>
                  <li>Legal authorities when required by law</li>
                  <li>Service providers who maintain platform functionality</li>
                </ul>
                <p className="mt-4 text-gray-700">We never sell your personal information or share it for commercial purposes.</p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                6. Your Rights
              </h2>
              <div className="font-opensans text-sm">
                <p className="mb-4 text-gray-700">You have the right to:</p>
                <ul className="space-y-2 text-gray-700 list-disc pl-6">
                  <li>Access your personal information</li>
                  <li>Request corrections to your data</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of non-essential communications</li>
                  <li>Request data portability</li>
                  <li>Object to certain data processing</li>
                </ul>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                7. Cookies and Tracking
              </h2>
              <div className="font-opensans text-sm">
                <p className="mb-4 text-gray-700">We use cookies and similar technologies to:</p>
                <ul className="space-y-2 text-gray-700 list-disc pl-6">
                  <li>Maintain platform security</li>
                  <li>Remember your preferences</li>
                  <li>Analyze platform usage patterns</li>
                  <li>Improve user experience</li>
                </ul>
                <p className="mt-4 text-gray-700">You can control cookie settings through your browser preferences.</p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                8. Children&apos;s Privacy
              </h2>
              <p className="font-opensans text-sm text-gray-700">
                Our platform is not intended for users under 18 years of age. We do not knowingly collect or maintain information from children.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                9. Changes to Privacy Policy
              </h2>
              <p className="font-opensans text-sm text-gray-700">
                We may update this privacy policy periodically. We will notify you of any material changes through the platform or via email.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-4 font-montserrat text-xl font-bold text-primary">
                10. Contact Information
              </h2>
              <div className="font-opensans text-sm">
                <p className="text-gray-700">For privacy-related inquiries, contact:</p>
                <div className="mt-2">
                  <strong className="text-primary">Privacy Officer</strong>
                  <p className="text-gray-700">Hamadan Craft Revival Foundation</p>
                  <p className="text-gray-700">director@khcrf.org - info@khcrf.org</p>
                  <p className="text-gray-700">HCRF 2 Darul Zamrood - Gousia Colony Ext, Zakura - Srinagar, Jammu & Kashmir India 190006</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}