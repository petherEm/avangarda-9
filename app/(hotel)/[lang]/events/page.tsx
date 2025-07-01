import AnimateOnScroll from "@/components/animate-on-scroll";
import GenericCTA from "@/components/generic-cta";
import EventsByCategory from "@/components/modules/Events/EventsByCategory";
import EventsGallery from "@/components/modules/Events/EventsGallery";
import EventsHero from "@/components/modules/Events/EventsHero";
import EventsIntro from "@/components/modules/Events/EventsIntro";
import { getDictionary } from "@/lib/dictionary";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <EventsHero />
      <AnimateOnScroll>
        <EventsIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <EventsGallery />
      <AnimateOnScroll>
        <EventsByCategory dict={dict} lang={lang} />
      </AnimateOnScroll>
      {/* Contact Section */}
      <GenericCTA
        header={lang === "pl" ? "Skontaktuj się z nami" : "Contact us"}
        leadText={
          lang === "pl"
            ? "Masz pytania lub chcesz omówić szczegóły współpracy? Skontaktuj się z nami telefonicznie lub pobierz naszą szczegółową ofertę."
            : "Have questions or want to discuss cooperation details? Contact us by phone or download our detailed offer."
        }
        phoneNumber="+48 574 383 282"
        downloadOffer={lang === "pl" ? "Pobierz ofertę" : "Download offer"}
        variant="light"
      />
    </>
  );
}
