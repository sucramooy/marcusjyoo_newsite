const siteOrigin = (import.meta.env.SITE_URL ?? 'https://marcusjyoo.com').replace(/\/$/, '');
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const siteUrl = `${siteOrigin}${basePath}`;

export const site = {
  name: 'Marcus J. Yoo',
  title: 'Marcus J. Yoo · Mechanical Engineer',
  description:
    'Sliderules, Snowskates and more.',
  url: siteUrl,
  author: {
    edu: 'Rose-Hulman Institute of Technology 2028',
    bio: 'I focus on solving complex challenges with real human impact. By treating design as a complementary discipline, I sharpen my ability to think differently, communicate ideas visually, and bring a creative edge to engineering innovation.',
    email: 'yoomj@rose-hulman.edu', // add your public email when ready, e.g. 'marcus@marcusjyoo.com'
  },
  locale: 'en',
  locales: ['en'] as const,
  writingPageSize: 8,
  tagIndexThreshold: 1,
  license: {
    name: 'CC BY-NC-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  },
  social: [
    // Uncomment and fill in as you set them up.
    // 
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcusjyoo/' },
    { label: 'Instagram', href: 'https://www.instagram.com/marcus_artstuffs/' }, // if you post photography
    { label: 'GitHub', href: 'https://github.com/YOUR_HANDLE' },  
  ] as Array<{ label: string; href: string }>,
  features: {
    search: false,
    favorites: false,
    theme: false,
    rss: false,
    share: false,
    tips: false,
    newsletter: false,
    comments: false,
  },
} as const;

export type Locale = (typeof site.locales)[number];