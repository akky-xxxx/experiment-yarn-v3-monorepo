module.exports = {
  extends: [
    "strict-check/react-max",
    "../../config/eslint/import",
    "../../config/eslint/strictCheck",
    "../../config/eslint/strictDependencies",
  ],

  ignorePatterns: ["**/styled-system/**"],
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
}
