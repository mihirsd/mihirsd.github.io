// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  site: 'https://mihirdesai.net',
  integrations: [sitemap(), react()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            three: ['three'],
            r3fiber: ['@react-three/fiber'],
            r3post: ['@react-three/postprocessing', 'postprocessing'],
          },
        },
      },
      chunkSizeWarningLimit: 500,
    },
    plugins: [
      // @ts-expect-error
      tailwindcss(),
      ...(process.env.VISUALIZE === 'true' ? [visualizer({ open: true })] : []),
    ],
  },
});
