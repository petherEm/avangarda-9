"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface TrustedCompaniesProps {
  dict?: any;
  lang?: string;
}

export default function TrustedCompanies({
  dict,
  lang = "pl",
}: TrustedCompaniesProps) {
  const companies = [
    {
      name: "eTravel",
      logo: "/firm-testimonials/eTravel-1.png",
      alt: "eTravel logo",
    },
    {
      name: "GladioGroup",
      logo: "/firm-testimonials/gladiogroup.png",
      alt: "GladioGroup logo",
    },
    {
      name: "InterRisk Vienna Insurance Group",
      logo: "/firm-testimonials/interrisk.png",
      alt: "InterRisk Vienna Insurance Group logo",
    },
    {
      name: "Emolium",
      logo: "/firm-testimonials/emolium.png",
      alt: "Emolium logo",
    },
    {
      name: "DeveloperGO",
      logo: "/firm-testimonials/developergo.png",
      alt: "DeveloperGO logo",
    },
    {
      name: "Iwostin Clinical Skin Care",
      logo: "/firm-testimonials/iwostin.png",
      alt: "Iwostin Clinical Skin Care logo",
    },
    {
      name: "Krüger Group",
      logo: "/firm-testimonials/kruger-1.png",
      alt: "Krüger Group logo",
    },
    {
      name: "Kaufland",
      logo: "/firm-testimonials/kaufland.jpg",
      alt: "Kaufland logo",
    },
    {
      name: "PKO Bank Polski",
      logo: "/firm-testimonials/pkobp-2.png",
      alt: "PKO Bank Polski logo",
    },
    {
      name: "Wszechnica",
      logo: "/firm-testimonials/wszechnica.png",
      alt: "Wszechnica logo",
    },
    {
      name: "FRBS",
      logo: "/firm-testimonials/frbs.png",
      alt: "FRBS logo",
    },
    {
      name: "AWF",
      logo: "/firm-testimonials/awf.png",
      alt: "AWF logo",
    },
    {
      name: "JYSK",
      logo: "/firm-testimonials/jysk.png",
      alt: "JYSK logo",
    },
    {
      name: "BS Wasewo",
      logo: "/firm-testimonials/BS_Wasewo.png",
      alt: "BS Wasewo logo",
    },
  ];

  // Split companies into two rows
  const firstRow = companies.slice(0, 8);
  const secondRow = companies.slice(8, 16);

  return (
    <div className="bg-white w-full text-primary py-16 lg:py-20">
      {/* Header Section - Contained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center">
            <AnimatedDecorativeBar />
            <h1 className="title-light">Zaufali Nam</h1>
          </div>
          <p className="main-paragraph-light max-w-2xl mx-auto">
            Jesteśmy dumni z zaufania, jakim obdarzają nas renomowane firmy.
            Nasze doświadczenie w organizacji wydarzeń biznesowych sprawia, że
            jesteśmy pierwszym wyborem dla wymagających klientów.
          </p>
        </motion.div>
      </div>

      {/* Moving Logos Section - Full Width */}
      <div className="w-full overflow-hidden space-y-8">
        {/* First Row - Moving Right */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex space-x-12 items-center"
            animate={{
              x: [0, -100 * firstRow.length],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the array for seamless loop */}
            {[...firstRow, ...firstRow, ...firstRow].map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.alt}
                  width={180}
                  height={120}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Moving Left */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex space-x-12 items-center"
            animate={{
              x: [-100 * secondRow.length, 0],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the array for seamless loop */}
            {[...secondRow, ...secondRow, ...secondRow].map(
              (company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6 "
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.alt}
                    width={180}
                    height={120}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Text - Contained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Dołącz do grona zadowolonych klientów, którzy wybrali Hotel
            Avangarda jako miejsce swoich najważniejszych wydarzeń biznesowych.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
