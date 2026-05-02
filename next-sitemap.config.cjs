/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sweetsteps.vercel.app',
  generateIndexSitemap: false, // Output a single sitemap.xml, not a sitemap index
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
