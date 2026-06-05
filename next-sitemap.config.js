/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.berichhotel.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
