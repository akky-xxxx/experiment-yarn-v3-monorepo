const { Severity } = require("../../../const/Severity")

exports.forbiddenUseReactHooks = [
  Severity.ERROR,
  {
    allowPatterns: [
      /\/components\/(?:molecules|organisms|templates)\/[^/]+\/index.tsx$/,
      /\/modules\/use[A-Z][^/]+\/index(?:.test)?.ts$/,
    ],
  },
]
