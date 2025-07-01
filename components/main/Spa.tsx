"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BackgroundLogoBottomDark from "../background-logo-bottom-dark";
import { Container } from "../container";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";
import { useRef } from "react";

interface SpaProps {
  lang?: string;
  dict?: any;
  className?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};

const Spa = ({ lang = "pl", dict, className }: SpaProps) => {
  const spaUrl = lang === "en" ? "/en/spa" : "/pl/spa";
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects - Images move, background stays stable
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Three images with different parallax movements
  const mainImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]),
    springConfig
  );

  const secondaryImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "25%"]),
    springConfig
  );

  const thirdImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]),
    springConfig
  );

  // Scale effect for images
  const imageScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1.05]),
    springConfig
  );

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <Container
        className={cn(
          "relative w-full py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 overflow-visible mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-4 sm:mb-6 md:mb-8 lg:mb-10",
          className
        )}
      >
        <BackgroundLogoBottomDark />
        <section className="relative z-20">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* Mobile Layout - Stacked */}
            <div className="block lg:hidden">
              {/* Content Section - Mobile First */}
              <motion.div
                className="space-y-4 sm:space-y-6 md:space-y-8 mb-4 sm:mb-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <AnimatedDecorativeBar />
                <motion.h1
                  variants={fadeInUp}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="title-dark"
                >
                  Wellness & SPA
                </motion.h1>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="main-paragraph-dark"
                  >
                    Odkryj oazę spokoju w naszym SPA, gdzie ciało i umysł
                    znajdują pełne odprężenie. Hotel Avangarda oferuje wyjątkowe
                    atrakcje wellness w luksusowym otoczeniu.
                  </motion.p>
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="main-paragraph-dark"
                  >
                    Nasze centrum SPA to miejsce, gdzie tradycyjne metody
                    relaksacji spotykają się z nowoczesnymi technikami wellness,
                    tworząc niepowtarzalne doświadczenie regeneracji.
                  </motion.p>
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="main-paragraph-dark"
                  >
                    Dla wszystkich Gości przygotowaliśmy basen rekreacyjny,
                    brodzik oraz jacuzzi. Dorośli mają do dyspozycji dwie sauny
                    – fińską i Infrared oraz pokój relaksu z podgrzewaną
                    leżanką, brodzikami do moczenia stóp przed saunowaniem oraz
                    studnią lodową, dzięki której można ochłodzić ciało płatkami
                    lodu.
                  </motion.p>
                </div>
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="pt-4"
                >
                  <Link href={spaUrl}>
                    <Button
                      size="lg"
                      variant="fillRight"
                      className="w-fit transition-all hover:scale-105 active:scale-95 px-6 sm:px-8 py-3 sm:py-4"
                    >
                      Dowiedz się więcej
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Images Grid - Mobile/Tablet with Parallax */}
              <motion.div
                className="relative overflow-hidden"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {/* Mobile Layout - Two Stacked Images with Minimal Spacing */}
                <div className="sm:hidden relative z-50">
                  <motion.div
                    variants={fadeInScale}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full aspect-[4/3] relative overflow-hidden -mx-4 sm:-mx-6"
                  >
                    <motion.div
                      className="relative h-full w-full overflow-hidden shadow-xl"
                      initial={{ rotateY: -15, opacity: 0 }}
                      whileInView={{ rotateY: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      style={{ y: mainImageY, scale: imageScale }}
                    >
                      <Image
                        src="/spa/spa-08.jpg"
                        alt="Luxurious spa interior"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Tablet Layout with Better Distribution */}
                <div className="hidden sm:block lg:hidden relative h-[800px] md:h-[900px] z-20 overflow-hidden">
                  {/* Main Image - Top Right */}
                  <motion.div
                    variants={fadeInRight}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                    className="absolute top-0 right-0 w-[70%] md:w-[65%] h-[55%] md:h-[60%] z-50 overflow-hidden"
                    style={{
                      y: mainImageY,
                      scale: imageScale,
                    }}
                  >
                    <div className="relative h-full w-full overflow-hidden shadow-2xl">
                      <Image
                        src="/spa/spa-08.jpg"
                        alt="Luxurious spa interior"
                        fill
                        priority
                        className="object-cover transition-all duration-1000 hover:scale-110"
                        quality={100}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </motion.div>

                  {/* Wellness Area - Bottom Right */}
                  <motion.div
                    variants={fadeInRight}
                    transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                    className="absolute bottom-0 right-[8%] md:right-[10%] w-[65%] md:w-[60%] h-[50%] md:h-[55%] z-50 overflow-hidden"
                    style={{
                      y: secondaryImageY,
                      scale: imageScale,
                    }}
                  >
                    <div className="relative h-full w-full overflow-hidden shadow-2xl">
                      <Image
                        src="/diver/offers-background-2.jpg"
                        alt="Spa wellness area"
                        fill
                        className="object-cover transition-all duration-1000 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Desktop Layout - Side by Side with Better Image Distribution */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-16 xl:gap-20 items-start">
              {/* Content Section - Left Side */}
              <motion.div
                className="space-y-8 pt-4"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <AnimatedDecorativeBar />
                <motion.h1
                  variants={fadeInUp}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="title-dark"
                >
                  Wellness & SPA
                </motion.h1>
                <div className="space-y-6">
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="main-paragraph-dark"
                  >
                    Odkryj oazę spokoju w naszym SPA, gdzie ciało i umysł
                    znajdują pełne odprężenie. Hotel Avangarda oferuje wyjątkowe
                    atrakcje wellness w luksusowym otoczeniu.
                  </motion.p>
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="main-paragraph-dark"
                  >
                    Nasze centrum SPA to miejsce, gdzie tradycyjne metody
                    relaksacji spotykają się z nowoczesnymi technikami wellness,
                    tworząc niepowtarzalne doświadczenie regeneracji.
                  </motion.p>
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="main-paragraph-dark"
                  >
                    Dla wszystkich Gości przygotowaliśmy basen rekreacyjny,
                    brodzik oraz jacuzzi. Dorośli mają do dyspozycji dwie sauny
                    – fińską i Infrared oraz pokój relaksu z podgrzewaną
                    leżanką, brodzikami do moczenia stóp przed saunowaniem oraz
                    studnią lodową, dzięki której można ochłodzić ciało płatkami
                    lodu.
                  </motion.p>
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="main-paragraph-dark"
                  >
                    Dla wszystkich Gości przygotowaliśmy basen rekreacyjny,
                    brodzik oraz jacuzzi. Dorośli mają do dyspozycji dwie sauny
                    – fińską i Infrared oraz pokój relaksu z podgrzewaną
                    leżanką, brodzikami do moczenia stóp przed saunowaniem oraz
                    studnią lodową, dzięki której można ochłodzić ciało płatkami
                    lodu.
                  </motion.p>
                </div>
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="pt-6"
                >
                  <Link href={spaUrl}>
                    <Button size="lg" variant="fillRight" className="w-fit">
                      Dowiedz się więcej
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Images Grid - Right Side with Top Image Beyond Container and Bottom Images Side by Side */}
              <motion.div
                className="relative"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="relative h-[900px] xl:h-[1000px] overflow-visible z-20">
                  {/* Large Main Image - Top - Extending Beyond Container */}
                  <motion.div
                    variants={fadeInRight}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                    className="absolute -top-20 xl:-top-24 right-0 w-[80%] xl:w-[85%] h-[60%] xl:h-[62%] z-50 overflow-hidden"
                    style={{
                      y: mainImageY,
                      scale: imageScale,
                      zIndex: 60,
                    }}
                  >
                    <div className="relative h-full w-full overflow-hidden shadow-2xl">
                      <Image
                        src="/spa/spa-08.jpg"
                        alt="Luxurious spa interior"
                        fill
                        priority
                        className="object-cover transition-all duration-1000 hover:scale-110"
                        quality={100}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>

                  {/* Bottom Images Container - Side by Side, Extending Beyond Container */}
                  <div className="absolute -bottom-20 xl:-bottom-14 left-1/2 transform -translate-x-1/2 w-[60%] xl:w-[85%] h-[75%] xl:h-[70%]">
                    {/* Wellness Area - Bottom Right */}
                    <motion.div
                      variants={fadeInRight}
                      transition={{
                        duration: 1.2,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.3 },
                      }}
                      className="w-full h-full z-50 overflow-hidden"
                      style={{
                        y: secondaryImageY,
                        scale: imageScale,
                        zIndex: 60,
                      }}
                    >
                      <div className="relative h-full w-full overflow-hidden shadow-xl">
                        <Image
                          src="/diver/offers-background-2.jpg"
                          alt="Spa wellness area"
                          fill
                          className="object-cover transition-all duration-1000 hover:scale-110"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 0.9 }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Spa;
