const { recommended } = require('@mjolnir/eslint-config/overrides');

module.exports = {
  extends: ['@mjolnir'],
  overrides: recommended,
  rules: {
    'node/no-unpublished-import': 'off',
  },
};
