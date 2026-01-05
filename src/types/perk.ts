import type { LocalizedText } from './i18n';

export type PerkTier = 1 | 2;

export interface Perk {
  id: string;
  heroId: string;
  tier: PerkTier;
  name: LocalizedText;
  description: LocalizedText;
  icon: string;
  videoUrl?: string;
  season?: string;
}
