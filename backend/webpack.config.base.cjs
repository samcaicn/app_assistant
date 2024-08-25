const path = require("path")

module.exports = {
  target: "node", // ref: https://chatgpt.com/c/0bb5bb00-68a9-4c82-b396-0d1f4224215d
  entry: "./dist/api/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  externals: {
    // playwright: "commonjs playwright",
    "playwright-core": "commonjs playwright-core",
  },
}
