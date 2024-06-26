import { palette } from "@/essentials/theme/palette";

const variants = {
  largeTitle: `${palette.text.accent} font-primary text-4xl sm:text-5xl font-bold text-center`,
  sectionTitle: (params?: { noGutter?: true }) =>
    `${palette.text.accent} font-primary text-2xl sm:text-3xl font-bold ${
      params?.noGutter ? "" : "mb-6"
    }`,
  subtitle: `${palette.text.accent} font-primary text-xl sm:text-2xl font-medium`,
  headerLink: `${palette.text.primary} font-primary text-lg font-bold hover:underline decoration-2`,
  textBody: `${palette.text.primary} font-primary text-base font-medium`,
  secondaryTitle: `${palette.text.secondary} font-primary text-md`,
  pageTitle: `${palette.text.accent} text-4xl font-primary font-bold`,
  caption: `${palette.text.secondary} font-primary text-sm`,
  link: `text-blue-600 underline`,
};

const button = {
  primary: {
    large: `${palette.text.inverse} font-primary text-lg font-semibold`,
    medium: `${palette.text.inverse} font-primary text-base font-md`,
    small: `${palette.text.inverse} font-primary text-sm font-md`,
  },
  secondary: {
    large: `${palette.text.primary} font-primary text-lg font-semibold`,
    medium: `${palette.text.primary} font-primary text-base font-md`,
    small: `${palette.text.primary} font-primary text-sm font-md`,
  },
};

export const typography = { variants, button };
