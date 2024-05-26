const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "process": require.resolve("process/browser"),
    "buffer": require.resolve("buffer/"),
    "vm": require.resolve("vm-browserify")
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]);

  return config;
};
