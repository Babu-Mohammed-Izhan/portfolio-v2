const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'cdn.jsdelivr.net'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
