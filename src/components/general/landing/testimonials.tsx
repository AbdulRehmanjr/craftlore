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
    <section className="bg-[#e5edf7] py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-12 md:mb-16"
        >
          <h2 className="mb-2 font-montserrat text-2xl font-bold text-secondary sm:text-3xl md:text-4xl lg:text-5xl">
            What Craftlore Subscribers Say
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Real Voices. Real Impact. Global Reach.
          </p>
        </motion.header>

        <motion.nav 
          className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {Object.entries(categoryTitles).map(([category]) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category as keyof typeof categoryTitles)}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
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
        </motion.nav>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.filter((t) => t.category === activeCategory).map((testimonial, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-lg sm:p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl sm:text-2xl">{categoryIcons[testimonial.category]}</span>
                <div className="h-0.5 flex-1 bg-gray-100" />
              </div>
              <blockquote className="mb-4 text-sm italic text-gray-600 sm:text-base">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <footer className="border-t border-gray-100 pt-4">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-xs text-gray-500 sm:text-sm">
                  {testimonial.role}, {testimonial.location}
                </p>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}; 