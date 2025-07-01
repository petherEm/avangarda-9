import GastroClub from "@/components/modules/Gastro/GastroClub";
import GastroHero from "@/components/modules/Gastro/GastroHero";
import GastroIntro from "@/components/modules/Gastro/GastroIntro";
import GastroPort2 from "@/components/modules/Gastro/GastroPort2";
import GastroRest from "@/components/modules/Gastro/GastroRest";
import { getDictionary } from "@/lib/dictionary";

export default async function GastroMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <GastroHero />
      <GastroIntro dict={dict} lang={lang} />
      <GastroRest dict={dict} lang={lang} />
      <GastroClub dict={dict} lang={lang} />
      <GastroPort2 dict={dict} lang={lang} />
    </>
  );
}
