import AnimateOnScroll from "@/components/animate-on-scroll";
import GenericCTA from "@/components/generic-cta";
import BusinessBanquets from "@/components/modules/Business/BusinessBanquets";
import BusinessHero from "@/components/modules/Business/BusinessHero";
import BusinessIntro from "@/components/modules/Business/BusinessIntro";
import BusinessEntertainment from "@/components/modules/Business/BusinessRest";
import BusinessRommsSelect from "@/components/modules/Business/BusinessRoomsSelect";
import BusinessSpa from "@/components/modules/Business/BusinessSpa";
import TrustedCompanies from "@/components/modules/Business/TrustedCompanies";

import { getDictionary } from "@/lib/dictionary";

export default async function BusinessMainPageAlt({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      {/* <HeroImage image="/gallery-images/gal-06.png" title={title} /> */}
      <BusinessHero />

      <AnimateOnScroll>
        <BusinessIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BusinessBanquets dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BusinessRommsSelect />
      </AnimateOnScroll>

      <AnimateOnScroll>
        {/* <ClubCoola dict={dict} lang={lang} /> */}
        <BusinessEntertainment dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BusinessSpa dict={dict} lang={lang} />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <TrustedCompanies dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <GenericCTA
          header="Skontaktuj się z nami"
          leadText="Zadzwoń lub napisz do nas, aby dowiedzieć się więcej o naszej ofercie dla biznesu. Jesteśmy tu, aby pomóc Ci zorganizować idealne wydarzenie."
          phoneNumber="+48 574 383 282"
          downloadOffer={lang === "pl" ? "Pobierz ofertę" : "Download offer"}
          variant="dark"
        />
      </AnimateOnScroll>
    </>
  );
}
