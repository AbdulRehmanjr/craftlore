import { BUSINESSLISTINGS } from "~/constants/data"

export const BusinessListing = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 lg:pt-20">
            <div className="grid gap-4 md:gap-6">
                <h2 className="text-3xl md:text-4xl font-montserrat text-primary">Listing of Artisans, Businesses, and Institutions</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {BUSINESSLISTINGS.map((listing, index) => (
                        <div
                            className="grid gap-6 md:gap-8 rounded-lg shadow-md bg-white group hover:bg-primary p-6 transition-all duration-300"
                            key={index}
                        >
                            <h3 className="text-xl md:text-2xl font-montserrat group-hover:text-white">{listing.title}</h3>
                            <p className="text-sm md:text-base font-opensans group-hover:text-white">{listing.desc}</p>
                            
                            <div className="grid gap-2 md:gap-3">
                                <h3 className="text-lg md:text-xl font-montserrat group-hover:text-white">Listing Criteria</h3>
                                {listing.criteria.map((cr, index) => (
                                    <p
                                        className="text-sm md:text-base font-opensans group-hover:text-white"
                                        key={index}
                                    >
                                        <b>{cr.title}</b>: {cr.desc}
                                    </p>
                                ))}
                            </div>
                            
                            <div className="grid gap-2 md:gap-3">
                                <h3 className="text-lg md:text-xl font-montserrat group-hover:text-white">Listing Categories</h3>
                                {listing.categories.map((cr, index) => (
                                    <p
                                        className="text-sm md:text-base font-opensans group-hover:text-white"
                                        key={index}
                                    >
                                        <b>{cr.title}</b>: {cr.desc}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}