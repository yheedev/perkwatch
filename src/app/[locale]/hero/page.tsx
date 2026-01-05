import { getTranslation } from "@/lib/i18n-server";
import { LOCALES, type Locale } from "@/types/i18n";
import { heroes } from "@/data/heroes";
import { HeroList } from "@/components/HeroList";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function HeroPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;

  if (!LOCALES.includes(locale)) {
    notFound();
  }

  const { t } = await getTranslation(locale);

  const translations = {
    searchPlaceholder: t("heroes.searchPlaceholder"),
    roles: {
      tank: t("roles.tank"),
      damage: t("roles.damage"),
      support: t("roles.support"),
    },
  };

  return (
    <div className='min-h-screen p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold mb-4'>{t("heroes.title")}</h1>
          <p className='text-xl text-gray-600'>{t("heroes.description")}</p>
        </div>

        <HeroList heroes={heroes} locale={locale} translations={translations} />
      </div>
    </div>
  );
}
