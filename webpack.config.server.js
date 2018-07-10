var fs = require('fs');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: './server/server.ts',
  output: {
    path: __dirname + '/dist/wpserver',
    filename: 'server.js',
  },
  resolve: {
    // plugins: [new TsconfigPathsPlugin({ configFile: "./server/tsconfig.json" })],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.server.json" })],
    // Add '.ts' and '.tsx' as a resolvable extension.
    // extensions: ['.ts', '.tsx', '.js'],
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx'
      // extension will be handled by 'ts-loader'
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  target: 'node',
  externals: nodeModules,
};