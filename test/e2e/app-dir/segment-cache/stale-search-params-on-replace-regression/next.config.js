/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // TODO(appShells): migrate this test to the two-phase (app shell +
    // per-page data) prefetch behavior, then remove this override. See #94516.
    appShells: false,
    // Disabling prefetch inlining avoids the `InliningHintsStale` marker
    // that would otherwise immediately expire the initial-state route
    // cache entry. The bug under test depends on that entry sticking
    // around long enough to be read by `router.replace('/')`.
    prefetchInlining: false,
  },
}

module.exports = nextConfig
