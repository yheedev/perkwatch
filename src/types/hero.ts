import type { LocalizedText } from './i18n';

export type HeroRole = 'tank' | 'damage' | 'support';

export interface Hero {
  id: string;
  slug: string;
  name: LocalizedText;
  role: HeroRole;
  icon: string;
  profileImage: string;
}
