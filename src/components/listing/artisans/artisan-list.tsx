import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";
import { ArtisanCard } from "~/components/listing/artisans/artisan-card";

interface RankSectionProps {
  title: string;
  color: string;
  artisans: Array<{
    user: {
      fullName: string;
      address: string;
    };
    craftSpecialty: string;
    craftSkill: string;
    craftAward: string;
    craftExperience: number;
  }>;
}

const RankSection = ({ title, color, artisans }: RankSectionProps) => (
  <div className="space-y-4">
    {artisans.length > 0 && (
      <h3 className="text-2xl font-bold text-gray-800 px-4">
        {title} <span className="text-gray-400">Ranked Artisans</span>
      </h3>
    )}
    <div
      className={cn("grid gap-6 p-4", {
        "grid-cols-1": artisans.length === 1 || artisans.length === 0,
        "grid-cols-1 lg:grid-cols-2": artisans.length === 2,
        "grid-cols-1 lg:grid-cols-3": artisans.length >= 3,
      })}
    >
      {artisans.map((artisan, index) => (
        <ArtisanCard
          key={index}
          rankTitle={title}
          rankingColor={color}
          artisan={artisan}
        />
      ))}
    </div>
  </div>
);


export const ArtisanList = async () => {
  const artisans = await api.register.getTopArtisans();

  return (
    <div className="mx-4 lg:container space-y-8">
      <RankSection
        title="Gold"
        color="bg-yellow-300 text-yellow-800"
        artisans={artisans.gold}
      />
      <RankSection
        title="Silver"
        color="bg-gray-300 text-gray-800"
        artisans={artisans.silver}
      />
      <RankSection
        title="Bronze"
        color="bg-amber-500 text-amber-900"
        artisans={artisans.bronze}
      />
    </div>
  );
};
