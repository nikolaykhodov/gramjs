const path = require("path");

module.exports = {
  target: ["node"],
  entry: path.resolve(__dirname, "./index.ts"),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, './tsconfig-for-node.json')
          }
        }],
        exclude: /node_modules/,
      },

      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "production",
  output: {
    library: "telegram",
    libraryTarget: "commonjs",
    filename: "index.js",
    path: path.resolve(__dirname, "../dist/node/gramjs"),
  },
};
