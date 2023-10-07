/** @type { import('@storybook/react').Preview } */
import "../src/styles/main/index.css"

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on|handle[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
