import { Link, useLocation } from "react-router-dom";
import {
  isAboutUsSelected,
  isHomeSelected,
  isSandwichesSelected,
  isContactUsSelected,
} from "../../../utils/checkRoutes";
export default function MobileMenu({ toggleMenu }) {
  const loc = useLocation();
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
            isSandwichesSelected(loc.pathname) &&
            "mobile-menu__content__item--selected"
          }`}
          to="/sandwiches"
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
      </div>
    </div>
  );
}
