import typescript from '@rollup/plugin-typescript';

import { inputDir, outputDir } from '../../rollup.config.const.js';
import createExternalField from '../rollup/create-external-field.function.js';
import createInputField from '../rollup/create-input-field.function.js';

const baseDir = 'types';
const typeDirs = ['nullary-function'];

const typeDir = `${inputDir}/${baseDir}`;

const external = createExternalField(typeDir);

const input = createInputField(baseDir, typeDir, typeDirs);

export default {
  output: {
    dir: `${outputDir}/${baseDir}`,
    format: 'esm',
  },
  input,
  plugins: [
    typescript({
      tsconfig: `${typeDir}/tsconfig.json`,
      exclude: ['**/*.test.ts'],
    }),
  ],
  external,
};
