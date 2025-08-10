// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://mihirdesai.net',
  integrations: [sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});