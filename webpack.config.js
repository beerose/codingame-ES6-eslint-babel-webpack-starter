const { resolve } = require('path');
const restSpread = require('babel-plugin-transform-object-rest-spread');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = {
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [restSpread, { useBuiltIns: true }],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    // new ClosureCompilerPlugin({
    //   jsCompiler: true,
    //   compiler: {
    //     language_in: 'ECMASCRIPT6_STRICT',
    //     language_out: 'ECMASCRIPT5',
    //     compilation_level: 'ADVANCED',
    //   },
    // }),
  ],
};

