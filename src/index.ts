import noConsoleLog from './rules/no-console-log';
import recommended from './configs/recommended';
import strict from './configs/strict';
import prettierDefaults from './prettier/default';
import type { Rule, Linter } from 'eslint';

interface HelixSentinel {
  rules: Record<string, Rule.RuleModule>;
  configs: {
    recommended: Linter.Config[];
    strict: Linter.Config[];
  };
  prettier: typeof prettierDefaults;
}

const helixSentinel: HelixSentinel = {
  rules: {
    'no-console-log': noConsoleLog,
  },
  configs: {
    recommended,
    strict,
  },
  // Apps can also pull your Prettier config directly
  prettier: prettierDefaults,
};

export default helixSentinel;
