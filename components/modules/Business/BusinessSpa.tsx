"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Clock,
  Heart,
  Dumbbell,
  Bath,
  Coffee,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";

interface BusinessSpaProps {
  dict?: any;
  lang?: string;
}

// Animation variants - same as BusinessBanquets
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

export default function BusinessSpa({ dict, lang = "pl" }: BusinessSpaProps) {
  const services = [
    {
      icon: Bath,
      title: "Sauna & Jacuzzi",
      subtitle: "Strefa relaksu",
    },
    {
      icon: Heart,
      title: "Masaże",
      subtitle: "Różne techniki",
    },
    {
      icon: Sparkles,
      title: "Zabiegi na twarz",
      subtitle: "Pielęgnacja premium",
    },
    {
      icon: Dumbbell,
      title: "Siłownia",
      subtitle: "24/7 dla gości",
    },
    {
      icon: Clock,
      title: "Godziny otwarcia",
      subtitle: "10:00 - 22:00",
    },
    {
      icon: Coffee,
      title: "Herbaciarnia",
      subtitle: "Zdrowe napoje",
    },
  ];

  const treatments = [
    "Masaż antystresowy (50 min)",
    "Ekspresowy zabieg na twarz (30 min)",
    "Relaks w strefie saun (bez limitu)",
    "Aromaterapia i relaksacja (45 min)",
  ];

  return (
    <div className=" text-white w-full py-16 md:py-24 relative">
      {/* Background Image - Add z-index to push it behind content */}
      <div className="absolute inset-0 -z-10">
        <BackgroundLogoBottomDark position="right" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <AnimatedDecorativeBar />
            <motion.h1
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="title-dark"
            >
              Biznes Spa
            </motion.h1>
            <div className="space-y-4">
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="main-paragraph-dark"
              >
                Nasza strefa Spa to oaza spokoju w sercu hotelu. Po męczącym
                dniu konferencyjnym zapraszamy na relaksujące zabiegi, które
                przywrócą równowagę i energię.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="main-paragraph-dark"
              >
                Profesjonalni terapeuci zadbają o Twoje samopoczucie, oferując
                szeroki wybór zabiegów dostosowanych do potrzeb gości
                biznesowych.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInScale}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block lg:col-span-6 relative"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="relative aspect-[4/3] w-full overflow-hidden shadow-xl sm:-mr-8 lg:-mr-16 -mt-20 md:-mt-32 lg:-mt-40 z-30"
            >
              <motion.div
                className="relative h-full w-full overflow-hidden"
                initial={{ rotateY: -15, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image
                  src="/spa/spa-01.jpeg"
                  alt="Spa & Wellness"
                  fill
                  className="object-cover transition-all duration-1000 hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                ></motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Images - moved from right side */}
          <motion.div
            className="hidden lg:block lg:col-span-5 relative h-[700px] overflow-visible"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Large Image - Top */}
            <motion.div
              variants={fadeInRight}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="absolute -top-16 -left-8 lg:-left-16 w-[110%] h-[60%] z-40 shadow-xl"
            >
              <motion.div
                className="relative h-full w-full overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src="/spa/spa-06.jpg"
                  alt="Strefa relaksu"
                  fill
                  className="object-cover transition-all duration-1000 hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </motion.div>
            </motion.div>

            {/* Small Image - Bottom */}
            <motion.div
              variants={fadeInLeft}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="absolute -bottom-16 md:-bottom-24 lg:-bottom-38 right-0 w-[85%] h-[65%] z-30 shadow-xl"
            >
              <motion.div
                className="relative h-full w-full overflow-hidden"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Image
                  src="/spa/pool-01.jpg"
                  alt="Zabiegi spa"
                  fill
                  className="object-cover transition-all duration-1000 hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                ></motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mobile Layout - Simple stacked images */}
          <div className="lg:hidden space-y-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInScale}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative aspect-[4/3] w-full overflow-hidden shadow-xl"
            >
              <motion.div
                className="relative h-full w-full overflow-hidden"
                initial={{ rotateY: -15, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src="/spa/spa-06.jpg"
                  alt="Strefa relaksu"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInScale}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative aspect-[4/3] w-full overflow-hidden shadow-xl"
            >
              <motion.div
                className="relative h-full w-full overflow-hidden"
                initial={{ rotateY: 15, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Image
                  src="/spa/pool-01.jpg"
                  alt="Zabiegi spa"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - moved from left side */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="order-1 lg:order-2 lg:col-span-7 space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3 mb-3"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Wellness & Spa
                </h2>
                <Badge className="bg-avangarda/20 text-avangarda border-avangarda/30">
                  Relaks
                </Badge>
              </motion.div>
              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="main-paragraph-dark"
              >
                Nasza strefa Spa to oaza spokoju w sercu hotelu. Po męczącym
                dniu konferencyjnym zapraszamy na relaksujące zabiegi, które
                przywrócą równowagę i energię.
              </motion.p>
            </div>

            {/* Services Grid */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + 0.1 * index, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm p-4 text-center hover:bg-white/15 transition-colors"
                >
                  <service.icon className="h-6 w-6 mx-auto mb-2 text-avangarda" />
                  <p className="text-sm font-medium text-white mb-1">
                    {service.title}
                  </p>
                  <p className="text-xs text-white/70">{service.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Popular Treatments */}
            <div className="space-y-4">
              <motion.h3
                variants={fadeInUp}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl font-semibold text-white"
              >
                Popularne zabiegi dla gości biznesowych:
              </motion.h3>
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + 0.1 * index, duration: 0.6 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-avangarda flex-shrink-0"></div>
                    <span className="text-sm text-white/90">{treatment}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link href={`/${lang}/rozrywka`}>
                <Button variant="fillRight" className="w-fit">
                  Więcej o Wellness & Spa
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
