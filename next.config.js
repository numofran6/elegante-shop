/** @type {import('next').NextConfig} */
const path = require('path')
 
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}