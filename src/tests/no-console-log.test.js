import { RuleTester } from 'eslint';
import rule from '../rules/no-console-log';

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2020 } });

tester.run('no-console-log', rule, {
  valid: [
    { code: 'console.error("error")' },
    { code: 'console.warn("warn")' },
  ],
  invalid: [
    {
      code: 'console.log("debug")',
      errors: [{ messageId: 'noConsoleLog' }],
      output: '',
    },
  ],
});