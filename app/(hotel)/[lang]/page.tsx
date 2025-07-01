import Business from "@/components/main/Business";
import Hero from "@/components/modules/Hero/Hero";
import Offers from "@/components/main/Offers";
import Spa from "@/components/main/Spa";
import Weddings from "@/components/main/Weddings";
import { getDictionary } from "@/lib/dictionary";
import { getAllOffers } from "@/sanity/lib/offers/getOffers";
import AnimateOnScroll from "@/components/animate-on-scroll";
import CTAgeneric from "@/components/main/CTAgeneric";
import RestaurantNew from "@/components/main/RestaurantNew";
import TrustedCompaniesMain from "@/components/main/TrustedCompaniesMain";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");
  const offers = await getAllOffers();
  return (
    <>
      {/* Example content to enable scrolling */}
      <Hero />

      <Offers dict={dict} offers={offers} lang={lang} />

      <Business lang={lang} dict={dict} />

      <TrustedCompaniesMain dict={dict} lang={lang} />
      <AnimateOnScroll>
        <Weddings dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <RestaurantNew dict={dict} lang={lang} />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Spa dict={dict} lang={lang} />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <CTAgeneric dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
