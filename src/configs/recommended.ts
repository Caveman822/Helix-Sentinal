import type { Linter } from 'eslint';
import prettierDefaults from '../prettier/default';
import noConsoleLog from '../rules/no-console-log';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

const helixSentinelPlugin = {
  rules: {
    'no-console-log': noConsoleLog,
  },
};

const recommended: Linter.Config[] = [
  // Disables ESLint formatting rules that conflict with Prettier
  eslintConfigPrettier as Linter.Config,
  {
    plugins: {
      'helix-sentinel': helixSentinelPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['warn', prettierDefaults],
      'helix-sentinel/no-console-log': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'eqeqeq': ['error', 'always'],
      curly: 'error',
    },
  },
];

export default recommended;