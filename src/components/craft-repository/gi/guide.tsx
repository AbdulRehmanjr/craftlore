import Link from "next/link";
import { Button } from "~/components/ui/button";

export const GIApiGuide = () => {
  return (
    <div className="grid">
      <h1 className="relative -mt-40 rounded-t-xl border-b-8 border-secondary bg-primary py-12 text-center font-opensans text-xl font-bold text-white lg:text-4xl">
        Geographical Indication Promotion Program API Integration Process
      </h1>
      <div className="grid grid-cols-1 gap-8 py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Geographical Indication (GI) Promotion Program API Integration
            Process
          </h2>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-orange-500">
                Step 1: Obtain API Access
              </h4>
              <p>
                Sign up and request API access to integrate CraftLore’s GI
                registry into your platform, ensuring seamless certification
                management.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-500">
                Step 2: API Key Generation
              </h4>
              <p>
                Upon approval, generate your unique API key to authenticate your
                integration and enable secure communication between systems.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-500">
                Step 3: Connect and Configure
              </h4>
              <p>
                Use our comprehensive API documentation to connect your
                platform, facilitating real-time data exchange for GI
                certification tracking and verification.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-500">
                Step 4: Submit Product Data
              </h4>
              <p>
                Send product details, material origin, and production
                information through the API to register for GI certification and
                traceability.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-500">
                Step 5: Access GI Certification Reports
              </h4>
              <p>
                Receive blockchain-backed certification reports, providing
                detailed product authenticity, origin traceability, and
                compliance insights for global market access.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-500">
            Join the CraftLore Geographical Indication (GI) Promotion Program
            Today!
          </h2>

          <p className="text-gray-700">
            Become part of the world’s leading platform dedicated to promoting
            authentic Kashmiri handicrafts. Whether you’re an artisan, business,
            or retailer, CraftLore’s GI Promotion Program empowers you with
            essential tools to protect intellectual property, track product
            origins, and combat counterfeiting. By joining, you strengthen
            consumer trust, support artisans, and expand into global markets
            that prioritize authenticity.
          </p>

          <h2 className="text-2xl font-bold">
            CraftLore’s GI Promotion Program is your gateway to safeguarding the
            rich heritage of Kashmiri crafts while ensuring global market
            credibility.
          </h2>

          <p className="text-gray-700">
            Integrate our API today to become part of a transparent, secure, and
            globally recognized ecosystem.
          </p>
          <Button type="button" asChild>
            <Link href="/listing/registration">START NOW</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
