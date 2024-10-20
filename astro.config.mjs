import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  publicDir: "public", // Эта папка обычно содержит статические файлы, такие как изображения
  site: "https://Pashatishinin.github.io",
  base: "/portfolio",
});