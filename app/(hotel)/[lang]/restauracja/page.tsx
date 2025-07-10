import GastroClub from "@/components/modules/Gastro/GastroClub";
import GastroHero from "@/components/modules/Gastro/GastroHero";
import GastroIntro from "@/components/modules/Gastro/GastroIntro";
import GastroPort2 from "@/components/modules/Gastro/GastroPort2";
import GastroRest from "@/components/modules/Gastro/GastroRest";
import { getDictionary } from "@/lib/dictionary";
import { getAllMenus } from "@/sanity/lib/menus/getMenusByRestaurant";

export default async function GastroMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch all menus
  const allMenus = await getAllMenus();

  // Group menus by restaurant
  const menusByRestaurant = {
    "dzika-roza": allMenus.filter((menu) => menu.restaurant === "dzika-roza"),
    "klub-coola": allMenus.filter((menu) => menu.restaurant === "klub-coola"),
    "bar-przystan": allMenus.filter(
      (menu) => menu.restaurant === "bar-przystan"
    ),
  };

  return (
    <>
      <GastroHero />
      <GastroIntro dict={dict} lang={lang} menus={menusByRestaurant} />
      <GastroRest
        dict={dict}
        lang={lang}
        menus={menusByRestaurant["dzika-roza"]}
      />
      <GastroClub
        dict={dict}
        lang={lang}
        menus={menusByRestaurant["klub-coola"]}
      />
      <GastroPort2
        dict={dict}
        lang={lang}
        menus={menusByRestaurant["bar-przystan"]}
      />
    </>
  );
}
