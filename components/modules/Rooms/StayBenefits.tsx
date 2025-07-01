"use client";

import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import { motion } from "framer-motion";
import { Shield, Tag, Gift, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "NAJLEPSZE OFERTY",
    description: "Atrakcyjne oferty specjalne dostępne tylko na naszej stronie",
  },
  {
    icon: CheckCircle,
    title: "POTWIERDZENIE REZERWACJI",
    description: "Otrzymujesz natychmiastowe potwierdzenie rezerwacji",
  },
  {
    icon: Tag,
    title: "NAJNIŻSZE CENY",
    description: "Zarezerwuj bezpośrednio przez naszą stronę www",
  },
  {
    icon: Shield,
    title: "BEZPIECZEŃSTWO",
    description: "Zapewniamy bezpieczeństwo każdej transakcji",
  },
];

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

interface StayBenefitsProps {
  className?: string;
}

const StayBenefits = ({ className }: StayBenefitsProps) => {
  return (
    <section className="w-full py-16 md:py-28 relative">
      <BackgroundLogoBottomDark />

      <div className="relative z-20 px-4 sm:px-6 lg:px-8">
        {/* Benefits Grid - Full width with proper margins */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative"
              >
                {/* Benefit Item */}
                <div className="flex items-start justify-between p-4 lg:p-6 hover:bg-white/5 transition-all duration-300 h-[140px] lg:h-[160px] border-b border-avangarda/40">
                  <div className="flex-1 pr-4">
                    <motion.h3
                      className="text-base lg:text-lg font-bold text-white mb-3 uppercase tracking-wider group-hover:text-avangarda transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {benefit.title}
                    </motion.h3>
                    <p className="text-white/70 text-xs lg:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Icon Circle */}
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-avangarda/30 bg-avangarda/10 flex items-center justify-center group-hover:border-avangarda group-hover:bg-avangarda/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <benefit.icon className="h-6 w-6 lg:h-7 lg:w-7 text-avangarda" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayBenefits;
