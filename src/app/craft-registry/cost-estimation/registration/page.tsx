import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Shield, AlertTriangle, Landmark, Calculator } from "lucide-react";
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
                <Calculator className="h-12 w-12 text-white/90" />
                <h1 className="font-montserrat text-4xl font-bold md:text-5xl">
                  CraftLore&apos;s Price Estimator
                </h1>
              </div>
              <p className="mb-8 font-opensans text-xl opacity-90">
                Curated by the Hamadan Craft Revival Foundation, connecting
                authentic Kashmiri artisans and business houses with the
                world&apos;s largest handicraft market
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
                At CraftLore, our mission is to foster the growth and preservation
                of Kashmiri craftsmanship, ensuring that every product is
                represented accurately and ethically on a global platform. By
                leveraging this portal, you become part of a larger movement
                dedicated to creating a sustainable future for craft commerce.
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
                  Blacklist Policy
                </AlertTitle>
                <AlertDescription className="mt-2 text-base opacity-90">
                  If you choose to ignore these sacred principles, your entity will
                  be marked and flagged permanently as a Blacklisted Entity within
                  the CraftLore Global Kashmir Handicrafts Trade Registry. There
                  will be no removal of this status. This is a solemn and
                  irreversible decision to protect the very foundation of Kashmiri
                  craftsmanship.
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
                  CraftLore reserves the right to pursue legal action to recover
                  damages, defend artisan rights, and protect the integrity of
                  Kashmiri heritage. Any actions that compromise the authenticity or
                  ethical standards of this sacred craft community will be met with
                  the full force of legal recourse.
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
