const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   transform: {
//     "^.+\\.svg$": "jest-svg-transformer"
//  }
};

module.exports = createJestConfig(customJestConfig);