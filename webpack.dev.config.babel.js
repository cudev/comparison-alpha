import path from 'path';
import webpack from 'webpack';

export default {
  context: path.join(__dirname, 'src/client'),

  entry: {
    scripts: `${__dirname}/src/client/index.jsx`,
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'babel-polyfill',
      'react-apollo',
      'apollo-client',
    ],
  },

  output: {
    path: '/',
    publicPath: 'http://localhost:3001/',
    filename: '[name]/bundle.js',
    chunkFilename: '[name]/[id].chunk.js',
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
    }),
    new webpack.PrefetchPlugin(`${__dirname}/node_modules`, 'core-js/shim.js'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'scripts/vendor.js',
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: [
            ['es2015', { loose: true, modules: false }],
            'react',
            'stage-3',
          ],
          plugins: [
            'transform-runtime',
            'transform-es2015-destructuring',
            'transform-object-rest-spread',
            'transform-flow-strip-types',
          ],
        },
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file',
        query: { name: '[path][name].[ext]' },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: '#source-map',
  devServer: {
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: false,
      warnings: true,
      publicPath: false,
    },
  },
  node: {
    fs: 'empty',
  },
};
