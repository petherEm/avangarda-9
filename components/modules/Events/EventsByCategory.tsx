"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Download, Star, TreePine, Users } from "lucide-react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import Link from "next/link";

interface EventTypesProps {
  dict?: any;
  lang?: string;
}

export default function EventTypes({ dict, lang = "pl" }: EventTypesProps) {
  const eventTypes = [
    {
      id: "wesela",
      title: "Wesela",
      subtitle: "Niezapomniane chwile w wyjątkowej scenerii",
      description:
        "Hotel Avangarda to wyjątkowe miejsce, w którym marzenia o idealnym weselu stają się rzeczywistością. Oferujemy eleganckie sale bankietowe, profesjonalną obsługę i niepowtarzalną atmosferę, która tworzy tło dla najpiękniejszych wspomnień. Nasze doświadczenie i dbałość o każdy detal sprawiają, że Twój wielki dzień będzie naprawdę niezapomniany.",
      features: [
        "Sale bankietowe do 500 osób",
        "Profesjonalna obsługa kelnerska",
        "Menu weselne dopasowane do gustu",
        "Dekoracje i aranżacja sali",
        "Parkiet taneczny i nagłośnienie",
        "Pokoje dla Młodej Pary",
        "Parking dla gości",
        "Koordynator wesela",
      ],
      packages: [
        {
          name: "Pakiet Klasyczny",
          price: "od 180 zł/os",
          description: "Menu 3-daniowe + napoje + obsługa",
        },
        {
          name: "Pakiet Premium",
          price: "od 250 zł/os",
          description: "Menu 4-daniowe + bar otwarty + dekoracje",
        },
        {
          name: "Pakiet Exclusive",
          price: "od 350 zł/os",
          description: "Menu degustacyjne + premium bar + full service",
        },
      ],
      icon: Heart,
      color: "bg-avangarda/10",
      accentColor: "text-pink-600",
      image: "/wedding/wed-room-04.jpg",
      galleryImages: ["/wedding/wed-room-03.jpg", "/wedding/wed-room-04.jpg"],
      imagePosition: "left",
    },
    {
      id: "komunie",
      title: "Komunie",
      subtitle: "Świętowanie ważnych momentów w życiu",
      description:
        "Pierwsza Komunia Święta to szczególny moment w życiu dziecka i jego najbliższych. W Hotelu Avangarda zadbamy o uroczystą i pełną ciepła oprawę tego wyjątkowego dnia. Oferujemy eleganckie sale, dopracowane menu i rodzinną atmosferę – wszystko po to, by wspólne świętowanie pozostało w pamięci na długie lata.",
      features: [
        "Sale na 50-200 osób",
        "Menu dostosowane do dzieci i dorosłych",
        "Specjalne atrakcje dla najmłodszych",
        "Dekoracje tematyczne",
        "Strefa zabaw dla dzieci",
        "Fotograf na życzenie",
        "Tort komunijny",
        "Animacje dla dzieci",
      ],
      packages: [
        {
          name: "Pakiet Rodzinny",
          price: "od 120 zł/os",
          description: "Menu 2-daniowe + napoje + animacje",
        },
        {
          name: "Pakiet Uroczysty",
          price: "od 160 zł/os",
          description: "Menu 3-daniowe + tort + dekoracje",
        },
        {
          name: "Pakiet Kompletny",
          price: "od 220 zł/os",
          description: "Menu premium + animacje + fotograf",
        },
      ],
      icon: Star,
      color: "bg-blue-50",
      accentColor: "text-blue-600",
      image: "/wedding/wed-room-07.jpg",
      galleryImages: ["/wedding/wed-room-04.jpg", "/wedding/wed-room-03.jpg"],
      imagePosition: "right",
    },
    {
      id: "uroczystosci-rodzinne",
      title: "Uroczystości Rodzinne",
      subtitle: "Świętuj z rodziną w wyjątkowej atmosferze",
      description:
        "Organizujemy niezapomniane uroczystości rodzinne - od jubileuszy i rocznic po chrzciny i urodziny. Hotel Avangarda zapewni ciepłą, rodzinną atmosferę i profesjonalną obsługę, dzięki której każde święto będzie wyjątkowe.",
      features: [
        "Sale na 20-150 osób",
        "Menu dostosowane do okazji",
        "Dekoracje tematyczne",
        "Obsługa kelnerska",
        "Tort okolicznościowy",
        "Fotograf na życzenie",
        "Parking dla gości",
        "Koordynator wydarzenia",
      ],
      packages: [
        {
          name: "Pakiet Intymny",
          price: "od 90 zł/os",
          description: "Menu 2-daniowe + napoje + podstawowa obsługa",
        },
        {
          name: "Pakiet Rodzinny",
          price: "od 140 zł/os",
          description: "Menu 3-daniowe + tort + dekoracje",
        },
        {
          name: "Pakiet Jubileuszowy",
          price: "od 190 zł/os",
          description: "Menu premium + fotograf + full service",
        },
      ],
      icon: Users,
      color: "bg-amber-50",
      accentColor: "text-amber-600",
      image: "/wedding/wed-room-03.jpg",
      galleryImages: ["/wedding/wed-room-07.jpg", "/outdoor/out-02.jpg"],
      imagePosition: "left",
    },
    {
      id: "plenerowe",
      title: "Przyjęcia Plenerowe",
      subtitle: "Celebracja pod gwiazdami",
      description:
        "Wykorzystaj wyjątkowe otoczenie Hotelu Avangarda do organizacji niezapomnianego przyjęcia pod gołym niebem. Nasze otwarte przestrzenie w zielonej okolicy nad Narwią tworzą idealną scenerię dla letnich uroczystości, pikników i spotkań w swobodnej atmosferze, blisko natury.",
      features: [
        "Namioty eventowe na każdą pogodę",
        "Grille i kuchnia plenerowa",
        "Oświetlenie dekoracyjne",
        "Scena i nagłośnienie",
        "Strefy lounge i chill-out",
        "Bar mobilny",
        "Catering plenerowy",
      ],
      packages: [
        {
          name: "Pakiet Ogrodowy",
          price: "od 100 zł/os",
          description: "Grill + napoje + podstawowa obsługa",
        },
        {
          name: "Pakiet Plenerowy",
          price: "od 150 zł/os",
          description: "Catering + namiot + dekoracje",
        },
        {
          name: "Pakiet Exclusive Outdoor",
          price: "od 200 zł/os",
          description: "Premium catering + full service + animacje",
        },
      ],
      icon: TreePine,
      color: "bg-green-50",
      accentColor: "text-green-600",
      image: "/outdoor/out-02.jpg",
      galleryImages: ["/outdoor/out-01.jpg", "/outdoor/out-04.jpg"],
      imagePosition: "right",
    },
  ];

  return (
    <div className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-14">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Event Types Sections */}
        <div className="space-y-20 px-4 sm:px-0">
          {eventTypes.map((event, index) => {
            const isImageLeft = event.imagePosition === "left";

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="md:mb-28"
              >
                {/* Main Content */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-8`}
                >
                  {/* Image - Left or Right based on imagePosition */}
                  <div
                    className={`${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text Content - Right or Left based on imagePosition */}
                  <div
                    className={`space-y-6 ${isImageLeft ? "lg:order-2" : "lg:order-1"} flex flex-col`}
                  >
                    <div className="flex-1">
                      <AnimatedDecorativeBar />
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="title-light">{event.title}</h1>
                      </div>

                      <p className="main-paragraph-light mb-1">
                        {event.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Co oferujemy:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {event.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Better positioned download button */}
                      <div className="flex justify-start">
                        <Link
                          href="/business/brochure.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="lg"
                            className="bg-avangarda hover:bg-avangarda/90 text-white font-alata px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                            variant="default"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            POBIERZ OFERTĘ
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery Preview - Same width as main image */}
                <div className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                    {event.galleryImages.map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-video w-full overflow-hidden"
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${event.title} ${i + 1}`}
                          fill
                          className="object-cover transition-opacity duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
