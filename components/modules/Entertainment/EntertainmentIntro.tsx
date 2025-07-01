"use client";

import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Waves,
  Trees,
  Ship,
  Footprints,
  FishIcon as Swimming,
  Clock,
  Baby,
  PlayIcon as Playground,
  Leaf,
  Calendar,
  Users,
  Target,
  Gamepad2,
  Flame,
  UtensilsCrossed,
  VibrateIcon as Volleyball,
} from "lucide-react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

export default function OutdoorEntertainment({
  dict,
  lang,
}: {
  dict: any;
  lang: string;
}) {
  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* 1. ZDROWIE I AKTYWNOŚĆ SECTION */}
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
              src="/outdoor/out-02.jpg"
              alt="Zdrowie i Aktywność - kajaki i spacery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </motion.div>

          <div>
            <AnimatedDecorativeBar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="title-light"
            >
              Zdrowie i Aktywność
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="main-paragraph-light"
            >
              Różan położony jest na wysokiej skarpie, którą opływa rzeka Narew
              i dopływ Różanica. Oferujemy aktywny wypoczynek na świeżym
              powietrzu - spływy kajakowe, długie spacery oraz siatkówkę
              plażową.
            </motion.p>

            {/* Activity Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Ship className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Spływy kajakowe</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Malownicze trasy po Narwi i Różanicy
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Footprints className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Długie spacery</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Szlaki piesze przez lasy i łąki
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Volleyball className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">
                    Siatkówka plażowa
                  </h3>
                </div>
                <p className="text-sm text-slate-600">
                  Boisko do siatkówki na świeżym powietrzu
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Trees className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Nordic Walking</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Trasy Nordic Walking w otoczeniu przyrody
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Zdrowie i Aktywność Gallery */}
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
                src="/outdoor/out-01.jpg"
                alt="Spływy kajakowe po Narwi"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/outdoor/out-03.jpg"
                alt="Spacery po okolicy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* 2. GRY W KLUBIE COOLA SECTION - INVERTED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
          <div className="order-2 lg:order-1">
            <AnimatedDecorativeBar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="title-light"
            >
              Gry w Klubie Coola
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="main-paragraph-light"
            >
              Klub Coola to miejsce, gdzie można aktywnie spędzić czas grając w
              bilard, rzutki czy cymbergaj. Idealne miejsce na wieczorne
              rozrywki z przyjaciółmi w klimatycznym wnętrzu.
            </motion.p>

            {/* Games Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Gamepad2 className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Bilard</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Profesjonalne stoły bilardowe
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Rzutki</h3>
                </div>
                <p className="text-sm text-slate-600">Tarcze do gry w rzutki</p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Cymbergaj</h3>
                </div>
                <p className="text-sm text-slate-600">Klasyczna gra stołowa</p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Godziny</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Codziennie: 16:00 – 24:00
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="order-1 lg:order-2 relative aspect-[7/6] w-full overflow-hidden"
          >
            <Image
              src="/klub/klub-05.jpg"
              alt="Gry w Klubie Coola - bilard i rozrywka"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </motion.div>
        </div>

        {/* Klub Coola Gallery */}
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
                src="/klub/klub-06.jpg"
                alt="Rzutki w Klubie Coola"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/klub/klub-07.jpg"
                alt="Cymbergaj w Klubie Coola"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* 3. ATRAKCJE DLA DZIECI SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[7/6] w-full overflow-hidden"
          >
            <Image
              src="/outdoor/out-07.jpg"
              alt="Atrakcje dla dzieci - plac zabaw"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </motion.div>

          <div>
            <AnimatedDecorativeBar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="title-light"
            >
              Atrakcje dla Dzieci
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="main-paragraph-light"
            >
              Nasze otoczenie oferuje wiele atrakcji dla najmłodszych gości.
              Dzieci mogą cieszyć się bezpieczną zabawą na świeżym powietrzu i
              odkrywać uroki natury pod opieką rodziców.
            </motion.p>

            {/* Kids Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Playground className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Plac zabaw</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Nowoczesny plac zabaw z bezpiecznymi atrakcjami
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">
                    Ścieżka edukacyjna
                  </h3>
                </div>
                <p className="text-sm text-slate-600">
                  Poznawanie lokalnej flory i fauny
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Baby className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">
                    Brodzik dla dzieci
                  </h3>
                </div>
                <p className="text-sm text-slate-600">
                  Płytki basen dla najmłodszych
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Gamepad2 className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Pokój gier</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Konsole i gry planszowe
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Atrakcje dla Dzieci Gallery */}
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
                src="/outdoor/out-04.jpg"
                alt="Plac zabaw dla dzieci"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/outdoor/out-06.jpg"
                alt="Ścieżka edukacyjna"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* 4. BASEN SECTION - INVERTED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
          <div className="order-2 lg:order-1">
            <AnimatedDecorativeBar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="title-light"
            >
              Basen
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="main-paragraph-light"
            >
              Zapraszamy do naszego krytego basenu z podgrzewaną wodą i biczami
              wodnymi. Idealne miejsce na relaks i rekreację dla całej rodziny.
              Basen wyposażony w system hydromasażu i oświetlenie LED.
            </motion.p>

            {/* Pool Features */}
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
                  <h3 className="font-medium text-primary">Godziny otwarcia</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Codziennie: 7:00 – 22:00
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
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Waves className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Bicze wodne</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Relaksujący masaż wodny
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Swimming className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Temperatura</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Stała temperatura: 28°C
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="order-1 lg:order-2 relative aspect-[7/6] w-full overflow-hidden"
          >
            <Image
              src="/outdoor/out-05.jpg"
              alt="Basen rekreacyjny z biczami wodnymi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </motion.div>
        </div>

        {/* Basen Gallery */}
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

        {/* 5. FORT NO.5 GRILLOWISKO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[7/6] w-full overflow-hidden"
          >
            <Image
              src="/fort/fort-05.png"
              alt="Fort no.5 - grillowisko i miejsce na ognisko"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </motion.div>

          <div>
            <AnimatedDecorativeBar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="title-light"
            >
              Fort no.5 Grillowisko
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="main-paragraph-light"
            >
              Fort no.5 to wyjątkowe miejsce na organizację grillowania i
              spotkań plenerowych. Historyczne miejsce z nowoczesnymi
              udogodnieniami do przygotowywania posiłków na świeżym powietrzu.
            </motion.p>

            {/* Fort Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Grille i ognisko</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Profesjonalne grille i miejsce na ognisko
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <UtensilsCrossed className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Wyposażenie</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Stoły, ławki i podstawowe wyposażenie
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Pojemność</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Do 30 osób jednocześnie
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Dostępność</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Codziennie: 10:00 – 22:00
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Fort no.5 Gallery */}
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
                src="/fort/fort-06.jpg"
                alt="Fort no.5 - wnętrze"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/fort/fort-04.jpg"
                alt="Fort no.5 - miejsce grillowe"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
