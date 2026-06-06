/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  cacheComponents: true,
  experimental: {
    // TODO: Migrate this test to the two-phase (app shell + data) prefetch
    // behavior, then remove this override. See PR #94516.
    appShells: false,
  },
}

module.exports = nextConfig
