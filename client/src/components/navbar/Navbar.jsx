import React, { useEffect, useState } from "react";
import image from "../../../public/images/falfoul-logo.jpg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import useWindowSize from "../../utils/useWindowSize";
import DesktopMenu from "./desktopmenu/DesktopMenu";
import MobileMenu from "./mobilemenu/MobileMenu";
export default function Navbar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { width } = useWindowSize();
  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    if (width > 800) {
      setIsMenuOpened(false);
    }
  }, [width]);
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img className="navbar__logo__image" src={image} alt="logo" />
          </Link>
        </div>
        <div className="navbar__right-side">
          {width < 900 ? (
            isMenuOpened ? (
              <IoCloseSharp
                onClick={toggleMenu}
                className="navbar__right-side__icon"
              />
            ) : (
              <GiHamburgerMenu
                onClick={toggleMenu}
                className="navbar__right-side__icon"
              />
            )
          ) : (
            <DesktopMenu />
          )}
        </div>
      </div>
      {isMenuOpened && (
        <MobileMenu toggleMenu={toggleMenu} isMenuOpened={isMenuOpened} />
      )}
    </>
  );
}
