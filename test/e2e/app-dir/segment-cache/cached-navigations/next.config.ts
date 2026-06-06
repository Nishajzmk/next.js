import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  productionBrowserSourceMaps: true,
  experimental: {
    // TODO(appShells): migrate this test to the two-phase (app shell +
    // per-page data) prefetch behavior, then remove this override. See #94516.
    appShells: false,
    cachedNavigations: true,
    prefetchInlining: false,
    exposeTestingApiInProductionBuild: true,
    optimisticRouting: true,
    useOffline: true,
    varyParams: true,
  },
}

export default nextConfig
