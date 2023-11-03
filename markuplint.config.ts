import type { Config } from "@markuplint/ml-config"

const config: Config = {
  extends: "markuplint:recommended-react",
  parser: {
    "\\.[jt]sx?$": "@markuplint/jsx-parser",
  },
  specs: {
    ".[jt]sx?$": "@markuplint/react-spec",
  },
}

export default config
