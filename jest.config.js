module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/config/**/*',
    '!<rootDir>/src/index.tsx'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist',
    '<rootDir>/config'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.(s[ac]|c)ss$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/__mocks__/fileMock.js'
  },
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/jestSetup.ts'],
  modulePathIgnorePatterns: ['<rootDir>/src/.*/__mocks__']
}
