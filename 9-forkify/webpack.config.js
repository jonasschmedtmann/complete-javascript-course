const path = require("path");

module.exports = {
  entry: "./starter/src/js/index.js",
  output: {
    path: path.resolve(__dirname, "starter/dist"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: "./starter/dist"
  }
};
