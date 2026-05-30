import { RuleTester } from 'eslint';
import rule from '../rules/max-file-lines';

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2020 } });

// Helper to generate a code string with a given number of lines
const generateLines = (count) =>
  Array.from({ length: count }, (_, i) => `const var${i} = ${i};`).join('\n');

tester.run('max-file-lines', rule, {
  valid: [
    // Exactly at the default limit (180)
    { code: generateLines(180) },
    // Well under the default limit
    { code: generateLines(10) },
    // Over 180 but custom max is set higher
    { code: generateLines(200), options: [{ max: 200 }] },
  ],
  invalid: [
    {
      // One line over the default limit
      code: generateLines(181),
      errors: [{ messageId: 'maxFileLines' }],
    },
    {
      // Over a custom limit
      code: generateLines(101),
      options: [{ max: 100 }],
      errors: [{ messageId: 'maxFileLines' }],
    },
  ],
});
