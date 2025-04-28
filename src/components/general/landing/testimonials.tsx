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

const categoryIcons = {
  kashmir: "🧵",
  us: "🇺🇸",
  global: "🌍",
};

const categoryTitles = {
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
        {Object.entries(categoryTitles).map(([category]) => (
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
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </nav>

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
              <article className="group relative mx-2 h-full overflow-hidden rounded-xl border-2 border-secondary bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md sm:p-5">
                <div className="mb-3 flex items-center gap-2 sm:mb-4">
                  <span className="text-lg sm:text-xl">
                    {categoryIcons[testimonial.category]}
                  </span>
                  <div className="h-0.5 flex-1 bg-gray-100" />
                </div>
                <blockquote className="mb-3 text-xs italic text-gray-600 sm:mb-4 sm:text-sm md:text-base">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <footer className="border-t border-gray-100 pt-3 sm:pt-4">
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
