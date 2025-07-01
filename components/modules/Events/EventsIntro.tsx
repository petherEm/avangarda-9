"use client";
import Image from "next/image";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MapPin } from "lucide-react";

import { VENUES_DATA } from "@/constants";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface EventsIntroProps {
  dict: any;
  lang: string;
}

export default function EventsIntro({ dict, lang }: EventsIntroProps) {
  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <AnimatedDecorativeBar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="title-light"
            >
              {t("events.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="main-paragraph-light"
            >
              {t("events.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video w-full overflow-hidden"
          >
            <Image
              src="/wedding/wed-room-04.jpg"
              alt={t("events.title")}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Venue Capacity Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <h2 className="text-3xl font-semibold text-center">
              {t("events.venuesTitle")}
            </h2>
          </div>

          <p className="main-paragraph-light text-center mb-8 max-w-3xl mx-auto">
            {t("events.venuesDescription")}
          </p>

          <Tabs defaultValue="salaBankietowa" className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-4 mb-12 bg-gray-100 rounded-2xl p-2 h-auto md:h-14">
              {Object.keys(VENUES_DATA).map((venueKey) => (
                <TabsTrigger
                  key={venueKey}
                  value={venueKey}
                  className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold"
                >
                  {t(VENUES_DATA[venueKey].nameKey)}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(VENUES_DATA).map(([key, venue]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="relative aspect-[4/3] md:h-[400px] w-full overflow-hidden">
                    <Image
                      src={venue.image}
                      alt={t(venue.nameKey)}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {t(venue.nameKey)}
                      </h3>
                      <p className="main-paragraph-light">
                        {t(`events.venues.${key}.description`)}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-pink-50 p-4 rounded-none text-center">
                        <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm text-avangarda">
                          {t("events.venueInfo.maxGuests")}
                        </p>
                        <p className="text-xl font-semibold">
                          {venue.capacity} {t("events.venueInfo.people")}
                        </p>
                      </div>

                      <div className="bg-pink-50 p-4 rounded-none text-center">
                        <MapPin className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm text-avangarda">
                          {t("events.venueInfo.area")}
                        </p>
                        <p className="text-xl font-semibold">
                          {t(venue.sizeKey)}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        {t("events.venueInfo.amenities")}:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {venue.featuresKeys.map((featureKey, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
                            <span>{t(featureKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </Container>
  );
}
