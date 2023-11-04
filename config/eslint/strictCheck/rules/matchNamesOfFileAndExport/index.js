const { Severity } = require("../../../const/Severity")

exports.matchNamesOfFileAndExport = [
  Severity.ERROR,
  {
    captures: [
      /\/components\/(?:atoms|molecules|organisms|templates)\/([^/]+)\/index.tsx$/,
      /\/modules\/([^/]+)\/index.ts/,
    ],
  },
]
