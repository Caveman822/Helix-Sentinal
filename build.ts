import { build } from "bun";

const result = await build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  target: "node",
  format: "esm",
  external: [
    "eslint",
    "prettier",
    "typescript-eslint",
    "eslint-plugin-prettier",
    "eslint-config-prettier",
  ],
});

if (!result.success) {
  console.error("Build failed");
  for (const log of result.logs) {
    console.error(log);
  }
  process.exit(1);
}
