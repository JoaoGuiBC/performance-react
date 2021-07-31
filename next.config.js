const withBuildAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = {
  reactStrictMode: true,
}

module.exports = withBuildAnalyzer({});
