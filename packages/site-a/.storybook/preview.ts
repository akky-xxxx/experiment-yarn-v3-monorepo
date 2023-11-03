/** @type { import('@storybook/react').Preview } */
import "@experiment-yarn-v3-monorepo/common-components/src/styles/main/index.css"

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
}

export default preview
