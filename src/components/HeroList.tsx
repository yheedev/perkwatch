"use client";

import { useState } from "react";
import type { Hero } from "@/types/hero";
import type { Locale } from "@/types/i18n";
import Link from "next/link";
import Image from "next/image";

interface HeroListProps {
  heroes: Hero[];
  locale: Locale;
  translations: {
    searchPlaceholder: string;
    roles: {
      tank: string;
      damage: string;
      support: string;
    };
  };
}

export function HeroList({ heroes, locale, translations }: HeroListProps) {
  const [search, setSearch] = useState("");

  const filteredHeroes = heroes.filter((hero) => hero.name[locale].toLowerCase().includes(search.toLowerCase()));

  const tankHeroes = filteredHeroes.filter((h) => h.role === "tank");
  const damageHeroes = filteredHeroes.filter((h) => h.role === "damage");
  const supportHeroes = filteredHeroes.filter((h) => h.role === "support");

  return (
    <div>
      {/* 검색창 */}
      <div className='mb-8'>
        <input
          type='text'
          placeholder={translations.searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full max-w-md px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none'
        />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <section>
          <h2 className='text-2xl font-bold mb-6'>{translations.roles.tank}</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
            {tankHeroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} locale={locale} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-6'>{translations.roles.damage}</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
            {damageHeroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} locale={locale} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-6'>{translations.roles.support}</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
            {supportHeroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} locale={locale} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function HeroCard({ hero, locale }: { hero: Hero; locale: Locale }) {
  return (
    <Link href={`/${locale}/hero/${hero.slug}`}>
      <div className='group cursor-pointer'>
        <div className='aspect-square bg-gray-200 rounded-lg mb-3 overflow-hidden flex items-center justify-center border-2 border-gray-300 group-hover:border-blue-500 transition-colors relative'>
          <Image
            src={hero.icon}
            alt={hero.name[locale]}
            fill
            sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 50vw, 25vw'
            className='object-cover'
            loading='lazy'
          />
        </div>
        <p className='text-center font-medium group-hover:text-blue-500 transition-colors'>{hero.name[locale]}</p>
      </div>
    </Link>
  );
}
