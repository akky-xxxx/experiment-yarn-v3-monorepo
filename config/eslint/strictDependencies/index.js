const { Severity } = require("../const/Severity")

module.exports = {
  plugins: ["strict-dependencies"],
  rules: {
    "strict-dependencies/strict-dependencies": [
      Severity.ERROR,
      [
        {
          module: "src/components/templates",
          allowReferenceFrom: [
            "src/app",
            "src/components/templates/**/*.stories.tsx",
            "src/components/templates/**/index.tsx",
          ],
          allowSameModule: false,
        },
        {
          module: "jotai",
          allowReferenceFrom: [
            "src/**/components/{organisms,templates}/**",
            "src/globalStates",
          ],
          allowSameModule: false,
        },
        {
          module: "react",
          targetMembers: ["useState", "useReducer"],
          allowReferenceFrom: [
            "src/**/components/{molecules,organisms,templates}/**/index.tsx",
            "src/**/components/{molecules,organisms,templates}/**/modules/**/index.ts",
          ],
          allowSameModule: false,
        },
      ],
      {
        resolveRelativeImport: true,
      },
    ],
  },
}
