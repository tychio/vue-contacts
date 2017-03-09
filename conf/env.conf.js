const devConf = require('./env-dev.conf');
const distConf = require('./env-dist.conf');

const dev = process.env.NODE_ENV !== 'production';
module.exports = dev ? devConf : distConf;
