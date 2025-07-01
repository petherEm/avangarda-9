import AnimateOnScroll from "@/components/animate-on-scroll";
import { Container } from "@/components/container";
import GenericCTA from "@/components/generic-cta";
import HeroImage from "@/components/hero-image";
import OffersCTA from "@/components/modules/Offers/OffersCTA";
import OffersHero from "@/components/modules/Offers/OffersHero";
import OffersIntro from "@/components/modules/Offers/OffersIntro";
import VouchersIntro from "@/components/modules/Offers/VouchersIntro";
import OfferGrid from "@/components/offer-grid";
import { getDictionary } from "@/lib/dictionary";

import { getAllOffers } from "@/sanity/lib/offers/getOffers";
import { getAllVouchers } from "@/sanity/lib/offers/getVouchers";

const Pakiety = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const offers = await getAllOffers();
  const vouchers = await getAllVouchers();

  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Oferty i pakiety" : "Current Offers";

  return (
    <>
      <OffersHero />

      <OffersIntro dict={dict} lang={lang} offers={offers} />
      <VouchersIntro dict={dict} lang={lang} vouchers={vouchers} />
      {/* Enhanced Call to action - updated with styling from GastroIntro */}

      <GenericCTA
        header="Skontaktuj się z nami"
        leadText="Zadzwoń lub napisz do nas, aby dowiedzieć się więcej o naszej ofercie. Pomożemy Ci dobrać i zarezerwować pakiet bądź voucher."
        phoneNumber="+48 574 383 282"
        variant="light"
      />
    </>
  );
};

export default Pakiety;
