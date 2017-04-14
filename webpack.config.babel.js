import path from 'path';
import webpack from 'webpack';

export default {
  context: path.join(__dirname, 'src/client'),

  entry: {
    scripts: [
      './index',
      '../common/routes',
    ],
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
    path: path.join(__dirname, 'dist/client'),
    filename: '/[name]/bundle.js',
    chunkFilename: '/[name]/[id].chunk.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
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
  node: {
    fs: 'empty',
  },
};
