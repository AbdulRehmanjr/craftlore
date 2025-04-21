"use client";

import { motion } from "framer-motion";
import { Container } from "~/components/common/container";
import { TESTIMONIALS } from "~/constants/data";
import { useState } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof categoryTitles>("kashmir");

  return (
    <section className="bg-[#e5edf7] py-24">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            What Craftlore Subscribers Say
          </h2>
          <p className="text-lg text-gray-600">
            Real Voices. Real Impact. Global Reach.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center gap-4">
          {Object.entries(categoryTitles).map(([category]) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category as keyof typeof categoryTitles)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.filter((t) => t.category === activeCategory).map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl">{categoryIcons[testimonial.category]}</span>
                  <div className="h-0.5 flex-1 bg-gray-100" />
                </div>
                <p className="mb-4 text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}; 