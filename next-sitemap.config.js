/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://trimsy.ca',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
