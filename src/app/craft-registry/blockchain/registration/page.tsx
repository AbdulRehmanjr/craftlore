import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Shield, AlertTriangle, Landmark, Link as LinkIcon } from "lucide-react";
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
                <LinkIcon className="h-12 w-12 text-white/90" />
                <h1 className="font-montserrat text-4xl font-bold md:text-5xl">
                  CraftLore&apos;s Blockchain Registry
                </h1>
              </div>
              <p className="mb-8 font-opensans text-xl opacity-90">
                Securing the authenticity and traceability of Kashmiri crafts through
                blockchain technology, ensuring transparency in the global market
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
                At CraftLore, we leverage blockchain technology to create an
                immutable record of Kashmiri crafts&apos; journey from artisan to
                consumer. Our Blockchain Registry ensures transparency, prevents
                counterfeiting, and builds trust in the global marketplace while
                protecting the rights of artisans.
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
                  Blockchain Integrity Policy
                </AlertTitle>
                <AlertDescription className="mt-2 text-base opacity-90">
                  Any attempt to manipulate or falsify blockchain records will result
                  in immediate blacklisting from the CraftLore Global Registry. This
                  status is permanent and serves to protect the integrity of our
                  digital verification system.
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
                  CraftLore maintains strict legal measures to protect the integrity
                  of our blockchain records. Any attempt to compromise the system&apos;s
                  security or authenticity will be met with legal action to preserve
                  trust in the marketplace.
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