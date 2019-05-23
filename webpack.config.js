const path = require('path'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 

const conf = { 
    entry: './public/src/index.js', 
output: { 
path: path.resolve(__dirname, './public/dist'), 
filename: 'app.js', 
publicPath: 'dist/', 
}, 
devServer: { 
    contentBase: path.join(__dirname, "./public"),
    compress: true,
    port: 9001,
    watchContentBase: true,
    progress: true
}, 
module: { 
rules: [ 
{ 
test: /\.js$/, 
exclude: '/node_modules', 
loader: 'babel-loader', 
}, 
{ 
test: /\.css$/, 
use: ExtractTextPlugin.extract({ 
fallback: 'style-loader', 
use: 'css-loader', 
}), 
}, 
{ 
test: /\.(png|jpg)$/, 
loader: 'url-loader', 
}, 
], 
}, 
plugins: [ 
    new ExtractTextPlugin('./public/styles.css'), 
], 
devtool: 'eval-sourcemap', 
}; 

module.exports = (env, options) => { 
const production = options.mode === 'production'; 

conf.devtool = production 
? 'source-map' 
: 'eval-sourcemap'; 
return conf; 
};