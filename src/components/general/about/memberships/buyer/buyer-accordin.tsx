import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { memo } from "react";

const AccordionContentMemo = memo(
  ({ children }: { children: React.ReactNode }) => (
    <AccordionContent className="space-y-10 font-opensans text-xl">
      {children}
    </AccordionContent>
  ),
);

AccordionContentMemo.displayName = "AccordionContentMemo";

export const BuyerAccordin = () => {
  return (
    <Accordion type="single" collapsible className="col-span-2 lg:col-span-1">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-montserrat text-xl">
          1. Individual Consumers
        </AccordionTrigger>
        <AccordionContent className="space-y-10 font-opensans text-xl">
          Access authentic, GI-certified crafts with personalization options.
          Enjoy seasonal offers, loyalty rewards, and support for product care,
          heritage education, and direct interaction with artisans.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-montserrat text-xl">
          2. Retailers
        </AccordionTrigger>
        <AccordionContent>
          Benefit from wholesale pricing, inventory sync, merchandising support,
          and exclusive catalogs. Get sales kits, brand stories, and access to
          verified supply for ethical sourcing and regional distribution.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-montserrat text-xl">
          3. Wholesalers
        </AccordionTrigger>
        <AccordionContent>
          Gain bulk discounts, early product access, logistics support, and
          curated assortments. Receive traceability documentation, carbon
          footprint reports, and priority fulfillment for national or
          international distribution.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-montserrat text-xl">
          4. Institutional Buyers
        </AccordionTrigger>
        <AccordionContent>
          Gain bulk discounts, early product access, logistics support, and
          curated assortments. Receive traceability documentation, carbon
          footprint reports, and priority fulfillment for national or
          international distribution.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="font-montserrat text-xl">
          5. Collectors and Art Connoisseurs
        </AccordionTrigger>
        <AccordionContent>
          Receive exclusive previews, collector-grade certificates, and artisan
          provenance data. Support includes restoration guidance, private
          viewings, and access to limited, historically significant craft
          editions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="font-montserrat text-xl">
          6. Corporate Gifting Buyers
        </AccordionTrigger>
        <AccordionContent>
          Partner for exhibitions, décor sourcing, and thematic installations.
          Support includes co-branded pop-up kits, artisan sessions, logistics
          handling, and curated pieces for immersive craft storytelling.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="font-montserrat text-xl">
          7. Event and Exhibition Planners
        </AccordionTrigger>
        <AccordionContent>
          Partner for exhibitions, décor sourcing, and thematic installations.
          Support includes co-branded pop-up kits, artisan sessions, logistics
          handling, and curated pieces for immersive craft storytelling.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
