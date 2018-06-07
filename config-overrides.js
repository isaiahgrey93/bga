module.exports = function override(config) {
  config.resolve.modules.push('./src');

  return config;
};
