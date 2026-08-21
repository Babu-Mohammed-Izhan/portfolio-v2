const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'cdn.jsdelivr.net', 'is1-ssl.mzstatic.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
