import { Link, useLocation } from "react-router-dom";
import {
  isAboutUsSelected,
  isHomeSelected,
  isMenuSelected,
  isContactUsSelected,
  isSignInSelected,
} from "../../../utils/checkRoutes";
import { useContext } from "react";
import MainContext from "../../../utils/MainContext";
export default function MobileMenu({ toggleMenu }) {
  const loc = useLocation();
  const { user, handleLogout } = useContext(MainContext);
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__content">
        <Link
          className={`mobile-menu__content__item ${
            isHomeSelected(loc.pathname) &&
            "mobile-menu__content__item--selected"
          }`}
          to="/"
          onClick={toggleMenu}
        >
          Maison
        </Link>

        <Link
          className={`mobile-menu__content__item ${
            isMenuSelected(loc.pathname) &&
            "mobile-menu__content__item--selected"
          }`}
          to="/menu"
          onClick={toggleMenu}
        >
          Menu
        </Link>

        <Link
          className={`mobile-menu__content__item ${
            isAboutUsSelected(loc.pathname) &&
            "mobile-menu__content__item--selected"
          }`}
          to="/about"
          onClick={toggleMenu}
        >
          À propos de nous
        </Link>
        <Link
          className={`mobile-menu__content__item ${
            isContactUsSelected(loc.pathname) &&
            "mobile-menu__content__item--selected"
          }`}
          to="/contact"
          onClick={toggleMenu}
        >
          Contactez Nous
        </Link>
        {!user ? (
          <Link
            className={`mobile-menu__content__item ${
              isSignInSelected(loc.pathname) &&
              "mobile-menu__content__item--selected"
            }`}
            to="/sign-in"
            onClick={toggleMenu}
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
    </div>
  );
}
