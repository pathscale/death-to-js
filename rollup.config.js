import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import json from "@rollup/plugin-json";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";

import pkg from "./package.json";
const extensions = [".ts", ".mjs", ".js", ".json"];
const prod = process.env.NODE_ENV === "production";
const watch = Boolean(process.env.ROLLUP_WATCH) || Boolean(process.env.LIVERELOAD);

export default {
  input: "src/index.js",
  output: { format: "iife", file: pkg.main, name: "app" },
  plugins: [
    replace({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) }),
    json(),
    resolve({ preferBuiltins: true, extensions }),
    commonjs(),
    prod && babel({ babelHelpers: "bundled" }),
    prod && terser({ output: { comments: false } }),
    html(),
    watch && serve({ contentBase: "dist", historyApiFallback: true, port: 5000 }),
    watch && livereload({ watch: "dist" }),
  ],
};
