export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};