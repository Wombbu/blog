const buttonBase =
  "inline-block text-center border-gray-800 font-primary text-gray-800 font-semibold hover:bg-gray-800 hover:text-white";
const inverted = `${buttonBase} bg-gray-800 text-white hover:bg-white hover:text-gray-800`;

const variants = {
  large: `${buttonBase} p-4 border-3 text-xl`,
  smol: `${buttonBase} p-2 border-2`,
  largeInverted: `${inverted} p-4 border-3 text-xl`,
  smolInverted: `${inverted} p-2 border-2`,
};

export const button = { variants };
