const path = require("path");

module.exports = {
  entry: "./starter/src/js/index.js",
  output: {
    path: path.resolve(__dirname, "starter/dist/js"),
    filename: "bundle.js"
  }
};
