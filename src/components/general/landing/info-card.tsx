import { Container } from "~/components/common/container";

export const InfoCard = () => {
  return (
    <section className="bg-[#e5edf7] py-16 sm:py-24 md:py-32">
      <Container className="space-y-8">
        <header className="space-y-3">
          <h2 className="font-montserrat text-3xl font-bold text-primary sm:text-4xl md:text-[40px] md:leading-[48px]">
            Craftlore: A Preparatory School for Buyers
          </h2>
          <h3 className="font-montserrat text-xl font-semibold text-secondary sm:text-2xl">
            One Platform for Everything About Kashmiri Crafts
          </h3>
        </header>

        <div className="space-y-6 sm:space-y-8">
          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            <strong>Your Ultimate Buyer&apos;s Academy-Craftlore</strong>, preparing you to
            make confident, informed decisions from anywhere. We empower you
            with the insights and expertise needed to navigate the global Kashmir 
            Handicraft marketplace with precision, ensuring every
            purchase reflects authenticity, integrity, and trust.
          </p>

          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
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

          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
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

          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
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
