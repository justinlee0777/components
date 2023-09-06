import { defaults } from 'jest-config';

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  rootDir: '../..',
  preset: 'ts-jest',
  testRegex: '.test.ts$',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
};
