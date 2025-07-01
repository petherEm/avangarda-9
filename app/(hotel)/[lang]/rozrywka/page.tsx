import AnimateOnScroll from "@/components/animate-on-scroll";
import EntertainmentHero from "@/components/modules/Entertainment/EntertainmentHero";
import EntertainmentIntro from "@/components/modules/Entertainment/EntertainmentIntro";
import { getDictionary } from "@/lib/dictionary";

export default async function EntertainmentMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Rozrywka i atrakcje" : "Entertainment";

  return (
    <>
      <EntertainmentHero />

      <AnimateOnScroll>
        <EntertainmentIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
