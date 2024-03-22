import { Work_Sans, Roboto } from "next/font/google";

const primaryFontFamily = Work_Sans({
  subsets: ["latin"],
  variable: "--font-family-primary",
});

const secondaryFontFamily = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-family-secondary",
});

export const defaultLayoutGoogleFontClassNames = {
  primaryFontClassName: primaryFontFamily.variable,
  secondaryFontClassName: secondaryFontFamily.variable,
};
