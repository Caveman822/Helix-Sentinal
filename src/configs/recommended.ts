import prettierDefaults from '../prettier/default';
import noConsoleLog from '../rules/no-console-log';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import type { Linter } from 'eslint';

const helixSentinelPlugin = {
  rules: {
    'no-console-log': noConsoleLog,
  },
};

const recommended: Linter.Config[] = [
  // Plugin registrations
  {
    plugins: {
      'helix-sentinel': helixSentinelPlugin,
      'prettier': prettierPlugin,
    },
  },
  // TypeScript linting rules
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'prettier/prettier': ['error', prettierDefaults],
      'helix-sentinel/no-console-log': 'warn',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'eqeqeq': ['error', 'always'],
      curly: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
];

export default recommended;
