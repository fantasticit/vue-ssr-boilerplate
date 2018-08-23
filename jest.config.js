module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.*\\.vue$': '<rootDir>/node_modules/jest-vue'
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['<rootDir>/test/**/?(*.)(spec|test).js']
}
