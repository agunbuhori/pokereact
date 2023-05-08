
module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',

  },
  moduleNameMapper: {
    '\\.png$': '<rootDir>/__mocks__/imageMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['./__mocks__/mockReactNativeGestureHandler.ts'],
};
