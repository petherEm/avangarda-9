"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Phone,
  Utensils,
  Star,
  Quote,
  Calendar,
  Clock,
  Users,
} from "lucide-react";
import Image from "next/image";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface RestauracjaDzikaRozaProps {
  dict?: any;
  lang?: string;
}

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Anna Kowalska",
    location: "Warszawa",
    rating: 5,
    text: "Restauracja Dzika Róża to prawdziwa perła! Kotlet schabowy był idealnie przygotowany, a obsługa niezwykle profesjonalna. Atmosfera restauracji jest elegancka, ale jednocześnie przytulna. Zdecydowanie wrócimy na kolejną kolację.",
    date: "Listopad 2024",
  },
  {
    id: 2,
    name: "Marek Nowak",
    location: "Kraków",
    rating: 5,
    text: "Byliśmy tu na uroczystości rodzinnej i wszystko było perfekcyjne. Menu sezonowe zachwyciło nas smakami, a desery domowe to prawdziwe dzieła sztuki. Polecam każdemu, kto szuka wyjątkowych doznań kulinarnych.",
    date: "Październik 2024",
  },
];

const RestauracjaDzikaRoza = ({
  dict,
  lang = "pl",
}: RestauracjaDzikaRozaProps) => {
  // Helper function for translations
  const t = (key: string) => (dict ? getNestedValue(dict, key) || key : key);

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white text-primary w-full lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Header Section */}
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
              src="/restaurant/rest-01.jpg"
              alt="Restauracja Dzika Róża - eleganckie wnętrze"
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
                Restauracja Dzika Róża
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Image
                  src="/rest-logos/dzika.png"
                  alt="Logo Restauracji Dzika Róża"
                  width={220}
                  height={45}
                  className="hidden sm:block flex-shrink-1"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="main-paragraph-light"
            >
              Zapraszamy do eleganckiej Restauracji Dzika Róża, gdzie tradycyjna
              kuchnia polska spotyka się z nowoczesnymi technikami kulinarnymi.
              Nasze menu łączy autentyczne smaki z artystyczną prezentacją,
              tworząc niezapomniane doświadczenia kulinarne w stylowym wnętrzu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link href={`/${lang}/menu`}>
                <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2">
                  <Utensils className="h-4 w-4" />
                  Zobacz Menu
                </Button>
              </Link>
              <Button variant="fillRight" className="w-fit">
                <Calendar className="h-4 w-4" />
                Zarezerwuj stolik
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
                  <h3 className="font-medium text-primary">Godziny otwarcia</h3>
                </div>
                <p className="text-sm text-slate-600">Pon-Pt: 12:00 – 22:00</p>
                <p className="text-sm text-slate-600">Sob-Ndz: 11:00 – 23:00</p>
              </div>

              <div className="bg-pink-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Rezerwacje</h3>
                </div>
                <p className="text-sm text-slate-600">Tel: 29 752 50 34</p>
                <p className="text-sm text-slate-600">
                  dzika@hotelavangarda.pl
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Gallery Section - 4 images in 2 rows, full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16 px-4 sm:px-0"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-avangarda"></div>
            <h2 className="text-2xl font-semibold text-center text-primary">
              Zapraszamy
            </h2>
            <div className="h-px flex-1 bg-avangarda"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Row 1 */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/restaurant/rest-10.jpg"
                alt="Eleganckie wnętrze restauracji"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/restaurant/rest-03.jpg"
                alt="Bar restauracyjny"
                fill
                className="object-cover"
              />
            </div>
            {/* Row 2 */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/restaurant/rest-09.jpg"
                alt="Prywatna sala restauracyjna"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/restaurant/rest-07.jpg"
                alt="Tradycyjne polskie dania"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 px-4 sm:px-0"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Quote className="h-8 w-8 text-avangarda" />
            <h2 className="text-3xl font-semibold text-center">Opinie Gości</h2>
          </div>
          <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-slate-600">
            Poznaj opinie naszych gości o doświadczeniach kulinarnych w
            Restauracji Dzika Róża
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
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="h-6 w-6 text-avangarda" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-avangarda text-avangarda"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
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
                    <p className="text-sm text-slate-500">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default RestauracjaDzikaRoza;
