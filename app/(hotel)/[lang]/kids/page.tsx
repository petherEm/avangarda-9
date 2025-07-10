import AnimateOnScroll from "@/components/animate-on-scroll";
import ClubCoola from "@/components/modules/Entertainment/ClubCoola";
import EntertainmentHero from "@/components/modules/Entertainment/EntertainmentHero";
import EntertainmentIntro from "@/components/modules/Entertainment/EntertainmentIntro";
import { getDictionary } from "@/lib/dictionary";

export default async function KidsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <EntertainmentHero />
      <EntertainmentIntro dict={dict} lang={lang} />
    </>
  );
}
