import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import license from 'rollup-plugin-license'

export default [
  // browser-friendly UMD build
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: './src/index.js',
    output: [
      { name: 'dqp', file: './dist/daq-proc.umd.js', format: 'umd', exports: 'auto' },
      { file: './dist/daq-proc.cjs.js', format: 'cjs', exports: 'auto' },
      { file: './dist/daq-proc.esm.mjs', format: 'es' }
    ],
    plugins: [
      nodeResolve({
        browser: true
      }), // so Rollup can find `ms`
      commonjs() // so Rollup can convert `ms` to an ES module
    ]
  },
  // Minified versions
  {
    input: './src/index.js',
    output: [
      { name: 'dqp', file: './dist/daq-proc.umd.min.js', format: 'umd', exports: 'auto' },
      { file: './dist/daq-proc.cjs.min.js', format: 'cjs', exports: 'auto' },
      { file: './dist/daq-proc.esm.min.mjs', format: 'es' }
    ],
    plugins: [
      nodeResolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      terser(), // Minify
      license({ // Add reference to license file for minified scripts
        banner: {
          commentStyle: 'regular', // The default
          content: {
            file: path.join(__dirname, 'src', 'license-references.txt')
          }
        }
      })
    ]
  }
]
