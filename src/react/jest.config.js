import { defaults } from 'jest-config';

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  rootDir: '../..',
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './src/react/tsconfig.json',
      },
    ],
  },
  testRegex: '.test.(ts|tsx?)$',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
