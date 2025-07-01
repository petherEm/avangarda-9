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

  const title = lang === "pl" ? "Oferta dla biznesu" : "Business events";

  return (
    <>
      <BusinessHero />
      <BusinessIntro dict={dict} lang={lang} />
      <BusinessBanquets dict={dict} lang={lang} />
      <BusinessRommsSelect />
      <BusinessEntertainment dict={dict} lang={lang} />
      <BusinessSpa dict={dict} lang={lang} />
      <TrustedCompanies dict={dict} lang={lang} />
      <GenericCTA
        header="Skontaktuj się z nami"
        leadText="Zadzwoń lub napisz do nas, aby dowiedzieć się więcej o naszej ofercie dla biznesu. Jesteśmy tu, aby pomóc Ci zorganizować idealne wydarzenie."
        phoneNumber="+48 574 383 282"
        downloadOffer={lang === "pl" ? "Pobierz ofertę" : "Download offer"}
        variant="dark"
      />
    </>
  );
}
