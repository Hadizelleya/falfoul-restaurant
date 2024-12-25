import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  isAboutUsSelected,
  isContactUsSelected,
  isHomeSelected,
  isSandwichesSelected,
} from "../../../utils/checkRoutes";

export default function DesktopMenu() {
  const loc = useLocation();
  return (
    <div className="navbar__right-side__menu">
      <Link
        className={`navbar__right-side__menu__item ${
          isHomeSelected(loc.pathname) &&
          "navbar__right-side__menu__item--selected"
        }`}
        to="/"
      >
        Maison
      </Link>
      <Link
        className={`navbar__right-side__menu__item ${
          isSandwichesSelected(loc.pathname) &&
          "navbar__right-side__menu__item--selected"
        }`}
        to="/sandwiches"
      >
        Menu
      </Link>
      <Link
        className={`navbar__right-side__menu__item ${
          isAboutUsSelected(loc.pathname) &&
          "navbar__right-side__menu__item--selected"
        }`}
        to="/about"
      >
        À propos de nous
      </Link>
      <Link
        className={`navbar__right-side__menu__item ${
          isContactUsSelected(loc.pathname) &&
          "navbar__right-side__menu__item--selected"
        }`}
        to="/contact"
      >
        Contactez Nous
      </Link>
    </div>
  );
}
