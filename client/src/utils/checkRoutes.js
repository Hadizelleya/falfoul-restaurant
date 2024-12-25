const homePath = "/";
const sandwichesPath = "/sandwiches";
const aboutUsPath = "/about";
const contactUsPath = "/contact";
export const isHomeSelected = (currentPath) => currentPath === homePath;
export const isSandwichesSelected = (currentPath) =>
  currentPath === sandwichesPath;
export const isAboutUsSelected = (currentPath) => currentPath === aboutUsPath;
export const isContactUsSelected = (currentPath) =>
  currentPath === contactUsPath;
