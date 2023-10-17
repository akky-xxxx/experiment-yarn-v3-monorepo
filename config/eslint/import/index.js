const { Severity } = require("../const/Severity")

module.exports = {
  overrides: [
    {
      files: ["**/app/**/{page,layout}.tsx"],
      rules: Object.fromEntries(
        ["import/no-default-export"]
          .map((ruleName) => [ruleName, Severity.OFF]),
      ),
    },
  ],
}
