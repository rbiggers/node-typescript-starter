module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  rootDir: '.',
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  testRegex: '.int.test.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
