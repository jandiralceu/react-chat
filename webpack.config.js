const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  target: isDevelopment ? 'web' : 'browserslist',
  entry: './src/main/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.[contenthash:8].js',
    assetModuleFilename: 'media/[contenthash:8][ext][query]',
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '/' }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        type: 'asset'
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    hot: true,
    historyApiFallback: true,
    compress: true
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: isDevelopment
        ? './config/templates/index.dev.html'
        : './config/templates/index.prod.html'
    }),
    new MiniCssExtractPlugin()
  ]
}
