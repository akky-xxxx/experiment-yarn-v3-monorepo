/** @type { import('@storybook/react').Preview } */
// import "@experiment-yarn-v3-monorepo/common-components/src/styles/main/index.css"
import { initialize, mswLoader } from "msw-storybook-addon"
import { withScreenshot } from "storycap"

export const decorators = [withScreenshot]

initialize()

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
}

export default preview
