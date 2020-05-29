const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const basePath = __dirname;

module.exports = (env, argv) => {
  const isDev = argv.mode !== 'production';
  return {
    context: path.join(basePath, 'src'),
    resolve: {
      extensions: ['.js', '.ts', 'vue'],
      alias: {
        vue: 'vue/dist/vue.runtime.esm.js',
        models: path.resolve(basePath, './src/models'),
        api: path.resolve(basePath, './src/api'),
        plugins: path.resolve(basePath, './src/plugins'),
        pages: path.resolve(basePath, './src/pages'),
      },
    },
    entry: {
      app: './main.ts',
      vendor: ['vue', 'vuetify', 'vue-router'],
      vendorStyles: ['../node_modules/vuetify/dist/vuetify.min.css'],
    },
    output: {
      path: path.join(basePath, 'dist'),
      filename: '[name].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/, // va a pasar por los ficheros que termina en .vue
          exclude: /node_modules/, // no queremos que mire dentro de node_modules
          loader: 'vue-loader', // usaremos el loader que hemos comentado
        },
        {
          test: /\.ts$/,
          use: {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true,
            },
          },
        },
        {
          test: /\.css$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                'vue-style-loader',
                'css-loader',
                {
                  loader: 'css-loader',
                  options: {
                    localsConvention: 'camelCase',
                    modules: {
                      mode: 'local',
                      localIdentName: '[name]__[local]__[hash:base64:5]',
                    },
                  },
                },
              ],
            },
            {
              use: [isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
            },
          ],
        },
        {
          test: /\.s(c|a)ss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              // Requires sass-loader@^7.0.0
              options: {
                implementation: require('sass'),
                fiber: require('fibers'),
                indentedSyntax: true, // optional
              },
              // Requires sass-loader@^8.0.0
              options: {
                implementation: require('sass'),
                sassOptions: {
                  fiber: require('fibers'),
                  indentedSyntax: true, // optional
                },
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            name: 'assets/img/[name].[ext]?[hash]',
            esModule: false,
          },
        },
      ],
    },
    devtool: isDev ? 'inline-source-map' : 'none',
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        hash: true,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new ForkTsCheckerWebpackPlugin({
        tsconfig: path.join(basePath, './tsconfig.json'),
        vue: true,
      }),
      new VueLoaderPlugin(),
      isDev &&
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ].filter(Boolean),
  };
};
