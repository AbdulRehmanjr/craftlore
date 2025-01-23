import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { CarbonApiForm } from "~/components/craft-repository/carbon-footprint/registration/form";
import { getServerAuthSession } from "~/server/auth";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { GenerateApi } from "~/components/craft-repository/carbon-footprint/registration/generate-key";

export default async function RegistrationPage() {
  const session = await getServerAuthSession();
  return (
    <div className="mx-6 mb-6 grid gap-10 rounded-lg bg-white py-10 shadow lg:container">
      <div className="rounded-lg bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-2">
            <h1 className="mb-6 font-montserrat text-4xl font-bold md:text-5xl">
              Join the Global Kashmir Handicrafts Trade Registry
            </h1>
            <p className="mb-8 font-opensans text-xl opacity-90">
              Curated by the Hamadan Craft Revival Foundation, connecting
              authentic Kashmiri artisans and business houses with the
              world&apos;s largest handicraft market
            </p>
            <Button
              asChild
              className="bg-secondary text-white duration-300 hover:bg-gray-100 hover:text-primary"
            >
              <Link
                href="https://khcrf.org/networking.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Begin Free Registration
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {!session ? (
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-md">
            <CarbonApiForm />
          </div>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Integration Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <GenerateApi />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
