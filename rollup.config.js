import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import process from 'process'
import path from 'path'

const cwdPackagePath =  require(path.join(process.cwd(), 'package.json'))
const packageJson = cwdPackagePath

export default {
  input: "./lib/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      exports: 'named'
    },
    {
      file: packageJson.module,  
      format: "esm",
      sourcemap: true,
      exports: 'named'
    },
    
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss()
  ]
};