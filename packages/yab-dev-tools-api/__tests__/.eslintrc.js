module.exports = {
  extends: [
    '@mjolnir/eslint-config/typescript',
    '@mjolnir/eslint-config/jest',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
};
