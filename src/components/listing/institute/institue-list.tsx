import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";
import { InstituteCard } from "~/components/listing/institute/intitute-card";

interface RankSectionProps {
  title: string;
  color: string;
  institutes: Array<{
    user: {
      fullName: string;
      address: string;
    };
    instituteType: string;
    instituteEmail: string;
    instituteRep: string;
    repDes: string;
    yearOfOperation?: number;
  }>;
}

const RankSection = ({ title, color, institutes }: RankSectionProps) => (
  <div className="space-y-4">
    {institutes.length > 0 && (
      <h3 className="text-2xl font-bold text-gray-800 px-4">
        {title} <span className="text-gray-400">Ranked Institutes</span>
      </h3>
    )}
    <div
      className={cn("grid gap-6 p-4", {
        "grid-cols-1": institutes.length === 1 || institutes.length === 0,
        "grid-cols-1 lg:grid-cols-2": institutes.length === 2,
        "grid-cols-1 lg:grid-cols-3": institutes.length >= 3,
      })}
    >
      {institutes.map((institute, index) => (
        <InstituteCard
          key={index}
          rankTitle={title}
          rankingColor={color}
          institute={institute}
        />
      ))}
    </div>
  </div>
);

export const InstituteList = async () => {
  const institutes = await api.register.getTopInstitutes();

  return (
    <div className="mx-4 lg:container space-y-8">
      <RankSection
        title="Gold"
        color="bg-yellow-300 text-yellow-800"
        institutes={institutes.gold}
      />
      <RankSection
        title="Silver"
        color="bg-gray-300 text-gray-800"
        institutes={institutes.silver}
      />
      <RankSection
        title="Bronze"
        color="bg-amber-500 text-amber-900"
        institutes={institutes.bronze}
      />
    </div>
  );
};