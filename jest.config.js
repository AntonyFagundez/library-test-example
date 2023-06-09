/**
 * @type {import("jest").Config}
 */
const config = {
  moduleNameMapper: {
    // "^.\\.(css|scss)$": "identity-obj-proxy",

    "\\.(css|scss)$": "identity-obj-proxy",
  },
  verbose: true,
  transformIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: [
    "src/**/*.tsx",
    "src/**/*.ts",
    "!node_modules/**",
    "!**/*.stories.tsx",
    "!src/index.ts",
    "!src/types/**",
    "!*.config.js/",
    "!*.config.mjs/",
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  coverageReporters: ["json-summary", "text", "lcov", "json", "json-summary"],
  modulePathIgnorePatterns: ["<rootDir>/dist"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  testEnvironment: "jsdom",
};

module.exports = config;
