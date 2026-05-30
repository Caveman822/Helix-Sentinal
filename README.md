# helix-sentinel

Shared ESLint config, custom rules, and Prettier defaults for projects.

## Installation

```bash
bun add -d helix-sentinel
# or
npm install --save-dev helix-sentinel
```

## Usage

### ESLint

Import one of the two provided configs in your `eslint.config.ts`:

**Recommended** — rules are set to `warn`:

```ts
import helixSentinel from 'helix-sentinel';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...(helixSentinel.configs.recommended as any[]),
  // ...your other config blocks
]);
```

**Strict** — rules are set to `error` and enforces additional constraints (`no-var`, `prefer-const`):

```ts
import helixSentinel from 'helix-sentinel';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...(helixSentinel.configs.strict as any[]),
  // ...your other config blocks
]);
```

Both configs automatically include Prettier formatting rules and the custom `helix-sentinel/no-console-log` rule.

### Prettier

Spread the shared Prettier defaults into your `prettier.config.ts`:

```ts
import helixSentinel from 'helix-sentinel';
import type { Config } from 'prettier';

const config: Config = {
  ...helixSentinel.prettier,
};

export default config;
```

**Default Prettier values:**

| Option          | Value     |
| --------------- | --------- |
| `semi`          | `true`    |
| `singleQuote`   | `true`    |
| `trailingComma` | `'all'`   |
| `printWidth`    | `100`     |
| `tabWidth`      | `2`       |
| `useTabs`       | `false`   |
| `bracketSpacing`| `true`    |
| `arrowParens`   | `'always'`|

You can override any value by adding it after the spread.

## Custom Rules

| Rule                          | Description                                        |
| ----------------------------- | -------------------------------------------------- |
| `helix-sentinel/no-console-log` | Disallows `console.log` statements. Auto-fixable. |

## Development

```bash
bun install
bun run build
bun run test
```
