const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  target: "node", // ref: https://chatgpt.com/c/0bb5bb00-68a9-4c82-b396-0d1f4224215d

  entry: "./dist/api/main.js",

  output: {
    filename: "bundle.js",
    path: path.resolve("/tmp", "dist"),
  },

  // 需要保留这些，否则依赖库（例如 wechaty-grpc（这个不建议用CopyPlugin，因为还有依赖））里用了这些会使它们在新的输出位置运行
  node: {
    __dirname: true,
    // __filename: true, // 本项目可不需要
    // global: true, // 本项目可不需要
  },

  externals: {
    "playwright-core": "commonjs playwright-core",
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "../../node_modules/playwright-core",
          to: "node_modules/playwright-core",
        },
      ],
    }),
  ],
}
