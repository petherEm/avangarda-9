import AnimateOnScroll from "@/components/animate-on-scroll";
import GenericCTA from "@/components/generic-cta";
import OffersCTA from "@/components/modules/Offers/OffersCTA";
import OffersHero from "@/components/modules/Offers/OffersHero";
import OffersIntro from "@/components/modules/Offers/OffersIntro";
import VouchersIntro from "@/components/modules/Offers/VouchersIntro";
import { getDictionary } from "@/lib/dictionary";

import { getAllOffers } from "@/sanity/lib/offers/getOffers";
import { getAllVouchers } from "@/sanity/lib/offers/getVouchers";

const Offers = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const offers = await getAllOffers();
  const vouchers = await getAllVouchers();

  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <OffersHero />

      <AnimateOnScroll>
        {/* @ts-expect-error - Sanity types don't match component interface but work at runtime */}
        <OffersIntro dict={dict} lang={lang} offers={offers} />
        {/* @ts-expect-error - Sanity types don't match component interface but work at runtime */}
        <VouchersIntro dict={dict} lang={lang} vouchers={vouchers} />
        {/* Enhanced Call to action - updated with styling from GastroIntro */}
        <OffersCTA dict={dict} lang={lang} />
      </AnimateOnScroll>

      <GenericCTA
        header="Skontaktuj się z nami"
        leadText="Zadzwoń lub napisz do nas, aby dowiedzieć się więcej o naszej ofercie dla biznesu. Jesteśmy tu, aby pomóc Ci zorganizować idealne wydarzenie."
        phoneNumber="+48 574 383 282"
        downloadOffer={lang === "pl" ? "Pobierz ofertę" : "Download offer"}
        variant="dark"
      />
    </>
  );
};

export default Offers;
