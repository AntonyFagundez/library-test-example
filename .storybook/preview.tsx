import React from "react";
import type { Preview } from "@storybook/react";
import pkg from "../package.json";

const [version, postfix] = pkg.version.split("-");
const [major, minor, patch ] = version.split(".");


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "centered"
  },
  //TODO Apply decorators with provider theme
  // decorators: [
  //   (Story) => (
  //     <ThemeProvider theme="default">
  //       {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
  //       <Story />
  //     </ThemeProvider>
  //   ),
  // ],
};

export default preview;
