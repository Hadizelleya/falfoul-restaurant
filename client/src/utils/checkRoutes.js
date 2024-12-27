const homePath = "/";
const menuPath = "/menu";
const aboutUsPath = "/about";
const contactUsPath = "/contact";
export const isHomeSelected = (currentPath) => currentPath === homePath;
export const isMenuSelected = (currentPath) => currentPath === menuPath;
export const isAboutUsSelected = (currentPath) => currentPath === aboutUsPath;
export const isContactUsSelected = (currentPath) =>
  currentPath === contactUsPath;
