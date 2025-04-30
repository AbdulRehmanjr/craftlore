import Link from "next/link";
import { Button } from "~/components/ui/button";

export const RegistrationProcess = () => {
  return (
    <>
      <div className="h-40 md:h-60 lg:h-80 bg-[#e5edf7]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-48 md:-mt-[230px] lg:-mt-80 space-y-4 md:space-y-6 rounded-t-xl border-b-8 border-secondary bg-primary py-8 md:py-10 lg:py-12 text-center font-opensans font-bold text-white">
          <h4 className="text-xl md:text-2xl lg:text-4xl">
            Craftlore Trade Registry Registration Process
          </h4>
          <p className="text-sm hidden md:block md:text-base lg:text-lg">
            A unified platform fostering trust, growth & sustainability in
            Kashmiri handicrafts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 md:py-16 lg:py-20">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold">
              Craftlore Trade Registry Registration Process
            </h1>

            <div className="space-y-4 md:space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h2 className="text-base md:text-lg font-semibold text-orange-500">
                  Step 1: Create an Account
                </h2>
                <p className="mt-2">
                  Start by signing up with basic details to access the portal.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h2 className="text-base md:text-lg font-semibold text-orange-500">
                  Step 2: Fill Registration Form
                </h2>
                <p className="mt-2">
                  Complete the form tailored to artisans, businesses, or
                  institutions.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h2 className="text-base md:text-lg font-semibold text-orange-500">
                  Step 3: Upload Documents
                </h2>
                <p className="mt-2">
                  Provide necessary verification documents to ensure your
                  authenticity.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h2 className="text-base md:text-lg font-semibold text-orange-500">
                  Step 4: Verification Process
                </h2>
                <p className="mt-2">
                  Our team reviews your submission for compliance with ethical
                  standards.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h2 className="text-base md:text-lg font-semibold text-orange-500">
                  Step 5: Approval & Listing
                </h2>
                <p className="mt-2">
                  Once approved, your profile will be publicly listed,
                  providing access to rankings, collaborations, and market
                  visibility.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:p-6 bg-white rounded-lg shadow-sm">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-500">
              Join the Craftlore Trade Registry Today!
            </h1>

            <p className="text-gray-700">
              Be part of the largest unified platform dedicated to Kashmiri
              handicrafts. Whether you&apos;re an artisan, business, or
              institution, Craftlore Trade Registry offers unparalleled access
              to global markets, ethical trade partnerships, and verified
              credibility.
            </p>

            <h2 className="text-xl md:text-2xl font-bold">
              Craftlore Trade Registry is your gateway to a trusted global
              platform
            </h2>

            <p className="text-gray-700">
              Get Started today by creating your account and becoming part of
              the Craftlore ecosystem, empowering Kashmiri artisans,
              businesses, and institutions through transparency,
              collaboration, and sustainability.
            </p>
            
            <Button 
              type="button" 
              asChild
              className="w-full md:w-auto px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold text-base mt-4"
            >
              <Link href="/listing/registration">START NOW</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};