import rootConfig from '../jest.config';

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  ...rootConfig,
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: './src/types/tsconfig.json',
      },
    ],
  },
};
