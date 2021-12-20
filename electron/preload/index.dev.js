const { join } = require('path');
const babel = require('@babel/register');
const { babelConfig } = require('@modern-js/electron-tools');

babel(
  Object.assign(babelConfig, {
    extensions: ['.ts', '.js'],
  }),
);
require(join(__dirname, 'index.ts'));
