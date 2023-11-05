module.exports = {
  extends: [
    "strict-check/react-max",
    "../../config/eslint/import",
    "../../config/eslint/strictCheck",
    "../../config/eslint/strictDependencies",
  ],

  ignorePatterns: ["**/.next/**", "**/styled-system/**", "**/libs/**"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  reportUnusedDisableDirectives: true,
  root: true,
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".mjs"],
      },
      typescript: [],
    },
  },
  overrides: [
    {
      files: "src/app/**/page.tsx",
      rules: {
        // no-restricted-exports と競合するため
        "unicorn/prefer-export-from": 0,
      },
    },
  ],
}
