module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: 'API_KEY',
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
