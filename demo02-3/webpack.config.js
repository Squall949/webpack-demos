module.exports = {
  entry: {
    bundle1: './main1.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [ { test: /\.css$/, loader: "style!css?minimize!autoprefixer" },
      { test: /\.(png|jpg)$/, loader: "url?limit=8000" }
       ]
  }
};
