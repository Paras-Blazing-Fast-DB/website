module.exports = {
  title: 'PARAS - blazing fast db',
  description: '',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
  },
  dest: 'public',
  plugins: [
    'social-share',
    {
      'sitemap': {
        hostname: 'https://parasconsulting.com'
      },
    }
  ],
};
