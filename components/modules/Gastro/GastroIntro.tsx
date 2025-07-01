"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChefHat, Wine, Music, ArrowRight, Utensils } from "lucide-react";
import Image from "next/image";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface GastroIntroProps {
  dict: any;
  lang: string;
}

const GastroIntro = ({ dict, lang }: GastroIntroProps) => {
  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  const gastronomicPlaces = [
    {
      id: "dzika-roza",
      name: "Restauracja Dzika Róża",
      description:
        "Elegancka restauracja z wykwintną kuchnią polską i międzynarodową.",
      image: "/restaurant/rest-01.jpg",
      icon: ChefHat,
      features: [
        "Kuchnia polska i międzynarodowa",
        "Eleganckie wnętrze",
        "Menu sezonowe",
        "Obsługa bankietów",
      ],
      link: `/restaurant`,
    },
    {
      id: "klub-coola",
      name: "Klub Coola",
      description: "Centrum rozrywki z restauracją, kręglami i biliard.",
      image: "/klub/klub-01.JPG",
      icon: Music,
      features: [
        "Kręgle i bilard",
        "Menu barowe",
        "Imprezy tematyczne",
        "Rozrywka dla rodzin",
      ],
      link: `/klub-coola`,
    },
    {
      id: "bar-przystan",
      name: "Bar Przystań",
      description:
        "Klimatyczny bar nad Narwią z daniami z grilla i świeżymi rybami.",
      image: "/outdoor/out-01.jpg",
      icon: Wine,
      features: [
        "Widok na Narew",
        "Dania z grilla",
        "Świeże ryby",
        "Taras nad rzeką",
      ],
      link: `/bar-przystan`,
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section - White Background */}
      <div className="bg-white text-primary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <AnimatedDecorativeBar className="w-20 h-2 bg-avangarda mb-4 mx-auto" />
            <h1 className="title-light">Pyszna Avangarda</h1>
            <p className="main-paragraph-light max-w-3xl mx-auto mt-4">
              Hotel Avangarda oferuje trzy wyjątkowe miejsca gastronomiczne - od
              eleganckiej restauracji, przez rozrywkowy klub, po klimatyczny bar
              nad rzeką.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Three Places Section - Dark Background */}
      <div className="text-white w-full py-18 md:py-28 relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <BackgroundLogoBottomDark position="right" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Three Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gastronomicPlaces.map((place, index) => {
              const IconComponent = place.icon;
              return (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/15 transition-all duration-300"
                >
                  {/* Image with overlay */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={place.image || "/placeholder.svg"}
                      alt={place.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4  p-2 backdrop-blur-sm">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                      {place.name}
                    </h3>
                    <p className="text-white/80 mb-4 text-sm md:text-base leading-relaxed line-clamp-2">
                      {place.description}
                    </p>

                    {/* Features as compact grid */}
                    <div className="grid grid-cols-2 gap-1 mb-4">
                      {place.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <div className="h-1 w-1 rounded-full bg-avangarda shrink-0"></div>
                          <span className="text-xs text-white/70 truncate">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link href={place.link}>
                      <Button
                        variant="fillRight"
                        className="w-full border-none"
                      >
                        Zobacz menu
                        <Utensils className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GastroIntro;
