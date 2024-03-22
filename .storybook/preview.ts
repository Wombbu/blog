import type { Preview } from "@storybook/react";
import { rootDecorator } from "./rootDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [rootDecorator],
};

export default preview;
