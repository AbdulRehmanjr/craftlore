import { api, HydrateClient } from "~/trpc/server";
import { Suspense } from "react";
import { InstituteList } from "~/components/listing/institute/institue-list";
import { InstituteTable } from "~/components/listing/institute/institute-table";
import { ConnectionSection } from "~/components/listing/connection-info";

export const InstituteInfo = async () => {
  void api.register.getInstitutes.prefetch();
  return (
    <HydrateClient>
      <div className="mx-6 lg:container lg:mt-8">
        <ConnectionSection />
        <div className="grid gap-10 lg:gap-32">
          <InstituteList />
          <Suspense fallback={<div>Loading......</div>}>
            <InstituteTable />
          </Suspense>
        </div>
      </div>
    </HydrateClient>
  );
};
