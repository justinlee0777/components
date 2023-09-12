import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import { inputDir, outputDir } from '../../rollup.config.const.js';
import createExternalField from '../rollup/create-external-field.function.js';
import createInputField from '../rollup/create-input-field.function.js';

const baseDir = 'utils';
const utilDirs = ['animate', 'create-key-listener', 'debounce', 'lock'];

const utilDir = `${inputDir}/${baseDir}`;

const external = createExternalField(utilDir);

const input = createInputField(baseDir, utilDir, utilDirs);

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
      tsconfig: `${utilDir}/tsconfig.json`,
      exclude: ['**/*.test.ts'],
    }),
  ],
  external,
};
