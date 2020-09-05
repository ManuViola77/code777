module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          helpers: './src/helpers',
          hooks: './src/hooks',
          locale: './src/locale',
          navigators: './src/navigators',
          screens: './src/screens',
        },
      },
    ],
  ],
};
