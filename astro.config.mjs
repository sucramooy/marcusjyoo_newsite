import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const basePath = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://marcusjyoo.com',
  base: basePath,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
  redirects: {
    '/pcbrule': '/projects/pcbrule/',
  },
});
