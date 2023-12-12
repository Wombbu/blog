import { palette } from "@/essentials/theme/palette";

const buttonBase =
  "flex justify-center items-center inline-block font-semibold ";
const buttonPrimary = `${buttonBase} font-primary text-gray-800 hover:bg-gray-800`;
const buttonInverted = `${buttonBase} bg-black text-white hover:bg-gray-800`;

const variants = {
  large: `${buttonPrimary} py-4 px-5 text-xl hover:bg-gray-100 border-3 ${palette.border.primary}`,
  smol: `${buttonPrimary} py-3 px-4`,
  largeInverted: `${buttonInverted} p-4 text-xl border-3 ${palette.border.primary}`,
  smolInverted: `${buttonInverted} py-3 px-4`,
  rounded: `rounded-full flex items-center justify-center bg-white h-10 pr-6 pl-5 hover:bg-gray-100 border-2 ${palette.border.secondary} font-primary font-semibold`,
  iconButton: `bg-gray-500 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-30 flex justify-center items-center w-10 h-10 text-2xl`,
};

export const button = { variants };
