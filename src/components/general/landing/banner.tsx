"use client";

import { Button } from "~/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "~/components/common/container";

type ComponentProps = {
  banner: {
    title: string;
    subtitle: string;
    buttonText: string;
  }[];
};

export const Banner = ({ banner }: ComponentProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true);

  useEffect(() => {
    // Set initial render to false after mounting
    setIsInitialRender(false);

    // Only set interval if banner has items
    if (!banner || banner.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banner.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banner]);

  // Safely handle possible undefined banner data
  if (!banner || banner.length === 0) {
    return (
      <section className="relative h-[calc(70dvh)] min-h-[400px] bg-primary text-white">
        <Container className="grid h-full items-center">
          <div className="text-center">Loading banner content...</div>
        </Container>
      </section>
    );
  }

  const currentBanner = banner[activeIndex];
  
  // Safely split the title into words for two-line display
  const title = currentBanner?.title ?? "";
  const words = title.split(" ");
  
  // Handle short titles gracefully
  const firstLine = words.length > 2 ? words.slice(0, 2).join(" ") : title;
  const secondLine = words.length > 2 ? words.slice(2).join(" ") : "";

  // Simplified animation variants for better performance
  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative h-[calc(70dvh)] min-h-[400px] bg-primary text-white overflow-hidden">
      <Container className="grid h-full items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={bannerVariants}
            initial={isInitialRender ? "visible" : "hidden"}
            animate="visible"
            exit="exit"
            className="w-full flex items-center justify-center"
          >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.p
                variants={itemVariants}
                className="font-montserrat text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              >
                {firstLine} {secondLine && <span className="block">{secondLine}</span>}
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="mt-4 font-montserrat text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl"
              >
                {currentBanner?.subtitle ?? ""}
              </motion.p>
              <motion.div variants={itemVariants} className="mt-8">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 py-3 sm:px-8 sm:py-4"
                >
                  {currentBanner?.buttonText ?? "Learn More"}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};