const { ContextReplacementPlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const JS_TEST = /^(?!.*(test)).*\.m?jsx?$/;

const env = process.env.NODE_ENV || 'development';

const resolve = {
  extensions: ['.mjs', '.js', '.jsx', '.gql', '.graphql'],
  symlinks: false,
};

const config = {
  target: 'web',
  mode: env === 'production' ? 'production' : 'development',
  stats: 'minimal',
  entry: {
    bundle: [path.resolve(__dirname, 'src', 'index.jsx')],
  },
  performance: {
    hints: false,
  },
  node: {
    __dirname: 'mock',
  },
  output: {
    chunkFilename: '[name].bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'client.html',
    }),
  ],
  module: {
    rules: [
      {
        test: JS_TEST,
        loader: 'babel-loader?cacheDirectory',
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(graphql|gql)$/,
        use: [{ loader: 'graphql-tag/loader' }],
      },
    ],
  },
  resolve,
};
module.exports = config;


