const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/w',
    createProxyMiddleware({
      target: 'https://en.wikipedia.org',
      changeOrigin: true,
    })
  );
};