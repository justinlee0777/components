import rootConfig from '../jest.config.js';

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  ...rootConfig,
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: './src/utils/tsconfig.json',
      },
    ],
  },
};
