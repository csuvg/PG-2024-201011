module.exports = {
    preset: 'react-native',
    setupFiles: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '^expo-font$': '<rootDir>/__mocks__/expo-font.js',
      '^@expo/vector-icons$': '<rootDir>/__mocks__/@expo/vector-icons.js',
      '\\.ttf$': 'react-native-mock-fonts', // Mock para fuentes .ttf

    },
  };
  