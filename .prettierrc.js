'use strict';

// module.exports = require("@mjolnir/prettier-config");

module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: ['.*rc', '*.json'],
      options: {
        parser: 'json-stringify',
      },
    },
  ],
};
