"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";

interface RestaurantProps {
  dict: {
    restaurants: {
      title: string;
      description: string;
      details: string;
    };
  };
  lang?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const RestaurantNew = ({ dict, lang }: RestaurantProps) => {
  // Determine the correct URL based on language
  const restaurantUrl = lang === "en" ? "/en/restauracja" : "/pl/restauracja";

  return (
    <Container className="bg-white w-full text-primary py-8 md:py-16 mb-28 md:mb-32">
      <div className="max-w-7xl mx-auto">
        {/* Content Section - Two halves */}
        <motion.div
          className="mb-6 md:mb-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left half - Two images (hidden on mobile) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              variants={fadeInScale}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full h-[230px] md:h-[330px]"
            >
              <Image
                src="/restaurant/rest-10.jpg"
                alt="Restaurant Food"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeInScale}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full h-[230px] md:h-[330px]"
            >
              <Image
                src="/restaurant/coola-gastro.jpg"
                alt="Fort View"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right half - Text content with button below */}
          <div className="flex flex-col justify-center">
            <AnimatedDecorativeBar />
            <motion.h1
              variants={fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="title-light"
            >
              {dict.restaurants.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="main-paragraph-light"
            >
              {dict.restaurants.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link href={restaurantUrl}>
                <Button size="lg" variant="fillRight">
                  Dowiedz się więcej
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Images Grid - Two images on left, one large on right */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left side - two more images stacked */}
          <div className="col-span-1 md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              variants={fadeInScale}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full h-[230px] md:h-[330px]"
            >
              <Image
                src="/fort/fort-05.png"
                alt="Restaurant Food"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeInScale}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full h-[230px] md:h-[330px]"
            >
              <Image
                src="/restaurant/przystan-01.jpg"
                alt="Fort View"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right side - large image */}
          <motion.div
            variants={fadeInScale}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-1 md:col-span-6 relative w-full h-[230px] md:h-[330px]"
          >
            <Image
              src="/restaurant/rest-03.jpg"
              alt="Restaurant Interior"
              fill
              priority
              className="object-cover"
              quality={100}
            />
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default RestaurantNew;
