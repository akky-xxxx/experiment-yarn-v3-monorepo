module.exports = {
  extends: ["strict-check/typescript"],

  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  reportUnusedDisableDirectives: true,
  root: true,
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"],
      },
      typescript: [],
    },
  },
}
