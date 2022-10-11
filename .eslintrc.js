module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['*.js'],
      rules: {
        semi: ['error', 'never'],
      },
    },
  ],
}
