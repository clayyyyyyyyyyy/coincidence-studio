// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Cloudflare Pages serves static files from the build output directly.
// No adapter needed for fully static sites.
export default defineConfig({
  site: 'https://claydevlin.com',
  output: 'static',
});
