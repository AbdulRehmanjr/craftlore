import { ArtisanList } from "~/components/listing/artisans/artisan-list";
import { api, HydrateClient } from "~/trpc/server";
import { ArtisanTable } from "~/components/listing/artisans/artisan-table";
import { ConnectionSection } from "~/components/listing/connection-info";

export const ArtisanInfo = async () => {
  void api.register.getArtisans.prefetch();
  return (
    <HydrateClient>
      <div className="mx-6 lg:container lg:mt-8">
        <ConnectionSection />
        <div className="grid gap-10 lg:gap-32">
          <ArtisanList />
          <ArtisanTable />
        </div>
      </div>
    </HydrateClient>
  );
};
