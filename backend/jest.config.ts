import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
    transform: { "^.+\\.ts?$": "ts-jest" },
    roots: ['<rootDir>/tests/'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    testRegex: '(/_tests_/.*|(\\.|/)(test|spec))\\.(ts?|js?)$',
    modulePathIgnorePatterns: ['<rootDir>/node_modules'],
    collectCoverage: true,
    collectCoverageFrom: ['src/*/.{js,jsx,ts,tsx}', '!src/index.js'],
    coverageDirectory: 'coverage-jest',
    coverageReporters: ['text', 'html'],
    watchPathIgnorePatterns: ['node_modules',],
    preset: 'ts-jest',
}