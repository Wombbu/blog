import { palette } from "@/essentials/theme/palette";

export const variants = {
  sectionTitle: (params?: { noGutter?: true }) =>
    `${palette.text.primary} font-primary text-2xl sm:text-3xl font-bold ${
      params?.noGutter ? "" : "mb-6"
    }`,
  subtitle: `${palette.text.primary} font-primary text-xl sm:text-2xl font-medium`,
  headerLink: `${palette.text.primary} font-primary text-lg font-bold hover:underline decoration-2`,
  textBody: `${palette.text.primary} font-primary text-base font-medium`,
  secondaryTitle: `${palette.text.secondary} font-primary text-md`,
  pageTitle: `${palette.text.accent} text-5xl font-primary font-bold`,
  caption: `${palette.text.secondary} font-primary text-sm`,
};

export const typography = { variants };
