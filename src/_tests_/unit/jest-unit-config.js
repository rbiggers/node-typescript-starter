module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  rootDir: '.',
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  testRegex: '.unit.test.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
