import "../src/app/globals.css";
import React from "react";
import { Work_Sans } from "@next/font/google";

// https://levelup.gitconnected.com/how-to-make-next-js-13s-optimized-fonts-work-with-tailwind-css-c3c5e57d38aa
const work = Work_Sans({ subsets: ["latin"] });

export const decorators = [
  (Story) => (
    <>
      <style jsx global>
        {`
          :root {
            --work-sans: ${work.style.fontFamily};
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
