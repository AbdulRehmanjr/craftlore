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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banner.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banner.length]);

  const title = banner[activeIndex]?.title ?? "";
  const words = title.split(" ");

  const firstLine = words.slice(0, 2).join(" ");
  const secondLine = words.slice(2).join(" ");

  const bannerVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 3, ease: "easeOut" },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: { duration: 3, ease: "easeIn" },
    },
  };

  const subtitleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
    exit: {
      y: -30,
      opacity: 0,
      transition: { duration: 2, ease: "easeIn" },
    },
  };

  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  return (
    <section className="relative h-[calc(70dvh)] min-h-[400px] bg-primary text-white">
      <Container className="grid h-full items-center">
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 flex items-center"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
            >
              <motion.p
                variants={titleVariants}
                className="whitespace-normal font-montserrat text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
              >
                {firstLine} <span className="block">{secondLine}</span>
              </motion.p>
              <motion.p
                variants={subtitleVariants}
                className="mt-4 font-montserrat text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl"
              >
                {banner[activeIndex]?.subtitle}
              </motion.p>
              <motion.div variants={buttonVariants} className="mt-8">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 py-3 sm:px-8 sm:py-4"
                >
                  {banner[activeIndex]?.buttonText}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};
