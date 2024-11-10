// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // Switch to 'production' for optimized builds
  entry: {
    background: './src/background/background.js',
    popup: './src/popup/popup.js',
    user_dashboard: './src/user_dashboard/script.js',
    // Add more entry points if needed
  },
  output: {
    filename: '[name].bundle.js', // Output filenames based on entry point names
    path: path.resolve(__dirname, 'dist'),
    publicPath: '', // Adjust if assets are hosted elsewhere
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Apply this rule to .css files
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          'css-loader',                // Resolves CSS imports
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i, // Handle image files
        type: 'asset/resource',
      },
      {
        test: /\.html$/, // Handle HTML files
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans 'dist' folder before each build
    new HtmlWebpackPlugin({
      template: './src/popup/popup.html', // Template for popup
      filename: 'popup.html',
      chunks: ['popup'], // Include only the 'popup' bundle
    }),
    new HtmlWebpackPlugin({
      template: './src/user_dashboard/index.html', // Template for user dashboard
      filename: 'user_dashboard.html',
      chunks: ['user_dashboard'], // Include only the 'user_dashboard' bundle
    }),
    new CopyWebpackPlugin({
        patterns: [
          { from: 'manifest.json', to: 'manifest.json' }, // Copies manifest.json to 'dist'
          // Add other static assets if needed
        ],
      }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
  devtool: 'inline-source-map', // Useful for debugging; remove or change in production
};