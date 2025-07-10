import Business from "@/components/main/Business";
import Hero from "@/components/modules/Hero/Hero";
import Offers from "@/components/main/Offers";
import Spa from "@/components/main/Spa";
import Weddings from "@/components/main/Weddings";
import { getDictionary } from "@/lib/dictionary";
import { getAllOffers } from "@/sanity/lib/offers/getOffers";
import { getActivePopups } from "@/sanity/lib/popups/getPopups";
import AnimateOnScroll from "@/components/animate-on-scroll";
import CTAgeneric from "@/components/main/CTAgeneric";
import RestaurantNew from "@/components/main/RestaurantNew";
import TrustedCompaniesMain from "@/components/main/TrustedCompaniesMain";
import HotelPopup from "@/components/main-popup";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");
  const offers = await getAllOffers();
  const popups = await getActivePopups();

  return (
    <>
      {/* Example content to enable scrolling */}
      <Hero />

      <Offers dict={dict} offers={offers} lang={lang} />
      <Business lang={lang} dict={dict} />
      <TrustedCompaniesMain dict={dict} lang={lang} />
      <Weddings dict={dict} lang={lang} />
      <RestaurantNew dict={dict} lang={lang} />
      <Spa dict={dict} lang={lang} />
      <CTAgeneric dict={dict} lang={lang} />
      <HotelPopup popups={popups} lang={lang} />
    </>
  );
}
