import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TradeRegistry } from "~/components/listing/trade-registry";
import { ArtisanInfo } from "~/components/listing/artisans/home";
import { BusinessInfo } from "~/components/listing/business/home";
import { InstituteInfo } from "~/components/listing/institute/home";
export default function ListingPage() {
  return (
    <Tabs defaultValue="registry" className="w-full">
      <TabsList className="mx-6 grid h-auto grid-cols-4 gap-4 bg-transparent lg:container">
        <TabsTrigger
          value="registry"
          className="col-span-4 flex h-[150px] flex-col items-center gap-2 rounded-md border-none bg-white p-6 text-center text-gray-900 shadow-md hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white lg:col-span-1"
        >
          <h3 className="whitespace-pre-line font-montserrat text-xl font-bold">
            TRADE REGISTRY
          </h3>
          <p className="whitespace-pre-line font-opensans text-sm leading-tight">
            Verified Artisans, Ranked Businesses, Ethical Trade
          </p>
        </TabsTrigger>
        <TabsTrigger
          value="artisans"
          className="col-span-4 flex h-[150px] flex-col items-center gap-2 rounded-md bg-white p-6 text-center text-gray-900 shadow-md hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white lg:col-span-1"
        >
          <p className="whitespace-pre-line font-opensans text-sm">
            Ranking, Listing, Blacklisted
          </p>
          <h3 className="font-montserrat text-xl font-bold">ARTISANS</h3>
          <p className="whitespace-pre-line font-opensans text-sm">
            Fairness & Recognition
          </p>
        </TabsTrigger>
        <TabsTrigger
          value="businesses"
          className="col-span-4 flex h-[150px] flex-col items-center gap-2 rounded-md bg-white p-6 text-center text-gray-900 shadow-md hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white lg:col-span-1"
        >
          <p className="whitespace-pre-line font-opensans text-sm">
            Ranking, Listing, Blacklisted
          </p>
          <h3 className="font-montserrat text-xl font-bold">BUSINESSES</h3>
          <p className="whitespace-pre-line font-opensans text-sm">
            Standards & Trust
          </p>
        </TabsTrigger>
        <TabsTrigger
          value="institutions"
          className="col-span-4 flex h-[150px] flex-col items-center gap-2 rounded-md bg-white p-6 text-center text-gray-900 shadow-md hover:bg-gray-50 data-[state=active]:bg-secondary data-[state=active]:text-white lg:col-span-1"
        >
          <p className="whitespace-pre-line font-opensans text-sm">
            Ranking, Listing, Blacklisted
          </p>
          <h3 className="font-monstreat text-xl font-bold">INSTITUTIONS</h3>
          <p className="whitespace-pre-line font-opensans text-sm">
            Transparency & Governance
          </p>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="registry" className="mt-6">
        <TradeRegistry />
      </TabsContent>
      <TabsContent value="artisans" className="mt-6">
        <div className="bg-white p-6">
          <ArtisanInfo />
        </div>
      </TabsContent>
      <TabsContent value="businesses" className="mt-6">
        <div className="bg-white p-6">
          <BusinessInfo />
        </div>
      </TabsContent>
      <TabsContent value="institutions" className="mt-6">
        <div className="bg-white p-6">
          <InstituteInfo />
        </div>
      </TabsContent>
    </Tabs>
  );
}
