const path = require('path');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
    pixi = path.join(phaserModule, 'build/custom/pixi.js'),
    p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
    {
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "sass-loader" // compiles Sass to CSS
      }]
    },
    { test: /pixi.js/, 
        use: [{
            loader: "script-loader"}]
    },
    { test: /p2.js/, 
        use: [{
            loader: "script-loader"}]
    },
    { test: /phaser-split.js/, 
        use: [{
            loader: "script-loader"}]
    },
    {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }]
},
resolve: {
    alias: {
        'phaser': phaser,
        'pixi.js': pixi,
        'p2': p2
    }
}
};