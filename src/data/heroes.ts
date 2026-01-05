import type { Hero } from '@/types/hero';

export const heroes: Hero[] = [
  {
    id: 'genji',
    slug: 'genji',
    name: {
      ko: '겐지',
      en: 'Genji',
      ja: 'ゲンジ',
    },
    role: 'damage',
    icon: '/heroes/icons/genji.png',
    profileImage: '/heroes/profiles/genji.png',
  },
  {
    id: 'mercy',
    slug: 'mercy',
    name: {
      ko: '메르시',
      en: 'Mercy',
      ja: 'マーシー',
    },
    role: 'support',
    icon: '/heroes/icons/mercy.png',
    profileImage: '/heroes/profiles/mercy.png',
  },
];

export const getHeroById = (id: string): Hero | undefined => {
  return heroes.find((hero) => hero.id === id);
};

export const getHeroBySlug = (slug: string): Hero | undefined => {
  return heroes.find((hero) => hero.slug === slug);
};

export const getHeroesByRole = (role: Hero['role']): Hero[] => {
  return heroes.filter((hero) => hero.role === role);
};
