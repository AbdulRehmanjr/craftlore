import { Container } from "~/components/common/container";

export const InfoCard = () => {
  return (
    <section className="bg-[#e5edf7] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <Container className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 md:space-y-10">
        <header className="space-y-2 sm:space-y-3">
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Craftlore: A Preparatory School for Buyers
          </h2>
          <h3 className="font-montserrat text-lg sm:text-xl md:text-2xl font-semibold text-secondary">
            One Platform for Everything About Kashmiri Crafts
          </h3>
        </header>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            <strong>Your Ultimate Buyer&apos;s Academy-Craftlore</strong>, preparing you to
            make confident, informed decisions from anywhere. We empower you
            with the insights and expertise needed to navigate the global Kashmir 
            Handicraft marketplace with precision, ensuring every
            purchase reflects authenticity, integrity, and trust.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            At Craftlore, we are not mandated to sell or recommend businesses.
            Our commitment lies in educating and empowering you with profound
            insights into the Kashmiri crafts industry. Our platform provides
            detailed{" "}
            <strong>
              Kashmir Handicraft Business or Companies Listings and Evaluations
            </strong>
            , alongside a comprehensive{" "}
            <strong>Blacklisted Businesses/ Company Database</strong>, ensuring complete
            transparency at every stage.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Craftlore employs a robust verification system, integrating data
            from trusted regulatory bodies including{" "}
            <strong>
              Better Business Bureau, Trustpilot, Consumer Financial Protection
              Bureau, Federal Trade Commission
            </strong>
            , and <strong>Securities & Exchange Commission</strong>, as well as{" "}
            <strong>Local Business Registries</strong>, review platforms and advanced
            tools like <strong>Brandwatch, Hootsuite, Lexis Nexis, Ripoff Report</strong>,
            and more. We arm you with the knowledge and tools to make confident,
            independent decisions, free from commercial influence and false
            narratives, allowing buyers like you to make educated, independent
            decisions.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            We tackle the longstanding issues of <strong>Counterfeit Products</strong> and{" "}
            <strong>Middlemen Exploitation</strong> in the Kashmiri handicraft industry.
            Craftlore utilizes advanced technology to ensure direct connections
            between buyers and artisans, providing traceability and verification
            for every handmade product. Together, we can eliminate middlemen and
            counterfeit traders, preserving the true essence of Kashmiri
            craftsmanship. By empowering yourself with knowledge, you ensure
            that each choice supports authenticity and elevates the artisans who
            pour their passion into every creation. We are committed to
            revolutionizing the Kashmir craft industry with innovative tools,
            eliminating distortions, and restoring the value of genuine Kashmiri
            craftsmanship & its ancient techniques for future generations.
          </p>
        </div>
      </Container>
    </section>
  );
};