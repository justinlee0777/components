import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import html from '@rollup/plugin-html';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';

const baseDir = 'e2e-tests';

function baseEntry(input, output) {
  return {
    input,
    output: {
      file: output,
    },
    plugins: [
      alias({
        entries: {
          components: 'dist',
        },
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true,
      }),
      nodeResolve({
        modulePaths: ['node_modules', `${baseDir}/node_modules`],
      }),
      commonjs(),
      typescript({
        tsconfig: `${baseDir}/tsconfig.json`,
      }),
      postcss(),
      html(),
    ],
  };
}

const distDirectory = 'development';

const reactTestFiles = ['radiogroup'];

const reactEntries = reactTestFiles.map((testFile) => {
  const input = `${baseDir}/react/${testFile}/index.tsx`;
  const output = `${distDirectory}/react/${testFile}/index.js`;

  return baseEntry(input, output);
});

export default [...reactEntries];
