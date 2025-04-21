import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Leaf, ArrowRight, CheckCircle2 } from "lucide-react";

export const CarbonApiGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e5edf7] to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative mb-16 overflow-hidden rounded-xl bg-primary py-12 text-center text-white shadow-lg">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
          <div className="relative">
            <div className="mb-4 flex justify-center">
              <Leaf className="h-12 w-12 text-white/90" />
            </div>
            <h4 className="font-opensans text-2xl font-bold lg:text-4xl">
              CraftLore Carbon Footprint Registry API Integration Process
            </h4>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-3xl font-bold">Carbon Footprint Registry API Integration Process</h1>
            <div className="space-y-6">
              {[
                {
                  title: "Step 1: Obtain API Access",
                  description: "Sign up and request API access to integrate CraftLore&apos;s carbon footprint measurement system into your platform.",
                },
                {
                  title: "Step 2: API Key Generation",
                  description: "Once approved, generate an API key to authenticate your integration and ensure secure communication for environmental data tracking.",
                },
                {
                  title: "Step 3: Connect and Configure",
                  description: "Use our detailed API documentation to connect your platform, allowing real-time carbon footprint calculation and monitoring.",
                },
                {
                  title: "Step 4: Submit Environmental Data",
                  description: "Send production data, material usage, and energy consumption through the API for carbon footprint calculation and certification.",
                },
                {
                  title: "Step 5: Access Sustainability Reports",
                  description: "Receive detailed carbon footprint reports, sustainability certificates, and recommendations for reducing environmental impact.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-lg border-2 bg-white p-6 transition-all hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-primary">{step.title}</h2>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h1 className="mb-6 text-3xl font-bold text-primary">
                Join the CraftLore Carbon Footprint Registry Today!
              </h1>

              <p className="mb-4 text-gray-700">
                Become part of the largest platform dedicated to sustainable Kashmiri crafts. Whether you&apos;re an artisan, business, or institution, CraftLore Carbon Footprint Registry offers essential tools to measure, reduce, and offset your environmental impact.
              </p>

              <h2 className="mb-4 text-2xl font-bold">
                CraftLore Carbon Footprint Registry is your gateway to sustainable crafts.
              </h2>

              <p className="mb-8 text-gray-700">
                Get started by integrating our API and become part of the CraftLore ecosystem, driving sustainability, environmental responsibility, and green certification.
              </p>

              <Button
                type="button"
                asChild
                className="group relative overflow-hidden rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary/90"
              >
                <Link href="/craft-registry/carbon-footprint/registration">
                  <span className="relative z-10 flex items-center gap-2">
                    START NOW
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary transition-opacity opacity-0 group-hover:opacity-100" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
