import Link from "next/link";
import { Container } from "~/components/common/container";
import { NETWORK } from "~/constants/data";

export const SupportNetwork = () => {
  return (
    <section className="bg-primary py-8 sm:py-12 md:py-16 lg:py-20">
      <Container>
        <article className="space-y-6 sm:space-y-8 rounded-b-lg border-t-4 border-secondary bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
          <header className="space-y-2 sm:space-y-4">
            <p className="font-montserrat text-base sm:text-lg md:text-xl text-primary">
              Who Support our Initiative
            </p>
            <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-[40px] lg:leading-[48px] font-bold text-secondary">
              Craftlore Formidable Support Network
            </h2>
          </header>

          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            <p>
              In the rapidly evolving landscape of the global craft industry,
              the success of Craftlore&apos;s mission is driven by the unwavering
              strength and collaboration of a dedicated support network. At the
              heart of our initiative lies an influential coalition of partners
              who share our commitment to preserving the authenticity of
              Kashmiri crafts and revolutionizing Artisan Direct Market Access.
              Together, we are eliminating the long-standing barriers posed by
              middlemen and counterfeit trade, creating a transparent and fair
              marketplace for artisans.
            </p>
            <p>
              Our formidable support network is further reinforced by essential
              contributions from business, administrative, technological, and
              marketing partners, ensuring that Craftlore continues to grow and
              thrive on the global stage.
            </p>
            <p>
              As a key pillar of business support,{" "}
              <strong>B2B Connect USA</strong> provides the essential
              business-to-business connections that fuel Craftlore&apos;s expansion.
              By forging strategic collaborations between Kashmiri artisans and
              international markets, they ensure that the craft sector reaches
              its full potential in the global economy. Their contributions
              allow us to scale operations, increase artisan visibility, and
              enhance market access worldwide.
            </p>
            <p>
              <strong>The Hamdan Craft Revival Foundation</strong> is the
              operational backbone of our initiative. With a focus on
              administrative excellence, policy advocacy, and organizational
              leadership, the Foundation plays a pivotal role in the seamless
              functioning of Craftlore. Their efforts ensure that our mission is
              not only preserved but advanced through strategic partnerships,
              thoughtful leadership, and a vision of empowering artisans through
              cultural preservation and fair trade policies. Their advocacy for
              Kashmiri crafts sets the stage for Craftlore&apos;s enduring impact in
              both local and international arenas.
            </p>
            <p>
              At the intersection of technology and craft preservation,{" "}
              <strong>Prime Logic Solutions USA</strong> empowers Craftlore with
              state-of-the-art digital tools and technological innovations. From
              blockchain technology to geo-certification protocols, Prime Logic
              equips us with cutting-edge solutions that guarantee the
              authenticity and traceability of Kashmiri crafts. Their
              technological expertise ensures that every craft on our platform
              is not only verified but protected against counterfeit threats,
              creating a secure and transparent marketplace for artisans and
              buyers alike.
            </p>
            <p>
              A visionary partner in handicraft marketing and cultural tourism,{" "}
              <strong>ArtStay</strong> connects craft enthusiasts and art lovers
              from around the world, positioning Kashmiri artisans at the center
              of authentic and sustainable travel experiences. By integrating
              the rich history of Kashmiri craftsmanship with global tourism,
              ArtStay promotes cultural exchange and elevates artisans on a
              global stage. Their marketing efforts help bring the stories,
              traditions, and artistry of Kashmiri crafts to a broader audience,
              creating meaningful connections between artisans and those who
              appreciate the true value of handcrafted art.
            </p>
          </div>
        </article>

        <div className="relative -mt-6 sm:-mt-8 md:-mt-10 px-2 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
            {NETWORK.map((network, index) => (
              <article
                key={index}
                className="group flex min-h-[8rem] sm:min-h-[10rem] flex-col justify-between rounded-lg border-2 border-gray-900 bg-white p-3 sm:p-4 md:p-5 transition-all duration-300 hover:border-white hover:bg-primary"
              >
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-montserrat text-base sm:text-lg font-semibold group-hover:text-white">
                    {network.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed group-hover:text-white">
                    ({network.description})
                  </p>
                </div>
                <Link
                  className="text-xs sm:text-sm transition-colors group-hover:text-secondary"
                  href={network.redirect}
                >
                  {network.link}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};