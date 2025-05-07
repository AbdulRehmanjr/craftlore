import Image from "next/image";
import { TypedComponent } from "~/components/animations/typo";
import { SectionContainer } from "~/components/common/section-container";
import { TYPETEXT } from "~/constants/data";

export const WelcomeCard = () => {
  return (
    <SectionContainer className="relative w-full my-8 sm:my-12 md:my-16 lg:my-24">
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        <article className="flex flex-col items-center space-y-4 sm:space-y-6">
          <div className="relative mx-auto h-80 w-64 sm:h-96 sm:w-72 md:h-[28rem] md:w-80 lg:h-[32rem] lg:w-[22rem]">
            <Image
              src="/images/pic2.png"
              alt="Craft Guru illustration"
              fill
              className="duration-2000 transform animate-ghoomo object-contain transition-all"
              priority
            />
          </div>
          <h2 className="text-center font-montserrat text-3xl font-extrabold text-primary sm:text-4xl md:text-5xl lg:text-6xl">
            Craft Guru
          </h2>
          <TypedComponent
            text={TYPETEXT}
            className="mb-3 h-16 text-center font-montserrat text-xs font-extrabold text-secondary sm:mb-4 sm:h-20 sm:text-sm md:h-24 md:text-base"
          />
          <div className="px-3 text-sm leading-relaxed sm:px-4 sm:text-base md:text-lg lg:text-xl">
            <p className="mb-4">
              We are the driving force behind Craftlore, bringing together the
              expertise of a diverse group of professionals—
              <strong>
                Ethnographers, Material Scientists, Craft Educators, Cultural
                Theorists, Art Historians, Designers, Sociologists,
                Environmentalists, and Technologists
              </strong>
              . United in our mission, we are committed to preserving and advancing
              the timeless heritage of Kashmiri crafts for future generations.
            </p>
            <p className="mb-4">
              At <b>Craft Guru</b>, we operate on a non-commercial basis under the
              mandate of the <b>Hamadan Craft Revival Foundation</b>, a dedicated
              craft policy think tank for Kashmir. We do not sell, endorse, or
              promote any business, nor do we influence your decisions. Instead, we
              empower you with knowledge and tools to make informed, independent
              choices, free from external pressure or bias.
            </p>
            <p>
              <b>Empower Your Choices</b>, at no cost, with <b>Craft Guru</b>. We
              connect you with the finest Kashmiri artisans, ensuring each craft is
              verified, sustainable, and transparent. Whether you&apos;re seeking
              <strong> Authenticity Guidance</strong>, access to the
              <b> Craft Registry</b>, or <strong>Value Estimation</strong>, we
              ensure your decisions are intentional and well-informed.
            </p>
          </div>
        </article>

        <article className="group flex flex-col justify-between rounded-lg bg-primary px-5 py-8 text-white shadow-lg transition-all hover:shadow-xl sm:px-6 sm:py-10 md:px-8 md:py-12 lg:py-14">
          <div>
            <header className="mb-6 text-center sm:mb-8">
              <h2 className="font-montserrat text-xl font-extrabold text-secondary sm:text-2xl md:text-3xl lg:text-4xl">
                Welcome to Craftlore
              </h2>
              <h6 className="mt-3 font-montserrat text-sm font-extrabold sm:text-base md:text-lg">
                Eliminating Middleman, Empowering Artisans/ Buyers
              </h6>
            </header>

            <p className="mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg md:text-xl lg:text-2xl">
              Craftlore is a cutting-edge, <b>Non-Commercial</b> digital platform
              engineered for the in-depth analysis of Kashmir&apos;s <b>700+</b>{" "}
              year craft heritage. By seamlessly blending historical, artistic, and
              scientific frameworks, Craftlore sets the benchmark for authenticity
              and transparency.
            </p>
          </div>

          <ul className="space-y-4 text-base sm:space-y-6 sm:text-lg md:text-xl lg:text-2xl">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 text-2xl text-secondary">•</span>
              <span>
                Craftlore uses advanced <b>Geo-Certification protocols</b> to
                ensure precise geospatial verification of craft origins,
                delivering unmatched accuracy in counterfeit prevention.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 text-2xl text-secondary">•</span>
              <span>
                Our <b>Craft Profile Registry</b> stands as a dynamic digital
                powerhouse, delivering in-depth insights into the origins,
                techniques, & materials of authentic Kashmiri crafts, empowering
                instant recognition of imitations and safeguarding heritage with
                precision.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 text-2xl text-secondary">•</span>
              <span>
                We track the <b>Carbon Footprint</b> of each craft, enabling
                artisans to embrace sustainable practices and empowering consumers
                to choose eco-friendly products, collectively reducing impact.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 text-2xl text-secondary">•</span>
              <span>
                Craftlore offers an <b>Immutable Blockchain Record</b> of every
                craft&apos;s journey, guaranteeing authenticity, preventing
                counterfeits, and ensuring sustainability, empowering consumers
                with confidence.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 text-2xl text-secondary">•</span>
              <span>
                Our <b>Valuation Tool-Calculator</b> delivers fair,{" "}
                <b>Dynamic Data-Driven Pricing</b> for authentic Kashmiri crafts,
                providing accurate pricing for buyers and fair compensation for
                artisans.
              </span>
            </li>
          </ul>
        </article>
      </div>
    </SectionContainer>
  );
};