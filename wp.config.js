const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",

  module: {
    rules:[
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use:["babel-loader"],
      }
    ],

    test: /\.scss$/,
    use: [
        "style-loader", 
        "css-loader", 
        "sass-loader" 
    ]
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};