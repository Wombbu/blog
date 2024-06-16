import { palette } from "@/essentials/theme/palette";
import { typography } from "@/essentials/theme/typography";
import classNames from "classnames";
import styles from "./button.module.css";

/** Base styles for all buttons */
const buttonBase = classNames(
  "flex justify-center items-center inline-block font-primary font-medium disabled:cursor-not-allowed disabled:opacity-50 [&>svg:first-child]:inline-block relative overflow-hidden",
  styles.loadingButton
);
const rounded = `rounded-full`;

/** Base styles for large buttons */
const sizeLarge =
  "py-4 px-7 [&>svg:first-child]:mr-2 [&>svg:first-child]:w-6 [&>svg:first-child]:h-6 ";
const sizeMedium =
  "py-2 px-5 [&>svg:first-child]:mr-2 [&>svg:first-child]:w-5 [&>svg:first-child]:h-5 ";
const sizeSmall =
  "py-1.5 px-4 [&>svg:first-child]:mr-1 [&>svg:first-child]:w-4 [&>svg:first-child]:h-4 ";

const borderLarge = "border-3";
const borderMedium = "border-2";
const borderSmall = "border-2";

const iconButtonBase = classNames(
  `bg-gray-500 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-30 flex justify-center items-center disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-opacity-0`
);

const iconButtonSmall =
  "w-8 h-8 [&>svg:first-child]:w-5 [&>svg:first-child]:h-5";
const iconButtonMedium =
  "w-10 h-10 [&>svg:first-child]:w-6 [&>svg:first-child]:h-6";
const iconButtonLarge =
  "w-12 h-12 [&>svg:first-child]:w-8 [&>svg:first-child]:h-8";

export const button = {
  iconButton: {
    rounded: {
      small: classNames(iconButtonBase, iconButtonSmall, rounded),
      medium: classNames(iconButtonBase, iconButtonMedium, rounded),
      large: classNames(iconButtonBase, iconButtonLarge, rounded),
    },
    rectangular: {
      small: classNames(iconButtonBase, iconButtonSmall),
      medium: classNames(iconButtonBase, iconButtonMedium),
      large: classNames(iconButtonBase, iconButtonLarge),
    },
  },
  rectangular: {
    secondary: {
      small: classNames(
        sizeSmall,
        borderSmall,
        buttonBase,
        palette.border.primary,
        palette.button.background.secondary,
        typography.button.secondary.small
      ),
      medium: classNames(
        sizeMedium,
        borderMedium,
        buttonBase,
        "border-2",
        palette.border.secondary,
        palette.button.background.secondary,
        typography.button.secondary.medium
      ),
      large: classNames(
        sizeLarge,
        borderLarge,
        buttonBase,
        "border-3",
        palette.border.secondary,
        palette.button.background.secondary,
        typography.button.secondary.large
      ),
    },
    primary: {
      small: classNames(
        buttonBase,
        sizeSmall,
        palette.button.background.primary,
        typography.button.primary.small
      ),
      medium: classNames(
        buttonBase,
        sizeMedium,
        palette.button.background.primary,
        typography.button.primary.medium
      ),
      large: classNames(
        buttonBase,
        sizeLarge,
        palette.button.background.primary,
        typography.button.primary.large
      ),
    },
  },
  rounded: {
    secondary: {
      small: classNames(
        sizeSmall,
        borderSmall,
        buttonBase,
        rounded,
        palette.border.secondary,
        palette.button.background.secondary,
        typography.button.secondary.small
      ),
      medium: classNames(
        sizeMedium,
        borderMedium,
        buttonBase,
        rounded,
        borderMedium,
        palette.border.secondary,
        palette.button.background.secondary,
        typography.button.secondary.medium
      ),
      large: classNames(
        sizeLarge,
        borderLarge,
        buttonBase,
        rounded,
        borderLarge,
        palette.border.secondary,
        palette.button.background.secondary,
        typography.button.secondary.large
      ),
    },
    primary: {
      small: classNames(
        buttonBase,
        rounded,
        sizeSmall,
        palette.button.background.primary,
        typography.button.primary.small
      ),
      medium: classNames(
        buttonBase,
        rounded,
        sizeMedium,
        palette.button.background.primary,
        typography.button.primary.medium
      ),
      large: classNames(
        buttonBase,
        rounded,
        sizeLarge,
        palette.button.background.primary,
        typography.button.primary.large
      ),
    },
  },
};
