"use client";

import { useState } from "react";
import { TESTIMONIALS } from "~/constants/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const categoryTitles = {
  kashmir: "Kashmir - India",
  us: "North America",
  global: "Global",
};

const categoryDescriptions = {
  kashmir: "Voices from Kashmir – Artisans & Craft Communities",
  us: "Buyers & Collectors in the U.S. – Trust, Transparency & Storytelling",
  global:
    "Global Sponsors, Institutions, and Industry Partners – Investing in Cultural Continuity",
};

export const Testimonials = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof categoryTitles>("kashmir");

  const filteredTestimonials = TESTIMONIALS.filter(
    (t) => t.category === activeCategory,
  );

  return (
    <div className="w-full">
      <header className="mb-6 text-center sm:mb-8">
        <h2 className="mb-2 font-montserrat text-xl font-bold text-secondary sm:text-2xl md:text-3xl lg:text-4xl">
          What Craftlore Subscribers Say
        </h2>
        <p className="text-sm text-gray-600 sm:text-base md:text-lg">
          Real Voices. Real Impact. Global Reach.
        </p>
      </header>

      <nav className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
        {Object.entries(categoryTitles).map(([category, title]) => (
          <button
            type="button"
            key={category}
            onClick={() =>
              setActiveCategory(category as keyof typeof categoryTitles)
            }
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-all sm:text-sm ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {title}
          </button>
        ))}
      </nav>

      {/* Display the description of the active category */}
      <p className="mb-6 text-center text-xs text-gray-600 sm:text-sm md:text-base">
        {categoryDescriptions[activeCategory]}
      </p>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="mx-4 sm:mx-6 md:mx-8 lg:mx-auto max-w-[260px] sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl"
      >
        <CarouselContent>
          {filteredTestimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <article className="group relative mx-2 flex h-full flex-col justify-between overflow-hidden rounded-xl border-2 border-secondary bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md sm:p-5">
                <blockquote className="mb-auto text-xs italic text-gray-600 sm:text-sm md:text-base">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <footer className="mt-3 border-t border-gray-100 pt-3 sm:pt-4">
                  <p className="text-sm font-medium text-gray-900 sm:text-base">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </footer>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex justify-center sm:mt-6">
          <CarouselPrevious className="static mr-4 translate-y-0" />
          <CarouselNext className="static ml-4 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};