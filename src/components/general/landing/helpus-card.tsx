import Image from "next/image";
import { SectionContainer } from "~/components/common/section-container";
import { HELPUS } from "~/constants/data";

export const HelpUs = () => {
  return (
    <SectionContainer className="py-12 sm:py-16 md:py-20">
      <header className="space-y-4">
        <h2 className="font-montserrat text-3xl font-bold text-primary sm:text-4xl md:text-[40px] md:leading-[48px]">
          Help Us in Our Fight
        </h2>
        <h3 className="font-montserrat text-lg sm:text-xl">
          Craftlore&apos;s fight to protect Kashmir&apos;s craft identity and
          artisans&apos; livelihoods against the global dilution of our heritage,
          fueled by the legacy of the 19th century Anglicization of Kashmir name
          also known as &quot;Cashmere Conspiracy&quot;!
        </h3>
        <h3 className="font-montserrat text-2xl font-semibold text-secondary sm:text-[30px] sm:leading-[40px]">
          Europeans Rebranded Kashmir&apos;s Heritage and China&apos;s Profits Today
        </h3>
      </header>

      <div className="mt-8 space-y-6 sm:mt-12 sm:space-y-8">
        <p className="text-base leading-relaxed sm:text-lg md:text-xl">
          The anglicization of Kashmir into &quot;Cashmere&quot; in the 19th
          century marked the beginning of a strategic and ongoing exploitation
          of Kashmir&apos;s rich cultural heritage. British colonial powers,
          recognizing the global allure of Kashmir&apos;s craft and craftmanship,
          deliberately rebranded it as &quot;Cashmere&quot;, stripping away its
          cultural significance to make it more marketable in Europe and beyond.
          This was not merely a linguistic change, but a calculated move in an
          economic war to control and profit from Kashmir&apos;s ancient
          craftsmanship. By detaching the product from its origins, Britain
          paved the way for mass production and industrialization in Europe,
          diluting the exclusivity and authenticity of Kashmiri Craft. What
          followed was a flood of machine-made imitations that undermined the
          value of the original craft, effectively launching a long-term battle
          for market dominance that continues today.
        </p>
        <p className="text-base leading-relaxed sm:text-lg md:text-xl">
          In the modern era, this war has found a new player <strong>China</strong>. Now
          the world&apos;s largest producer of &quot;Cashmere&quot;, China
          capitalizes on the confusion created by the original anglicization,
          mass-producing synthetic and cheaper product that is marketed under
          the same label. As a result, Kashmiri artisans are once again
          marginalized, battling against a global market saturated with inferior
          products under the &quot;Cashmere&quot; name. This ongoing struggle,
          rooted in colonial exploitation, has become a war over identity,
          authenticity, and survival. While foreign powers profit from the
          legacy of Kashmiri Crafts, the true artisans continue to fight to
          reclaim their heritage and secure their rightful place in the global
          market.
        </p>
      </div>

      <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
        <h3 className="font-montserrat text-2xl font-semibold text-secondary sm:text-[30px] sm:leading-[40px]">
          Despite Conspiracy, Kashmir Still Upholds the Legacy
        </h3>
        <p className="text-base leading-relaxed sm:text-lg md:text-xl">
          In a world driven by mass production, <strong>Kashmir</strong> has stood firm,
          refusing to let machines diminish the soul of its sacred crafts.
          <strong> Kashmir and its capital Srinagar</strong>, the heart of Kashmir&apos;s
          handicraft heritage
        </p>
        <ul className="space-y-4 pl-6 text-base leading-relaxed sm:text-lg md:text-xl">
          <li className="list-disc">
            Stands proudly among <strong>50 cities worldwide</strong> in the{" "}
            <strong>UNESCO Creative Cities Network</strong> under the{" "}
            <strong>Crafts and Folk Art</strong> category — a testament of artisanal
            excellence recognized on the global stage.
          </li>
          <li className="list-disc">
            Honored among <strong>63 cities</strong> worldwide recognized as{" "}
            <strong>World Craft Cities</strong> by the <strong>World Craft Council (WCC)</strong>,
            cements Kashmir&apos;s place as a global epicenter of artisanal
            excellence.
          </li>
          <li className="list-disc">
            Proud <strong>Legacy of the Silk Route</strong>, the enduring & greatest
            civilization of crossroads of craft commerce (1st Century BCE - 15th
            Century CE).
          </li>
          <li className="list-disc">
            The <strong>World&apos;s First Martyrs of Craft Labor</strong>, pioneers of
            sacrifice in the &quot;Global Struggle for Artisanal Rights&quot;.
          </li>
          <li className="list-disc">
            Home to the <strong>largest concentration of master artisans</strong> in the
            world, a <strong>Timeless Sanctuary for Artisans</strong>, made Kashmir their
            lifelong home, contributing to the region&apos;s craft heritage.
          </li>
        </ul>
      </div>

      <div className="mt-12 sm:mt-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {HELPUS.map((image, index) => (
            <Image
              key={index}
              src={image.image}
              alt={`Kashmir craft heritage image ${index + 1}`}
              width={166}
              height={200}
              className="rounded-lg border-2 border-secondary transition-all hover:shadow-lg"
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
