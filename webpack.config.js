const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/main.tsx",
    output: {
        path: path.resolve(__dirname, "app/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            // loads .js/jsx/json files
            {
                test: /\.tsx?$/,
                include: [path.resolve(__dirname, "src")],
                loader: "babel-loader",
                resolve: {
                    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
                }
            },
            {
                // loads .html files
                test: /\.(html)$/,
                include: [path.resolve(__dirname, "src")],
                use: {
                    loader: "html-loader"
                }
            },
            {
                // loads .css files
                test: /\.css$/,
                include: [path.resolve(__dirname, "src")],
                use: [                    
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "app/src/index.html"),
            filename: "index.html"
        })
    ]
};