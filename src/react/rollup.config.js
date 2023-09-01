import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { readFileSync } from 'fs';

import { inputDir, outputDir } from '../../rollup.config.const.js';

const baseDir = 'react';
const componentDirs = ['fieldset', 'radiogroup'];

const reactDir = `${inputDir}/${baseDir}`;

const pkg = JSON.parse(
  readFileSync(`${reactDir}/package.json`, { encoding: 'utf-8' }),
);

const externalPackages = [...Object.keys(pkg.peerDependencies || {})];

// Creating regexes of the packages to make sure subpaths of the
// packages are also treated as external
const external = externalPackages.map(
  (packageName) => new RegExp(`^${packageName}(\/.*)?`),
);

const input = componentDirs.reduce((inputObject, componentDir) => {
  return {
    ...inputObject,
    [`${baseDir}/${componentDir}`]: `${reactDir}/${componentDir}/index.ts`,
  };
}, {});

export default {
  input,
  output: {
    dir: outputDir,
    format: 'esm',
  },
  plugins: [
    nodeResolve({
      moduleDirectories: ['node_modules'],
    }),
    commonjs(),
    typescript({
      tsconfig: `${reactDir}/tsconfig.json`,
    }),
    postcss({
      modules: {
        generateScopedName: 'react__[local]',
      },
    }),
  ],
  external,
};
