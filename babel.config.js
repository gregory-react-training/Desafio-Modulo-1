module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module:babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],

  env: {
    production: {
      plugins: [
        [
          'module:babel-plugin-root-import',
          {
            rootPathSuffix: 'src',
          },
        ],
      ],
    },
  },
};
