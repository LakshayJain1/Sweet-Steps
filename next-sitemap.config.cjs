/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sweetsteps.vercel.app', // Using the specified Vercel deployment URL
  generateRobotsTxt: true, // Auto-generate robots.txt along with sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
