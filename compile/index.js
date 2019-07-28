const tsconfig = require('../tsconfig.json');
const { relative } = require('path');

global.React = require('react');

require('ts-node').register({
  compilerOptions: {
    ...tsconfig.compilerOptions,
    module: 'commonjs',
    jsx: 'react',
  }
});
require('./compile');