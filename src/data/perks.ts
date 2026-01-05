import type { Perk } from '@/types/perk';

export const perks: Perk[] = [
  // Genji - Tier 1
  {
    id: 'genji-t1-1',
    heroId: 'genji',
    tier: 1,
    name: {
      ko: '강화된 질풍참',
      en: 'Enhanced Swift Strike',
      ja: '強化された風斬り',
    },
    description: {
      ko: '질풍참으로 처치 시 재사용 대기시간이 추가로 초기화됩니다.',
      en: 'Swift Strike cooldown resets twice on elimination.',
      ja: '風斬りでキルした時、クールダウンが追加でリセットされます。',
    },
    icon: '/perks/genji/t1-1.png',
    videoUrl: '/videos/perks/genji-t1-1.mp4',
    season: 'Season 15',
  },
  {
    id: 'genji-t1-2',
    heroId: 'genji',
    tier: 1,
    name: {
      ko: '용의 민첩성',
      en: "Dragon's Agility",
      ja: '龍の敏捷性',
    },
    description: {
      ko: '이단 점프 후 짧은 시간 동안 이동 속도가 증가합니다.',
      en: 'Gain movement speed boost after double jump.',
      ja: '二段ジャンプ後、短時間移動速度が増加します。',
    },
    icon: '/perks/genji/t1-2.png',
    season: 'Season 15',
  },

  // Genji - Tier 2
  {
    id: 'genji-t2-1',
    heroId: 'genji',
    tier: 2,
    name: {
      ko: '용검 연장',
      en: 'Extended Dragonblade',
      ja: '龍撃剣延長',
    },
    description: {
      ko: '용검 지속시간이 2초 증가합니다.',
      en: 'Dragonblade duration increased by 2 seconds.',
      ja: '龍撃剣の持続時間が2秒増加します。',
    },
    icon: '/perks/genji/t2-1.png',
    videoUrl: '/videos/perks/genji-t2-1.mp4',
    season: 'Season 15',
  },
  {
    id: 'genji-t2-2',
    heroId: 'genji',
    tier: 2,
    name: {
      ko: '그림자 습격',
      en: 'Shadow Assault',
      ja: '影の襲撃',
    },
    description: {
      ko: '질풍참 사용 후 3초 동안 피해량이 25% 증가합니다.',
      en: 'Deal 25% more damage for 3 seconds after Swift Strike.',
      ja: '風斬り使用後3秒間、ダメージが25%増加します。',
    },
    icon: '/perks/genji/t2-2.png',
    season: 'Season 15',
  },

  // Mercy - Tier 1
  {
    id: 'mercy-t1-1',
    heroId: 'mercy',
    tier: 1,
    name: {
      ko: '강화된 치유',
      en: 'Enhanced Healing',
      ja: '強化されたヒーリング',
    },
    description: {
      ko: '카두케우스 지팡이의 치유량이 20% 증가합니다.',
      en: 'Caduceus Staff healing increased by 20%.',
      ja: 'カドゥケウス・スタッフの回復量が20%増加します。',
    },
    icon: '/perks/mercy/t1-1.png',
    videoUrl: '/videos/perks/mercy-t1-1.mp4',
    season: 'Season 15',
  },
  {
    id: 'mercy-t1-2',
    heroId: 'mercy',
    tier: 1,
    name: {
      ko: '천사의 속도',
      en: "Guardian Angel's Speed",
      ja: '天使の速度',
    },
    description: {
      ko: '수호천사 이동 속도가 30% 증가합니다.',
      en: 'Guardian Angel movement speed increased by 30%.',
      ja: 'ガーディアン・エンジェルの移動速度が30%増加します。',
    },
    icon: '/perks/mercy/t1-2.png',
    season: 'Season 15',
  },

  // Mercy - Tier 2
  {
    id: 'mercy-t2-1',
    heroId: 'mercy',
    tier: 2,
    name: {
      ko: '발키리 연장',
      en: 'Extended Valkyrie',
      ja: 'ヴァルキリー延長',
    },
    description: {
      ko: '발키리 지속시간이 5초 증가합니다.',
      en: 'Valkyrie duration increased by 5 seconds.',
      ja: 'ヴァルキリーの持続時間が5秒増加します。',
    },
    icon: '/perks/mercy/t2-1.png',
    videoUrl: '/videos/perks/mercy-t2-1.mp4',
    season: 'Season 15',
  },
  {
    id: 'mercy-t2-2',
    heroId: 'mercy',
    tier: 2,
    name: {
      ko: '연쇄 치유',
      en: 'Chain Healing',
      ja: '連鎖ヒーリング',
    },
    description: {
      ko: '치유 대상 주변 아군도 50%의 치유를 받습니다.',
      en: 'Healing target also heals nearby allies for 50%.',
      ja: '回復対象の周囲の味方も50%の回復を受けます。',
    },
    icon: '/perks/mercy/t2-2.png',
    season: 'Season 15',
  },
];

export const getPerksByHeroId = (heroId: string): Perk[] => {
  return perks.filter((perk) => perk.heroId === heroId);
};

export const getPerksByHeroIdAndTier = (
  heroId: string,
  tier: 1 | 2
): Perk[] => {
  return perks.filter((perk) => perk.heroId === heroId && perk.tier === tier);
};

export const getPerkById = (id: string): Perk | undefined => {
  return perks.find((perk) => perk.id === id);
};
