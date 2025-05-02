"use client";
import React, { memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

// Define accordion data outside component to prevent recreating on each render
const accordionItems = [
  {
    id: "item-1",
    title: "1. Individual Consumers",
    content:
      "Access authentic, GI-certified crafts with personalization options. Enjoy seasonal offers, loyalty rewards, and support for product care, heritage education, and direct interaction with artisans.",
  },
  {
    id: "item-2",
    title: "2. Retailers",
    content:
      "Benefit from wholesale pricing, inventory sync, merchandising support, and exclusive catalogs. Get sales kits, brand stories, and access to verified supply for ethical sourcing and regional distribution.",
  },
  {
    id: "item-3",
    title: "3. Wholesalers",
    content:
      "Gain bulk discounts, early product access, logistics support, and curated assortments. Receive traceability documentation, carbon footprint reports, and priority fulfillment for national or international distribution.",
  },
  {
    id: "item-4",
    title: "4. Institutional Buyers",
    content:
      "Gain bulk discounts, early product access, logistics support, and curated assortments. Receive traceability documentation, carbon footprint reports, and priority fulfillment for national or international distribution.",
  },
  {
    id: "item-5",
    title: "5. Collectors and Art Connoisseurs",
    content:
      "Receive exclusive previews, collector-grade certificates, and artisan provenance data. Support includes restoration guidance, private viewings, and access to limited, historically significant craft editions.",
  },
  {
    id: "item-6",
    title: "6. Corporate Gifting Buyers",
    content:
      "Partner for exhibitions, décor sourcing, and thematic installations. Support includes co-branded pop-up kits, artisan sessions, logistics handling, and curated pieces for immersive craft storytelling.",
  },
  {
    id: "item-7",
    title: "7. Event and Exhibition Planners",
    content:
      "Partner for exhibitions, décor sourcing, and thematic installations. Support includes co-branded pop-up kits, artisan sessions, logistics handling, and curated pieces for immersive craft storytelling.",
  },
];

type AccordionItemType = {
  id: string;
  title: string;
  content: string;
};
// Memoize the AccordionItem to prevent unnecessary re-renders
const MemoizedAccordionItem = memo(({ item }: { item: AccordionItemType }) => (
  <AccordionItem value={item.id} className="text-start">
    <AccordionTrigger className="text-start font-montserrat text-base sm:text-lg md:text-xl">
      {item.title}
    </AccordionTrigger>
    <AccordionContent className="font-opensans text-sm sm:text-base md:text-lg">
      {item.content}
    </AccordionContent>
  </AccordionItem>
));

// Display name for debugging
MemoizedAccordionItem.displayName = "MemoizedAccordionItem";

export const BuyerAccordin = () => {
  return (
    <div className="col-span-2 w-full lg:col-span-1">
      <h2 className="mb-6 font-montserrat text-xl text-primary sm:text-2xl md:text-3xl">
        Buyer Platform <span className="text-secondary">Benefits</span>
      </h2>
      <Accordion type="single" collapsible>
        {accordionItems.map((item) => (
          <MemoizedAccordionItem key={item.id} item={item} />
        ))}
      </Accordion>
    </div>
  );
};
