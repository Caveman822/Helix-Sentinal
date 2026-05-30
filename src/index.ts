import noConsoleLog from './rules/no-console-log';
import recommended from './configs/recommended';
import strict from './configs/strict';
import prettierDefaults from './prettier/default';

const helixSentinel = {
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