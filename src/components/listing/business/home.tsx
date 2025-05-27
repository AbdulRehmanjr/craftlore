import { api, HydrateClient } from "~/trpc/server";
import { BusinessList } from "~/components/listing/business/business-list";
import { BusinessTable } from "~/components/listing/business/business-table";
import { ConnectionSection } from "~/components/listing/connection-info";

export const BusinessInfo = async () => {
  void api.register.getBusinesses.prefetch();
  return (
    <HydrateClient>
      <div className="mx-6 lg:container lg:mt-8">
        <ConnectionSection />
        <div className="grid gap-10 lg:gap-32">
          <BusinessList />
          <BusinessTable />
        </div>
      </div>
    </HydrateClient>
  );
};
