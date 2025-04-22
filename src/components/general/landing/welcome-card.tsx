import Image from "next/image";
import { TypedComponent } from "~/components/animations/typo";
import { SectionContainer } from "~/components/common/section-container";
import { TYPETEXT } from "~/constants/data";

export const WelcomeCard = () => {
  return (
    <SectionContainer className="my-16 grid grid-cols-1 gap-8 sm:my-24 md:my-32 lg:grid-cols-2 lg:gap-12">
      <article className="flex flex-col items-center space-y-6">
        <Image
          src="/images/pic2.png"
          alt="Craft Guru illustration"
          width={300}
          height={384}
          className="transform animate-ghoomo transition-all duration-2000"
          priority
        />
        <h2 className="text-center font-montserrat text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Craft Guru
        </h2>
        <TypedComponent
          text={TYPETEXT}
          className="mb-4 h-[5rem] text-center font-montserrat text-xs font-extrabold text-secondary sm:h-[6rem] sm:text-sm md:h-[7rem] md:text-base"
        />
        <p className="px-4 text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl">
          We are the driving force behind Craftlore, bringing together the
          expertise of a diverse group of professionals—
          <strong>
            Ethnographers, Material Scientists, Craft Educators, Cultural
            Theorists, Art Historians, Designers, Sociologists,
            Environmentalists, and Technologists
          </strong>
          . United in our mission, we are committed to preserving and advancing
          the timeless heritage of Kashmiri crafts for future generations.
          <br />
          <br />
          At <b>Craft Guru</b>, we operate on a non-commercial basis under the
          mandate of the <b>Hamadan Craft Revival Foundation</b>, a dedicated
          craft policy think tank for Kashmir. We do not sell, endorse, or
          promote any business, nor do we influence your decisions. Instead, we
          empower you with knowledge and tools to make informed, independent
          choices, free from external pressure or bias.
          <br />
          <br />
          <b>Empower Your Choices</b>, at no cost, with <b>Craft Guru</b>. We
          connect you with the finest Kashmiri artisans, ensuring each craft is
          verified, sustainable, and transparent. Whether you&apos;re seeking
          <strong> Authenticity Guidance</strong>, access to the
          <b> Craft Registry</b>, or <strong>Value Estimation</strong>, we
          ensure your decisions are intentional and well-informed.
        </p>
      </article>

      <article className="group rounded-lg bg-primary px-4 py-8 text-white shadow-lg transition-all hover:shadow-xl sm:px-6 sm:py-10">
        <header className="mb-6 text-center">
          <h2 className="font-montserrat text-xl font-extrabold text-secondary sm:text-2xl md:text-3xl lg:text-4xl">
            Welcome to Craftlore
          </h2>
          <h6 className="mt-2 font-montserrat text-sm font-extrabold sm:text-base">
            Eliminating Middleman, Empowering Artisans/ Buyers
          </h6>
        </header>

        <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
          Craftlore is a cutting-edge, <b>Non-Commercial</b> digital platform
          engineered for the in-depth analysis of Kashmir&apos;s <b>700+</b> year
          craft heritage. By seamlessly blending historical, artistic, and
          scientific frameworks, Craftlore sets the benchmark for authenticity
          and transparency.
        </p>

        <ul className="space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 text-secondary">•</span>
            <span>
              Craftlore uses advanced <b>Geo-Certification protocols</b> to ensure
              precise geospatial verification of craft origins, delivering
              unmatched accuracy in counterfeit prevention.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 text-secondary">•</span>
            <span>
              Our <b>Craft Profile Registry</b> stands as a dynamic digital
              powerhouse, delivering in-depth insights into the origins,
              techniques, & materials of authentic Kashmiri crafts, empowering
              instant recognition of imitations and safeguarding heritage with
              precision.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 text-secondary">•</span>
            <span>
              We track the <b>Carbon Footprint</b> of each craft, enabling
              artisans to embrace sustainable practices and empowering consumers
              to choose eco-friendly products, collectively reducing impact.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 text-secondary">•</span>
            <span>
              Craftlore offers an <b>Immutable Blockchain Record</b> of every
              craft&apos;s journey, guaranteeing authenticity, preventing
              counterfeits, and ensuring sustainability, empowering consumers
              with confidence.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 text-secondary">•</span>
            <span>
              Our <b>Valuation Tool-Calculator</b> delivers fair,{" "}
              <b>Dynamic Data-Driven Pricing</b> for authentic Kashmiri crafts,
              providing accurate pricing for buyers and fair compensation for
              artisans.
            </span>
          </li>
        </ul>
      </article>
    </SectionContainer>
  );
};
