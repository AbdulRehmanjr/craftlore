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
  global: "Global Sponsors, Institutions, and Industry Partners – Investing in Cultural Continuity",
};

export const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof categoryTitles>("kashmir");

  const filteredTestimonials = TESTIMONIALS.filter((t) => t.category === activeCategory);

  return (
    <div className="w-full">
      <header className="mb-6 sm:mb-8 text-center">
        <h2 className="mb-2 font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
          What Craftlore Subscribers Say
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Real Voices. Real Impact. Global Reach.
        </p>
      </header>

      <nav className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
        {Object.entries(categoryTitles).map(([category]) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as keyof typeof categoryTitles)}
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs sm:text-sm font-medium transition-all ${
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
        className="mx-4 sm:mx-6 md:mx-8 lg:mx-auto lg:max-w-[90%] xl:max-w-7xl"
      >
        <CarouselContent>
          {filteredTestimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <article
                className="group relative h-full overflow-hidden rounded-xl bg-gray-50 p-4 mx-2 shadow-sm transition-all hover:shadow-md sm:p-5 border-2 border-secondary"
              >
                <div className="mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="text-lg sm:text-xl">{categoryIcons[testimonial.category]}</span>
                  <div className="h-0.5 flex-1 bg-gray-100" />
                </div>
                <blockquote className="mb-3 sm:mb-4 text-xs sm:text-sm md:text-base italic text-gray-600">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <footer className="border-t border-gray-100 pt-3 sm:pt-4">
                  <p className="text-sm sm:text-base font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </footer>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 sm:mt-6">
          <CarouselPrevious className="mr-4 static translate-y-0" />
          <CarouselNext className="ml-4 static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};