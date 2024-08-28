module.exports = {
  preset: 'react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__utils__/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-navigation-stack|react-redux)/)',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.(png|jpg|jpeg|gif|webp|svg)$': 'jest-transform-stub',
  },
};
