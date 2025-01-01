const homePath = "/";
const menuPath = "/menu";
const aboutUsPath = "/about";
const contactUsPath = "/contact";
const signInPath = "/sign-in";
export const isHomeSelected = (currentPath) => currentPath === homePath;
export const isMenuSelected = (currentPath) => currentPath === menuPath;
export const isAboutUsSelected = (currentPath) => currentPath === aboutUsPath;
export const isSignInSelected = (currentPath) => currentPath === signInPath;
export const isContactUsSelected = (currentPath) =>
  currentPath === contactUsPath;
