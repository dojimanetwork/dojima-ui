import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
// @ts-ignore
import currentPackagePath from "./package.json"

export default {
  input: "./lib/index.tsx",
  output: [
    {
      file: currentPackagePath.main,
      format: "cjs",
      sourcemap: true,
      exports: 'named',
      // dir: "./build.cjs"
    },
    {
      file: currentPackagePath.module,  
      format: "esm",
      sourcemap: true,
      exports: 'named',
      // dir: "./build.esm"
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