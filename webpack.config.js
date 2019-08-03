const path = require('path')
const package = require('./package.json')
const glob = require('glob')

module.exports =  [
  // Generating browser version of document and query processor
  {
    mode: 'production',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'daq-proc.' + package.version+ '.js',
      library: 'dqp'
    },
    devtool: "none", // prevent webpack from using eval() on my module
  },

  // Generating a latest browser version of document and query processor (same as latest version number)
  {
    mode: 'development',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'daq-proc.latest.js',
      library: 'dqp'
    },
    devtool: "none", // prevent webpack from using eval() on my module
  },

  // Generating test script for the browser
  {
    mode: 'production',
    entry: glob.sync('./test/test.js'),
    output: {
      path: path.resolve(__dirname, './test/sandbox'),
      filename: 'bundle.js'
    },
    node: {
      fs: 'empty'
    }
  }
]