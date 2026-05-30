import type { Linter } from 'eslint';
import prettierDefaults from '../prettier/default';
import noConsoleLog from '../rules/no-console-log';
import maxFileLines from '../rules/max-file-lines';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

const helixSentinelPlugin = {
  rules: {
    'no-console-log': noConsoleLog,
    'max-file-lines': maxFileLines,
  },
};

const strict: Linter.Config[] = [
  // Disables ESLint formatting rules that conflict with Prettier
  eslintConfigPrettier as Linter.Config,
  {
    plugins: {
      'helix-sentinel': helixSentinelPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', prettierDefaults],
      'helix-sentinel/no-console-log': 'error',
      'helix-sentinel/max-file-lines': ['error', { max: 180 }],
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'eqeqeq': ['error', 'always'],
      curly: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
];

export default strict;
