module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /.spec.(js|jsx)$/,
      })
    );
    return config;
  },

  future: {
    webpack5: true,
  },
};
