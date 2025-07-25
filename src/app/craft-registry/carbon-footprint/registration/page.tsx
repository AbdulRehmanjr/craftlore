import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Shield, AlertTriangle, Landmark, Leaf } from "lucide-react";
import { SessionRegister } from "~/components/craft-repository/registration/session";

export default async function RegistrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e5edf7] to-white">
      <div className="mx-6 mb-6 grid gap-10 rounded-lg bg-white py-10 shadow-lg lg:container">
        <div className="relative overflow-hidden rounded-lg bg-primary py-16 text-white transition-all duration-300 hover:shadow-xl">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="grid gap-2">
              <div className="flex items-center gap-4">
                <Leaf className="h-12 w-12 text-white/90" />
                <h1 className="font-montserrat text-4xl font-bold md:text-5xl">
                  CraftLore&apos;s Carbon Footprint Registry
                </h1>
              </div>
              <p className="mb-8 font-opensans text-xl opacity-90">
                Measuring and certifying the environmental impact of Kashmiri crafts,
                promoting sustainable practices in the handicraft industry
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6">
          <Card className="border-2 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Landmark className="h-5 w-5 text-primary" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                At CraftLore, we are dedicated to promoting sustainable practices in
                the Kashmiri handicraft industry. Our Carbon Footprint Registry
                helps artisans and businesses measure, reduce, and offset their
                environmental impact, ensuring a greener future for traditional
                craftsmanship.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6">
            <div className="transition-all duration-300 hover:scale-[1.02]">
              <Alert variant="destructive" className="border-2 transition-all hover:shadow-md">
                <AlertTriangle className="h-5 w-5" />
                <AlertTitle className="font-montserrat text-lg font-bold">
                  Environmental Compliance Policy
                </AlertTitle>
                <AlertDescription className="mt-2 text-base opacity-90">
                  Failure to comply with environmental standards and carbon footprint
                  regulations will result in immediate blacklisting from the
                  CraftLore Global Registry. This status is permanent and serves to
                  protect our commitment to sustainability.
                </AlertDescription>
              </Alert>
            </div>

            <div className="transition-all duration-300 hover:scale-[1.02]">
              <Alert className="border-2 border-primary transition-all hover:shadow-md">
                <Shield className="h-5 w-5 text-primary" />
                <AlertTitle className="font-montserrat text-lg font-bold text-primary">
                  Legal Notice
                </AlertTitle>
                <AlertDescription className="mt-2 text-base opacity-90">
                  CraftLore enforces strict environmental regulations to ensure
                  sustainable practices in the Kashmiri handicraft industry. Any
                  violation of environmental standards will be met with legal action
                  to protect our planet and future generations.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6">
          <SessionRegister />
        </div>
      </div>
    </div>
  );
}
