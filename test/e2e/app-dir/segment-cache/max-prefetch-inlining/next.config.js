/**
 * Setting both thresholds to Infinity inlines all segments into a single
 * response per route, approximating pre-Segment Cache (pre-Next 16)
 * prefetching behavior where all data was bundled into one response. The
 * tradeoff is that per-layout deduplication across routes is lost.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  cacheComponents: true,
  experimental: {
    // TODO(appShells): migrate this test to the two-phase (app shell +
    // per-page data) prefetch behavior, then remove this override. See #94516.
    appShells: false,
    prefetchInlining: {
      maxSize: Infinity,
      maxBundleSize: Infinity,
    },
  },
}

module.exports = nextConfig
