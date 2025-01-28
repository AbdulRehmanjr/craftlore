import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Shield, AlertTriangle, Landmark } from "lucide-react";
import { SessionRegister } from "~/components/craft-repository/registration/session";

export default async function RegistrationPage() {

  return (
    <div className="mx-6 mb-6 grid gap-10 rounded-lg bg-white py-10 shadow lg:container">
      <div className="rounded-lg bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-2">
            <h1 className="mb-6 font-montserrat text-4xl font-bold md:text-5xl">
              CraftLore&apos;s Carbon Footprint Registry & Estimator
            </h1>
            <p className="mb-8 font-opensans text-xl opacity-90">
              Curated by the Hamadan Craft Revival Foundation, connecting
              authentic Kashmiri artisans and business houses with the
              world&apos;s largest handicraft market
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-6">
        <Card className="border-2">
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
          <Alert variant="destructive" className="border-2">
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

          <Alert className="border-2 border-primary">
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
      <SessionRegister />
    </div>
  );
}
