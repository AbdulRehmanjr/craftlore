import Link from "next/link";
import { Button } from "~/components/ui/button";

export const CarbonApiGuide = () => {
  return (
    <div className="grid">
      <h4 className="relative -mt-40 rounded-t-xl border-b-8 border-secondary bg-primary py-12 text-center font-opensans text-xl font-bold text-white lg:text-4xl">
        CraftLore Carbon Footprint Registry API Integration Process
      </h4>
      <div className="grid grid-cols-1 gap-8 py-20 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            Carbon Footprint Registry API Integration Process
          </h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 1: Obtain API Access
              </h2>
              <p>
                Sign up and request API access to integrate CraftLore&apos;s
                carbon footprint measurement system into your platform.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 2: API Key Generation
              </h2>
              <p>
                Once approved, generate an API key to authenticate your
                integration and ensure secure communication for environmental data tracking.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 3: Connect and Configure
              </h2>
              <p>
                Use our detailed API documentation to connect your platform,
                allowing real-time carbon footprint calculation and monitoring.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 4: Submit Environmental Data
              </h2>
              <p>
                Send production data, material usage, and energy consumption through the API
                for carbon footprint calculation and certification.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-orange-500">
                Step 5: Access Sustainability Reports
              </h2>
              <p>
                Receive detailed carbon footprint reports, sustainability certificates,
                and recommendations for reducing environmental impact.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-orange-500">
            Join the CraftLore Carbon Footprint Registry Today!
          </h1>

          <p className="text-gray-700">
            Become part of the largest platform dedicated to sustainable Kashmiri crafts.
            Whether you&apos;re an artisan, business, or institution, CraftLore
            Carbon Footprint Registry offers essential tools to measure, reduce, and
            offset your environmental impact. By joining, you demonstrate your commitment
            to sustainability, build consumer trust, and gain access to eco-conscious
            markets.
          </p>

          <h2 className="text-2xl font-bold">
            CraftLore Carbon Footprint Registry is your gateway to sustainable crafts.
          </h2>

          <p className="text-gray-700">
            Get started by integrating our API and become part of the CraftLore
            ecosystem, driving sustainability, environmental responsibility, and
            green certification.
          </p>
          <Button type="button" asChild>
            <Link href="/craft-registry/carbon-footprint/registration">START NOW</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};