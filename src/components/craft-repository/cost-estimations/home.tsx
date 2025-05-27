import Image from "next/image"
import { EstimationForm } from "~/components/craft-repository/cost-estimations/estimation-form"

export const CostEstimationHome = () => {
    return (
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2">
            <article className="space-y-6 sm:space-y-8">
                <div className="relative aspect-square w-full max-w-[25rem] mx-auto">
                    <Image
                        src="/images/CO2.png"
                        alt="Carbon footprint illustration"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="space-y-4 sm:space-y-6">
                    <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                        Welcome to CraftLore&apos;s Kashmir Craft Price Valuation Registry & Estimator
                    </h2>
                    <p className="font-opensans text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                        Discover the true value of authentic Kashmiri crafts with our advanced Craft Price Valuation Tool. Designed to bring transparency, fairness, and accuracy to the handicraft industry, this tool empowers artisans, buyers, and industry professionals by providing real-time, data-driven price evaluations.
                    </p>
                    <h3 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                        CraftLore Craft Price Valuation Tool
                    </h3>
                    <p className="font-opensans text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                        In a world filled with counterfeit goods, accurate price estimation for Kashmiri crafts is essential. Our Kashmir Craft Price Valuation Registry & Estimator eliminates the middleman by using data analytics, blockchain verification, and AI-driven market intelligence. This tool ensures fair pricing by considering material quality, authenticity, and cultural significance. With features like GI tagging, blockchain traceability, and historical price trends, fairness is guaranteed. Artisans receive fair compensation directly, and buyers gain confidence in purchasing authentic, high-quality products. The system uses multi-dimensional metrics to create a comprehensive pricing model.
                    </p>
                    <h3 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                        Why Craft Valuation Matters
                    </h3>
                    <ul className="space-y-3 sm:space-y-4">
                        <li className="font-opensans text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                            <strong>Protects Authenticity</strong>: Helps distinguish genuine crafts from counterfeits.
                        </li>
                        <li className="font-opensans text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                            <strong>Empowers Artisans</strong>: Ensures artisans are fairly compensated.
                        </li>
                        <li className="font-opensans text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                            <strong>Ensures Fair Market Pricing</strong>: Transparent pricing benefits both buyers and sellers.
                        </li>
                        <li className="font-opensans text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                            <strong>Boosts Consumer Confidence</strong>: Buyers trust they&apos;re paying a fair price for authenticity.
                        </li>
                    </ul>
                </div>
            </article>

            <article className="flex flex-col gap-4 sm:gap-6 rounded-xl bg-primary p-4 sm:p-6 shadow-lg">
                <header className="space-y-3 text-center">
                    <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-secondary leading-tight">
                        Kashmir Handicraft Price Valuation System
                    </h2>
                    <p className="font-montserrat text-lg sm:text-xl text-white/90">
                        Get real-time transparent pricing solutions
                    </p>
                </header>
                <EstimationForm />
            </article>
        </div>
    )
}