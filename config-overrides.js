module.exports = function override(config) {
  config.resolve.modules.push('./src');
  config.resolve.modules.push('./.storybook');

  return config;
};
