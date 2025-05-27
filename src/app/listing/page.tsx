import { Tabs, TabsContent, TabsList } from "~/components/ui/tabs";
import { ArtisanInfo } from "~/components/listing/artisans/home";
import { BusinessInfo } from "~/components/listing/business/home";
import { InstituteInfo } from "~/components/listing/institute/home";
import { TabSwitcher } from "~/components/listing/tab-switcher";
import { TraderRegistryInfo } from "~/components/listing/landing/intro";
import { AnalysisInfo } from "~/components/listing/landing/analysis-info";
import { ListingBenefits } from "~/components/listing/landing/listing-benifts";
import { RegisterInfo } from "~/components/listing/landing/register-info";
import { RegistrationProcess } from "~/components/listing/landing/registration-process";

interface PageProps {
  searchParams: {
    tab?: string;
    type?: string;
  };
}

export default function ListingPage({ searchParams }: PageProps) {
  const currentTab = searchParams.tab ?? "registry";
  const listingType = searchParams.type ?? "";

  return (
    <Tabs value={currentTab} className="w-full">
      <TabsList className="mx-6 grid h-auto grid-cols-4 gap-4 bg-transparent lg:container">
        <TabSwitcher
          value="registry"
          type={listingType}
          className="col-span-4 flex h-[150px] flex-col items-center gap-2 rounded-md border-none bg-white p-6 text-center text-gray-900 shadow-md hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white lg:col-span-1"
        >
          <h3 className="whitespace-pre-line font-montserrat text-xl font-bold">
            TRADE REGISTRY
          </h3>
          <p className="whitespace-pre-line font-opensans text-sm leading-tight">
            Verified Artisans, Ranked Businesses, Ethical Trade
          </p>
        </TabSwitcher>
        <TabSwitcher
          value="artisans"
          type={listingType}
          className="col-span-4 flex h-[150px] flex-col items-center gap-2 rounded-md bg-white p-6 text-center text-gray-900 shadow-md hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white lg:col-span-1"
        >
          <p className="whitespace-pre-line font-opensans text-sm">
            Ranking, Listing, Blacklisted
          </p>
          <h3 className="font-montserrat text-xl font-bold">ARTISANS</h3>
          <p className="whitespace-pre-line font-opensans text-sm">
            Fairness & Recognition
          </p>
        </TabSwitcher>
        <TabSwitcher
          value="businesses"
          type={listingType}
          className="col-span-4 flex h-[150px] flex-col items-center gap-2 rounded-md bg-white p-6 text-center text-gray-900 shadow-md hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white lg:col-span-1"
        >
          <p className="whitespace-pre-line font-opensans text-sm">
            Ranking, Listing, Blacklisted
          </p>
          <h3 className="font-montserrat text-xl font-bold">BUSINESSES</h3>
          <p className="whitespace-pre-line font-opensans text-sm">
            Standards & Trust
          </p>
        </TabSwitcher>
        <TabSwitcher
          value="institutions"
          type={listingType}
          className="col-span-4 flex h-[150px] flex-col items-center gap-2 rounded-md bg-white p-6 text-center text-gray-900 shadow-md hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white lg:col-span-1"
        >
          <p className="whitespace-pre-line font-opensans text-sm">
            Ranking, Listing, Blacklisted
          </p>
          <h3 className="font-montserrat text-xl font-bold">INSTITUTIONS</h3>
          <p className="whitespace-pre-line font-opensans text-sm">
            Transparency & Governance
          </p>
        </TabSwitcher>
      </TabsList>

      <TabsContent value="registry" className="mt-6 grid gap-16 lg:gap-32">
        <TraderRegistryInfo />
        <ListingBenefits />
        <RegisterInfo />
        <RegistrationProcess />
        <AnalysisInfo />
      </TabsContent>
      <TabsContent value="artisans" className="mt-6">
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <ArtisanInfo />
        </div>
      </TabsContent>
      <TabsContent value="businesses" className="mt-6">
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <BusinessInfo />
        </div>
      </TabsContent>
      <TabsContent value="institutions" className="mt-6">
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <InstituteInfo />
        </div>
      </TabsContent>
    </Tabs>
  );
}
