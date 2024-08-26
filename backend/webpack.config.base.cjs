const path = require("path")

module.exports = {
  target: "node", // ref: https://chatgpt.com/c/0bb5bb00-68a9-4c82-b396-0d1f4224215d

  entry: "./dist/api/main.js",

  output: {
    filename: "bundle.js",
    path: path.resolve("/tmp", "dist"),
  },

  externals: {
    "playwright-core": "commonjs playwright-core",
    // "wechaty-grpc": "commonjs wechaty-grpc", // dynamic import error: ../../out
    // "wechaty-puppet-service": "commonjs wechaty-puppet-service", // native module error: level
    // "wechaty-puppet-wechat4u": "commonjs wechaty-puppet-wechat4u", // o.w. Failed to import Wechaty Puppet Provider (WPP) NPM module: "wechaty-puppet-wechat4u"
  },

  resolve: {
    alias: {
      '../../out': path.resolve(__dirname, '../../node_modules/wechaty-grpc/out')
    },
  },

}
