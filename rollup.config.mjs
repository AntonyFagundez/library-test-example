import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import styles from "rollup-plugin-styles";
import renameNodeModules from "rollup-plugin-rename-node-modules";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json" assert { type: "json" };

const devMode = process.env.NODE_ENV === "development";

const EXTENSIONS = [".ts", ".tsx", ".mjs", ".js", ".cjs", ".mts", ".cts"];

const EXTERNALS = Object.keys(pkg.peerDependencies);

const PACKAGE_NAME = pkg.name;

/**
 * @type {import("rollup").RollupOptions}
 */
const rollupConfig = {
  input: ["src/index.ts"],
  output: [
    {
      dir: "dist",
      format: "module",
      sourcemap: devMode ? "inline" : false,
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].js",
      exports: "named",
      minifyInternalExports: true,
      compact: true,
    },
    {
      dir: "dist/node",
      format: "cjs",
      sourcemap: devMode ? "inline" : false,
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].js",
      exports: "named",
      minifyInternalExports: true,
      compact: true,
      esModule: true,
      freeze: false,
      interop: "auto",
    },
  ],
  plugins: [
    nodeResolve({
      extensions: EXTENSIONS,
    }),
    babel({
      extensions: EXTENSIONS,
      babelHelpers: "inline",
      exclude: "node_modules/**",
    }),
    commonjs(),
    styles({
      modules: {
        generateScopedName: `${PACKAGE_NAME}__[dir]_[local]`,
      },
      sourceMap: devMode ? "inline" : false,
      mode: [
        "inject",
        {
          attributes: {
            "data-ui-library": PACKAGE_NAME,
          },
        },
      ],
      minimize: !devMode,
    }),
    renameNodeModules("_ext"),
  ],
  external: EXTERNALS,
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false,
  },
};

export default rollupConfig;
