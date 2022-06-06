const path = require("path");

module.exports = {
  entry: "./index.js",
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: "./dist",
    port: 9000
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
