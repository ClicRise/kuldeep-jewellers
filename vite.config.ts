// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // GitHub Pages serves this project from /kuldeep-jewellers/ unless a custom
  // domain is configured. Keep local builds rooted at / for Hostinger preview.
  vite: {
    base: process.env.GITHUB_ACTIONS ? "/kuldeep-jewellers/" : "/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Generate static HTML for the single index route so it can be served
    // from Hostinger shared hosting without a Node.js runtime.
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
});
