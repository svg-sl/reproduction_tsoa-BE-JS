module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['__tests__'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['clover', 'json', 'lcov', 'text'],
    collectCoverageFrom: ['src/**/*.ts'],
    testMatch: ['<rootDir>/__tests__/**/*.spec.ts'],
    reporters: ['default', 'jest-junit']
};