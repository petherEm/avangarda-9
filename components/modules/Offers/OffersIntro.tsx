"use client";

import { Container } from "@/components/container";
import { motion } from "framer-motion";
import OfferGrid from "@/components/offer-grid";
import type { Offers } from "../../../sanity.types";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface OffersIntroProps {
  dict: any;
  lang: string;
  offers: Offers[];
}

const OffersIntro = ({ dict, lang, offers }: OffersIntroProps) => {
  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Offers Grid Section */}
        {offers && offers.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="subtitle-light">{t("offers.browseTitle")}</h2>

            <OfferGrid offers={offers} lang={lang} />
          </motion.div>
        )}
      </div>
    </Container>
  );
};

export default OffersIntro;
