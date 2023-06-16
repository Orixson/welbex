module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          global: './src/global',
          models: './src/models',
          navigation: './src/navigation',
          screens: './src/screens',
          styles: './src/styles',
          types: './src/navigation/types',
          utils: './src/utils',
        },
      },
    ],
  ],
};
