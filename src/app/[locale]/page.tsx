import { getTranslation } from "@/lib/i18n-server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/types/i18n";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const { t } = await getTranslation(locale);

  return (
    <div className="min-h-screen p-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <LanguageSwitcher />
        </div>

        <div className="space-y-6">
          <p className="text-xl text-gray-600">{t("description")}</p>
          <div className="flex gap-4">
            <Link
              href={`/${locale}/hero`}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {t("selectHero")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
