export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8081,
  BASE_URL: process.env.BASE_URL || '',
  DEFAULT_AXIOS_CLIENT_TIMEOUT: 120 * 1000, // 2 minutes (Node.js http default)
};
