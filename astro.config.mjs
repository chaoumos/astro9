import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro9.example.com', // Replace with your actual site URL
  base: '/', //  Replace with '/your-blog-subdirectory/' if deploying to a subdirectory
  integrations: [
    tailwind(),
    react()
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: false
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  }
});