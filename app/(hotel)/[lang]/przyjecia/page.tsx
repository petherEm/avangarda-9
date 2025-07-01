import GenericCTA from "@/components/generic-cta";
import EventsByCategory from "@/components/modules/Events/EventsByCategory";
import EventsGallery from "@/components/modules/Events/EventsGallery";
import EventsHero from "@/components/modules/Events/EventsHero";
import EventsIntro from "@/components/modules/Events/EventsIntro";
import { getDictionary } from "@/lib/dictionary";

export default async function EventsMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <EventsHero />
      <EventsIntro dict={dict} lang={lang} />
      <EventsGallery dict={dict} lang={lang} />
      <EventsByCategory dict={dict} lang={lang} />
      <GenericCTA
        header="Skontaktuj się z nami"
        leadText="Masz pytania lub chcesz omówić szczegóły współpracy? Skontaktuj się z nami telefonicznie lub pobierz naszą szczegółową ofertę."
        phoneNumber="+48 574 383 282"
        downloadOffer="Pobierz ofertę"
        variant="light"
      />
    </>
  );
}
