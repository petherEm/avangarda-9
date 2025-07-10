"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface BusinessBanquetsProps {
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

const BusinessBanquets = ({
  lang = "pl",
  dict,
  className,
}: BusinessBanquetsProps) => {
  const banquetsUrl =
    lang === "en" ? "/en/business-banquets" : "/pl/biznes-bankiety";

  return (
    <Container
      className={cn(
        "relative w-full py-6 sm:py-6 md:py-8 lg:py-16 xl:py-16 overflow-visible mt-6 sm:mt-8 md:mt-12 lg:mt-16 mb-6 sm:mb-8 md:mb-12 lg:mb-16",
        className
      )}
    >
      {/* Background Image */}
      <BackgroundLogoBottomDark />

      <section className="relative z-20">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Mobile Layout - Stacked */}
          <div className="block lg:hidden">
            {/* Content Section - Mobile First */}
            <motion.div
              className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8"
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
                Biznes & Bankiety
              </motion.h1>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="main-paragraph-dark"
                >
                  Hotel Avangarda*** to idealne miejsce na organizację wydarzeń
                  biznesowych najwyższej klasy. Nasze eleganckie sale
                  konferencyjne i bankietowe zapewniają profesjonalne warunki
                  dla każdego typu spotkania.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="main-paragraph-dark"
                >
                  Oferujemy kompleksową obsługę konferencji, szkoleń,
                  prezentacji oraz uroczystych bankietów. Nasze doświadczenie i
                  profesjonalizm gwarantują sukces każdego wydarzenia.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="main-paragraph-dark"
                >
                  Dysponujemy nowoczesnymi salami o różnej pojemności - od
                  kameralnych spotkań zarządu po duże konferencje dla 540 osób.
                  Każda sala wyposażona jest w profesjonalny sprzęt
                  audiowizualny, bezprzewodowy internet oraz klimatyzację.
                </motion.p>
              </div>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="pt-4"
              >
                <Link href={banquetsUrl}>
                  <Button
                    size="lg"
                    variant="fillRight"
                    className="w-fit border-none"
                  >
                    Sprawdź ofertę biznesową
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Images Grid - Mobile/Tablet - Second on mobile */}
            <motion.div
              className="relative"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Mobile Layout - Stacked Images */}
              <div className="sm:hidden space-y-4 relative z-50">
                <motion.div
                  variants={fadeInScale}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full aspect-[4/3] relative"
                >
                  <motion.div
                    className="relative h-full w-full overflow-hidden shadow-xl"
                    initial={{ rotateY: -15, opacity: 0 }}
                    whileInView={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Image
                      src="/conference/banquet-01.jpg"
                      alt="Elegant banquet hall setup"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={fadeInScale}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full aspect-[4/3] relative"
                >
                  <motion.div
                    className="relative h-full w-full overflow-hidden shadow-xl"
                    initial={{ rotateY: 15, opacity: 0 }}
                    whileInView={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <Image
                      src="/conference/theater-01.jpg"
                      alt="Professional theater-style conference room"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Tablet Layout - Side by side but contained */}
              <div className="hidden sm:block md:block relative h-[350px] sm:h-[400px] md:h-[450px] z-20">
                {/* Large Main Image - Contained within boundaries */}
                <motion.div
                  variants={fadeInRight}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className="absolute top-0 right-0 w-[85%] sm:w-[90%] h-[60%] sm:h-[65%] z-30 overflow-hidden"
                >
                  <motion.div
                    className="relative h-full w-full overflow-hidden shadow-2xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Image
                      src="/conference/banquet-01.jpg"
                      alt="Elegant banquet hall setup"
                      fill
                      priority
                      className="object-cover transition-all duration-1000 hover:scale-110"
                      quality={100}
                      sizes="(max-width: 768px) 85vw, 90vw"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </motion.div>
                </motion.div>

                {/* Secondary Image - Contained within boundaries */}
                <motion.div
                  variants={fadeInLeft}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className="absolute bottom-0 left-0 w-[70%] sm:w-[75%] h-[55%] sm:h-[60%] z-40 overflow-hidden"
                >
                  <motion.div
                    className="relative h-full w-full overflow-hidden shadow-2xl"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <Image
                      src="/conference/theater-01.jpg"
                      alt="Professional theater-style conference room"
                      fill
                      className="object-cover transition-all duration-1000 hover:scale-110"
                      sizes="(max-width: 768px) 70vw, 75vw"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Images Grid - Left Side - Breaking boundaries on large screens */}
            <motion.div
              className="relative"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="relative h-[600px] md:h-[650px] lg:h-[700px] overflow-visible z-20">
                {/* Large Main Image - Extended beyond top */}
                <motion.div
                  variants={fadeInRight}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className="absolute -top-20 lg:-top-24 xl:-top-28 right-0 w-[90%] xl:w-[95%] h-[60%] xl:h-[65%] z-30"
                  style={{ zIndex: 60 }}
                >
                  <motion.div
                    className="relative h-full w-full overflow-hidden shadow-2xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Image
                      src="/conference/banquet-01.jpg"
                      alt="Elegant banquet hall setup"
                      fill
                      priority
                      className="object-cover transition-all duration-1000 hover:scale-110"
                      sizes="(max-width: 1200px) 65vw, 55vw"
                      quality={100}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </motion.div>
                </motion.div>

                {/* Secondary Image - Extended beyond bottom */}
                <motion.div
                  variants={fadeInLeft}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className="absolute -bottom-20 lg:-bottom-24 xl:-bottom-28 left-0 w-[75%] xl:w-[80%] h-[55%] xl:h-[60%] z-40"
                  style={{ zIndex: 60 }}
                >
                  <motion.div
                    className="relative h-full w-full overflow-hidden shadow-2xl"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <Image
                      src="/conference/theater-01.jpg"
                      alt="Professional theater-style conference room"
                      fill
                      className="object-cover transition-all duration-1000 hover:scale-110"
                      sizes="(max-width: 1200px) 50vw, 45vw"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section - Right Side - Enhanced with animations */}
            <motion.div
              className="relative z-10"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="max-w-xl">
                {/* Title and Description */}
                <motion.div
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <AnimatedDecorativeBar />

                  <motion.h1
                    variants={fadeInUp}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="title-dark"
                  >
                    Biznes & Bankiety
                  </motion.h1>

                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="main-paragraph-dark"
                  >
                    Dysponujemy nowoczesną, przestronną salą o powierzchni 680
                    m², która pozwala na elastyczne dostosowanie układu do
                    charakteru wydarzenia – od podziału na dwie niezależne
                    przestrzenie po 340 m², po ustawienia teatralne,
                    szkoleniowe, bankietowe czy wystawiennicze. Sala ma 4 metry
                    wysokości, jest pozbawiona filarów i wyposażona w
                    wielostrefowy system nagłośnienia (4x4 głośniki), sceniczne
                    i LED-owe oświetlenie oraz podświetlane sufity. Komfort
                    uczestników zapewniają klimatyzacja strefowa, możliwość
                    nawiewu świeżego powietrza.
                  </motion.p>

                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="main-paragraph-dark"
                  >
                    Dodatkowo oferujemy 200 m² powierzchni wystawienniczej
                    idealnej na ekspozycje, stoiska promocyjne czy premiery
                    produktów. Współpracujemy z doświadczonymi agencjami
                    eventowymi i zapewniamy pełne wsparcie organizacyjne – od
                    zaplecza technicznego po catering i atrakcje integracyjne.
                  </motion.p>
                </motion.div>

                {/* Call to Action Button */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="pt-4"
                >
                  <Link href={banquetsUrl}>
                    <Button
                      size="lg"
                      variant="fillRight"
                      className="w-fit border-none"
                    >
                      Sprawdź ofertę biznesową
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default BusinessBanquets;
