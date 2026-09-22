/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sweetsteps.online',
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
