/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  cacheComponents: true,
  experimental: {
    // TODO(appShells): migrate this test to the two-phase (app shell +
    // per-page data) prefetch behavior, then remove this override. See #94516.
    appShells: false,
    optimisticRouting: true,
    varyParams: true,
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
