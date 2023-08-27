const buttonBase =
  "flex justify-center items-center inline-block border-gray-800 font-semibold ";
const buttonPrimary = `${buttonBase} font-primary text-gray-800 hover:bg-gray-800 hover:text-white`;
const buttonInverted = `${buttonBase} bg-gray-800 text-white hover:bg-white hover:text-gray-800`;

const variants = {
  large: `${buttonPrimary} p-4 border-3 text-xl`,
  smol: `${buttonPrimary} p-2 border-2`,
  largeInverted: `${buttonInverted} p-4 border-3 text-xl`,
  smolInverted: `${buttonInverted} p-2 border-2`,
  rounded: `rounded-full flex items-center justify-center bg-white h-10 pr-6 pl-5 hover:bg-gray-100 border-2 border-gray-300 font-primary font-semibold`,
};

export const button = { variants };
