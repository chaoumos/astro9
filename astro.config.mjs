import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // Placeholder, will be updated by deployment process or user
  base: '/', 
  integrations: [
    tailwind()
  ],
  // Output can be 'server' for SSR or 'static' (default)
  // output: 'server', 
  // adapter: node({ mode: 'standalone' }), // Example for SSR with Node
});