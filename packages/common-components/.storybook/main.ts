import { readFileSync } from "fs"
import { join, dirname, resolve } from "path"

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")))
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: (config) => {
    const paths = JSON.parse(readFileSync("./tsconfig.json").toString())
      .compilerOptions.paths
    const applyPaths = Object.fromEntries(
      Object.entries(paths).map(([key, values]) => [
        key.replace("/*", ""),
        resolve(__dirname, "../", values[0].replace("/*", "")),
      ]),
    )
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ...applyPaths,
    }

    return config
  },
}
export default config
