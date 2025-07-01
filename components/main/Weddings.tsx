"use client";

import Image from "next/image";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";
import BackgroundLogoBottomDark from "../background-logo-bottom-dark";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

interface WeddingsProps {
  lang?: string;
  dict?: any;
}

const Weddings = ({ lang = "pl", dict }: WeddingsProps) => {
  const weddingsUrl = lang === "en" ? "/en/weddings" : "/pl/wesela";

  return (
    <Container className="relative w-full py-18 md:py-28 md:mb-10">
      {/* Background Image */}
      <BackgroundLogoBottomDark />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Content Section */}
        <motion.div
          className="mb-8 md:mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          <AnimatedDecorativeBar />
          <motion.h1
            variants={fadeInUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="title-dark max-w-2xl"
          >
            Uroczystości na każdą okazję
          </motion.h1>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8">
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="main-paragraph-dark max-w-2xl"
            >
              Zorganizuj niezapomniane chwile w wyjątkowej atmosferze! Oferujemy
              profesjonalną obsługę i przestrzenie idealne na wesela, komunie,
              chrzciny oraz inne uroczystości okolicznościowe. Twój wyjątkowy
              dzień w najlepszym stylu!
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link href={weddingsUrl}>
                <Button size="lg" variant="fillRight">
                  Dowiedz się więcej
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Redesigned Images Grid - One large image on left, two horizontal on right */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left side - large image */}
          <motion.div
            variants={fadeInScale}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 md:col-span-6 relative w-full h-[250px] md:h-[350px]"
          >
            <Image
              src="/wedding/wed-room-04.jpg"
              alt="Słodki stół weselny"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right side - two horizontal images stacked */}
          <div className="col-span-1 md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              variants={fadeInScale}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full h-[250px] md:h-[350px]"
            >
              <Image
                src="/wedding/table-02.jpg"
                alt="Nakrycie stołu weselnego"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </motion.div>

            <motion.div
              variants={fadeInScale}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full h-[250px] md:h-[350px]"
            >
              <Image
                src="/wedding/wed-room-06.jpg"
                alt="Żyrandol i dekoracje"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Weddings;
