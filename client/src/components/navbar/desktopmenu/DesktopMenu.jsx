import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  isAboutUsSelected,
  isContactUsSelected,
  isHomeSelected,
  isMenuSelected,
  isSignInSelected,
} from "../../../utils/checkRoutes";
import MainContext from "../../../utils/MainContext";

export default function DesktopMenu() {
  const { user, handleLogout } = useContext(MainContext);
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
          isMenuSelected(loc.pathname) &&
          "navbar__right-side__menu__item--selected"
        }`}
        to="/menu"
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
      {!user ? (
        <Link
          className={`navbar__right-side__menu__item ${
            isSignInSelected(loc.pathname) &&
            "navbar__right-side__menu__item--selected"
          }`}
          to="/sign-in"
        >
          Sign In
        </Link>
      ) : (
        <button
          className={`navbar__right-side__menu__button`}
          onClick={handleLogout}
        >
          Log Out
        </button>
      )}
    </div>
  );
}
