import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";
import { BusinessCard } from "~/components/listing/business/business-card";

interface RankSectionProps {
  title: string;
  color: string;
  businesses: Array<{
    user: {
      fullName: string;
      address: string;
    };
    businessType: string;
    businessEmail: string;
    businessEmployee: number;
    businessMarket: string;
    businessStructure:string
    businessWebsite:string
    businessNetwork:string
    yearOfOperation: number;
  }>;
}

const RankSection = ({ title, color, businesses }: RankSectionProps) => (
  <div className="space-y-4">
    {businesses.length > 0 && (
      <h3 className="text-2xl font-bold text-gray-800 px-4">
        {title} <span className="text-gray-400">Ranked Businesses</span>
      </h3>
    )}
    <div
      className={cn("grid gap-6 p-4", {
        "grid-cols-1": businesses.length === 1 || businesses.length === 0,
        "grid-cols-1 lg:grid-cols-2": businesses.length === 2,
        "grid-cols-1 lg:grid-cols-3": businesses.length >= 3,
      })}
    >
      {businesses.map((business, index) => (
        <BusinessCard
          key={index}
          rankTitle={title}
          rankingColor={color}
          business={business}
        />
      ))}
    </div>
  </div>
);

export const BusinessList = async () => {
  const businesses = await api.register.getTopBusiness();

  return (
    <div className="mx-4 lg:container space-y-8">
      <RankSection
        title="Gold"
        color="bg-yellow-300 text-yellow-800"
        businesses={businesses.gold}
      />
      <RankSection
        title="Silver"
        color="bg-gray-300 text-gray-800"
        businesses={businesses.silver}
      />
      <RankSection
        title="Bronze"
        color="bg-amber-500 text-amber-900"
        businesses={businesses.bronze}
      />
    </div>
  );
};
