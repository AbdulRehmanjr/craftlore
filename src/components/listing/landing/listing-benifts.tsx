import { LISTINGBENEFITS } from "~/constants/data";
import { BusinessListing } from "~/components/listing/landing/business-listing";

export const ListingBenefits = () => {
  return (
    <div className="bg-[#e5edf7] pb-8 pt-16 md:pb-10 md:pt-20">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:gap-6 lg:px-8">
        <h2 className="font-montserrat text-3xl text-primary md:text-4xl">
          Benefits of the Craftlore Trade Registry Project
        </h2>
        <p className="font-opensans text-lg md:text-xl">
          The Craftlore Trade Registry Project offers significant advantages to
          various stakeholders in the Kashmiri handicraft sector, including the
          buyer community, artisans, businesses, and institutions. Here&apos;s
          how each group benefits:
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {LISTINGBENEFITS.map((listing, index) => (
            <div
              className="group grid gap-6 rounded-lg bg-white p-6 shadow-md transition-colors duration-300 hover:bg-primary md:gap-8"
              key={index}
            >
              <h3 className="font-montserrat text-xl group-hover:text-white md:text-2xl">
                {listing.title}
              </h3>
              {listing.sub.map((sub, index) => (
                <div
                  className="grid gap-2 font-opensans text-sm group-hover:text-white md:text-base"
                  key={index}
                >
                  <h4 className="font-bold">{sub.title}</h4>
                  <p>{sub.des}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <BusinessListing />
    </div>
  );
};
