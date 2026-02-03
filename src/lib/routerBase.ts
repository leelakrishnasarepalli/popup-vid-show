/**
 * Compute the correct router basename for both:
 * - GitHub Pages project sites (`/<repo>/...`)
 * - Custom domains (`/...`)
 *
 * We derive it from the built JS chunk URL (`import.meta.url`), which is stable even
 * if we later call `history.replaceState` (like the `public/404.html` SPA redirect).
 */
export function getRouterBasename(): string {
  const pathname = new URL(import.meta.url).pathname;
  const assetsIdx = pathname.lastIndexOf("/assets/");
  const base = assetsIdx >= 0 ? pathname.slice(0, assetsIdx) : "";
  return base || "/";
}

