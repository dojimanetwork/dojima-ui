import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import process from 'process'
import path from 'path'
import babel from '@rollup/plugin-babel'
import filesize from 'rollup-plugin-filesize'
import analyze from 'rollup-plugin-analyzer'

const cwdPackagePath = require(path.join(process.cwd(), 'package.json'))
const packageJson = cwdPackagePath

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  '@babel/runtime/regenerator': 'regeneratorRuntime',
  '@mui/material': 'material',
  '@emotion/styled': 'emStyled',
  '@emotion/react': 'react'
}

const external = [
  'react',
  'react-dom',
  '@mui/material',
  '@mui/lab',
  '@mui/styles',
  'lodash',
  '@emotion/react',
  'formik',
  'nanoid',
  '@emotion/styled',
  '@storybook/react'
]

const watch = {
  chokidar: {
    usePolling: true,
    path: 'lib/**'
  }
}

// https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
const CJS_AND_ES_EXTERNALS = external.concat(/@babel\/runtime/)

export default {
  input: './lib/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: true,
      exports: 'named'
    },
    // {
    //   file: packageJson.browser,
    //   format: 'umd',
    //   globals,
    //   exports: 'named',
    //   name: 'index'
    // }
  ],
  plugins: [
    peerDepsExternal(),
    postcss(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true, clean: true }),
    commonjs(),
    // babel({
    //   // runtimeHelpers: true,
    //   // babelHelpers: 'runtime',
    //   exclude: '**/node_modules/**',
    //   // presets: ['@babel/preset-env'],
    //   // plugins: ['@babel/transform-runtime']
    // }),
    // filesize(),
    // analyze()
  ],
  // watch,
  // external: ['cjs', 'es'].includes(['cjs', 'es'])
  //   ? CJS_AND_ES_EXTERNALS
  //   : external
}
