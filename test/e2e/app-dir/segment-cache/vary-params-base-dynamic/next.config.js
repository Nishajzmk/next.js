/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  cacheComponents: true,
  cacheLife: {
    expireNow: {
      stale: 0,
      revalidate: 0,
      expire: 0,
    },
  },
  experimental: {
    // TODO(appShells): migrate this test to the two-phase (app shell +
    // per-page data) prefetch behavior, then remove this override. See #94516.
    appShells: false,
    optimisticRouting: true,
    prefetchInlining: false,
    varyParams: true,
  },
}

module.exports = nextConfig
