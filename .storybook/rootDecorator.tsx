import React from "react";
import "../src/app/globals.css";
import "../src/app/(default-layout)/themeVariables.css";
import { defaultLayoutGoogleFontClassNames } from "../src/app/(default-layout)/defaultLayoutGoogleFontClassNames";

const { primaryFontClassName, secondaryFontClassName } =
  defaultLayoutGoogleFontClassNames;

export const rootDecorator = (Story) => (
  <div
    className={`font-sans ${primaryFontClassName} ${secondaryFontClassName} bg-pageColor`}
  >
    <Story />
  </div>
);
