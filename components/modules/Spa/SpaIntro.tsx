"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Sparkles,
  Dumbbell,
  Calendar,
  Users,
  Star,
  Quote,
} from "lucide-react";
import { SPA_FEATURED_SERVICES } from "@/constants";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface SpaIntroProps {
  dict: any;
  lang: string;
}

// Testimonials data for Spa
const testimonials = [
  {
    id: 1,
    name: "Katarzyna Wiśniewska",
    location: "Białystok",
    rating: 5,
    text: "Spa w Hotel Avangarda to prawdziwy raj dla ciała i duszy! Masaż relaksacyjny był niesamowity, a grota solna pomogła mi się zregenerować po stresującym tygodniu. Personel bardzo profesjonalny i miły. Zdecydowanie wrócę!",
    date: "Grudzień 2024",
  },
  {
    id: 2,
    name: "Tomasz Kowalski",
    location: "Suwałki",
    rating: 5,
    text: "Spędziliśmy weekend wellness z żoną i było fantastycznie! Zabiegi na twarz, masaże i relaks w strefie spa. Wszystko na najwyższym poziomie. Szczególnie polecam pakiet dla par - romantycznie i relaksująco.",
    date: "Listopad 2024",
  },
];

export default function SpaIntro({ dict, lang }: SpaIntroProps) {
  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  return (
    <>
      <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* SPA SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
            {/* Main Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[7/6] w-full overflow-hidden"
            >
              <Image
                src="/spa/spa-02.jpeg"
                alt="Spa Avangarda - zabiegi wellness"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  Spa & Wellness
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                ></motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light"
              >
                Zapraszamy do strefy Spa & Wellness, gdzie profesjonalne zabiegi
                kosmetyczne spotykają się z relaksem. Oferujemy szeroki wybór
                masaży, zabiegów na twarz i ciało oraz pakiety wellness dla par.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Zobacz Zabiegi
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center gap-2 bg-transparent"
                >
                  <Calendar className="h-4 w-4" />
                  Zarezerwuj wizytę
                </Button>
              </motion.div>

              {/* Quick Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="bg-pink-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Godziny otwarcia
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Pon-Sob: 9:00 – 20:00
                  </p>
                  <p className="text-sm text-slate-600">
                    Niedziela: 10:00 – 18:00
                  </p>
                </div>
                <div className="bg-pink-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Rezerwacje</h3>
                  </div>
                  <p className="text-sm text-slate-600">Tel: +48 505 158 200</p>
                  <p className="text-sm text-slate-600">
                    spa@hotelavangarda.pl
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Spa Bestsellers - FULL WIDTH DARK BACKGROUND - RIGHT AFTER SPA INTRO */}
      <div className="relative mb-16 py-16">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 px-4 sm:px-0"
          >
            <h3 className="text-2xl font-medium mb-6 text-center text-white">
              {lang === "pl" ? "Nasze bestsellery" : "Our bestsellers"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SPA_FEATURED_SERVICES.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden rounded-none bg-white/95 backdrop-blur-sm"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={service.imageKey || "/placeholder.svg"}
                      alt={t(service.nameKey)}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h4 className="font-medium mb-1 text-lg">
                      {t(service.nameKey)}
                    </h4>
                    <p className="text-md text-gray-600 mb-2">
                      {t(service.descriptionKey)}
                    </p>
                    <p className="text-avangarda font-medium leading-relaxed">
                      {t(service.priceKey)} / {t(service.durationKey)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* Spa Testimonials - RIGHT AFTER BESTSELLERS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20 px-4 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Quote className="h-8 w-8 text-avangarda" />
              <h2 className="text-3xl font-semibold text-center">
                Opinie Gości
              </h2>
            </div>
            <p className="main-paragraph-light mb-8 text-center max-w-2xl mx-auto">
              Poznaj opinie naszych gości o relaksujących chwilach spędzonych w
              Spa & Wellness Avangarda
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-pink-50 p-6 relative"
                >
                  <div className="absolute top-4 right-4">
                    <Quote className="h-6 w-6 text-avangarda" />
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-avangarda text-avangarda"
                      />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SWIMMING POOL SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[7/6] w-full overflow-hidden"
            >
              <Image
                src="/spa/pool-01.jpg"
                alt="Basen Hotel Avangarda"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  Basen
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light"
              >
                Zapraszamy do naszego krytego basenu z podgrzewaną wodą. Idealne
                miejsce na relaks i rekreację dla całej rodziny. Basen
                wyposażony w system hydromasażu i oświetlenie LED.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Zarezerwuj czas
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="bg-pink-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Godziny otwarcia
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Codziennie: 7:00 – 22:00
                  </p>
                  <p className="text-sm text-slate-600">Temperatura: 28°C</p>
                </div>
                <div className="bg-pink-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Cennik</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Goście hotelowi: BEZPŁATNIE
                  </p>
                  <p className="text-sm text-slate-600">
                    Wejście jednorazowe: 25 zł
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Pool Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20 px-4 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-avangarda"></div>
              <h2 className="text-2xl font-semibold text-center text-primary">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-avangarda"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/pool-kids.jpg"
                  alt="Basen z hydromasażem"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/pool-03.jpg"
                  alt="Strefa relaksu przy basenie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* GROTA SOLNA SECTION - FULL WIDTH DARK BACKGROUND */}
      <div className="relative mb-16 py-16">
        <BackgroundLogoBottomDark position="left" />
        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[7/6] w-full overflow-hidden"
            >
              <Image
                src="/spa/spa-1.png"
                alt="Grota solna Avangarda"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-dark"
                >
                  Grota Solna
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-dark"
              >
                Nasza grota solna to naturalne środowisko terapeutyczne, które
                wspomaga leczenie chorób układu oddechowego, wzmacnia odporność
                i pomaga w walce ze stresem. Mikroklima groty jest bogata w jony
                ujemne.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-white">Godziny otwarcia</h3>
                  </div>
                  <p className="text-sm text-gray-200">
                    Pon-Sob: 10:00 – 19:00
                  </p>
                  <p className="text-sm text-gray-200">
                    Niedziela: 10:00 – 17:00
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-white">Cennik</h3>
                  </div>
                  <p className="text-sm text-gray-200">Sesja 45 min: 35 zł</p>
                  <p className="text-sm text-gray-200">
                    Karnet 5 sesji: 150 zł
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* Salt Room Gallery - RIGHT AFTER GROTA SOLNA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20 px-4 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-avangarda"></div>
              <h2 className="text-2xl font-semibold text-center text-primary">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-avangarda"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/spa-03.jpeg"
                  alt="Wnętrze groty solnej"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/spa-12.jpg"
                  alt="Strefa relaksu w grocie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* GYM SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[7/6] w-full overflow-hidden"
            >
              <Image
                src="/gym/gym-06.jpg"
                alt="Siłownia Matrix Avangarda"
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  Siłownia & Fitness
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light"
              >
                Nowoczesna siłownia wyposażona w profesjonalny sprzęt firmy
                Matrix. Oferujemy pełen zakres urządzeń cardio i siłowych dla
                wszystkich poziomów zaawansowania.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="bg-pink-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Godziny otwarcia
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Pon-Sob: 7:00 – 22:00
                  </p>
                  <p className="text-sm text-slate-600">
                    Niedziela: 7:00 – 20:00
                  </p>
                </div>
                <div className="bg-pink-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Cennik</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Goście hotelowi: BEZPŁATNIE
                  </p>
                  <p className="text-sm text-slate-600">
                    Wejście jednorazowe: 15 zł/h
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Gym Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20 px-4 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-avangarda"></div>
              <h2 className="text-2xl font-semibold text-center text-primary">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-avangarda"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/gym/gym-05.jpg"
                  alt="Sprzęt cardio Matrix"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/gym/gym-04.jpg"
                  alt="Strefa siłowa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
}
