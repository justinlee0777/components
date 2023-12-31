import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

import { inputDir, outputDir } from '../../rollup.config.const.js';
import createExternalField from '../rollup/create-external-field.function.js';
import createInputField from '../rollup/create-input-field.function.js';

const baseDir = 'react';
const componentDirs = ['fieldset', 'radiogroup'];

const reactDir = `${inputDir}/${baseDir}`;

const external = createExternalField(reactDir);

const input = createInputField(baseDir, reactDir, componentDirs);

export default {
  output: {
    dir: `${outputDir}/${baseDir}`,
    format: 'esm',
  },
  input,
  plugins: [
    nodeResolve({
      moduleDirectories: ['node_modules'],
    }),
    commonjs(),
    typescript({
      tsconfig: `${reactDir}/tsconfig.json`,
      exclude: ['**/*.test.ts', '**/*.test.tsx'],
    }),
    postcss({
      modules: {
        generateScopedName: 'justinlee0777-react__[local]',
      },
    }),
  ],
  external,
};
