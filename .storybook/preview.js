import "../src/app/globals.css";
import React from "react";
import { Work_Sans, Vollkorn } from "@next/font/google";

// https://levelup.gitconnected.com/how-to-make-next-js-13s-optimized-fonts-work-with-tailwind-css-c3c5e57d38aa
const primaryFontFamily = Work_Sans({ subsets: ["latin"] });
const secondaryFontFamily = Vollkorn({ subsets: ["latin"] });

export const decorators = [
  (Story) => (
    <>
      <style jsx global>
        {`
          :root {
            --font-family-primary: ${primaryFontFamily.style.fontFamily};
            --font-family-secondary: ${secondaryFontFamily.style.fontFamily};
          }
        `}
      </style>
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators,
};
