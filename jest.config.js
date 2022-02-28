/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/index.d',
    '<rootDir>/src/react-app-env.d.ts',
    '<rootDir>/src/reportWebVitals.ts',
    '<rootDir>/src/test.helpers.tsx',
    '<rootDir>/src/accept/',
    '<rootDir>/lib/',
    'dataApiStoreS3.ts'
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  coverageReporters: ['text', 'lcov']
}
