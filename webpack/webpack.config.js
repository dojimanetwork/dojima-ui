const path = require('path')
const 
    { BundleAnalyzerPlugin } 
 = require('webpack-bundle-analyzer')

// env mode for build
const mode = process.env.NODE_ENV ? 'production' : 'development'
const entry = './lib/index.tsx';
const target = 'node'
const devtool = mode ? 'source-map' : 'eval'
let cwd = process.cwd()
const currentPackagePath = path.join(cwd, 'package.json')

const plugins = []

if (mode && process.env.BUILD_PKG_STATS === 'true') {
    const base = path.join(__dirname, '..', 'doc', 'pkg-stats', path.basename(cwd))

    plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: path.join(base, 'index.html'),
            openAnalyzer: false,
            generateStatsFile: true,
            statsFilename: path.join(base, 'stats.json')
        })
    )
}


const output = {
    path: path.resolve(cwd, 'dist'),
    filename:  path.basename(currentPackagePath),
    libraryTarget: 'commonjs2',
};

const _module = {
    rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            use: 'babel-loader',
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
    ],
};

const resolve = {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
        'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        "react/jsx-dev-runtime":  path.resolve(__dirname, "./node_modules/react/jsx-dev-runtime.js"),
        "react/jsx-runtime": path.resolve(__dirname, "./node_modules/react/jsx-runtime.js")
    }
};

const externals = {
    // Don't bundle react or react-dom      
    react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React"
    },
    "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM"
    }
   
};

module.exports = {
    mode,
    target,
    devtool,
    entry,
    output,
    plugins,
    module: _module,
    resolve,
    externals
}
