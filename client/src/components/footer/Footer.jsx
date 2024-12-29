import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { SiUbereats } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__copy-rights">
        <p className="footer__copy-rights__text">
          Tous droits de copie réservés <span>&copy; falfoul</span>
        </p>
      </div>
      <div className="footer__social-media">
        <Link
          to={"https://www.facebook.com/share/dwudiGkKeMsv2z8u"}
          target="_blank"
          className="footer__social-media__icon"
        >
          <FaFacebook />
        </Link>
        <Link
          to={
            "https://www.instagram.com/falfoulrestaurant/?igsh=anUwNzlkajloZWww"
          }
          target="_blank"
          className="footer__social-media__icon"
        >
          <FaSquareInstagram />
        </Link>
        <Link
          to={"https://www.tiktok.com/@falfoulrestaurant?_t=8sNnFaSzez7&_r=1"}
          target="_blank"
          className="footer__social-media__icon"
        >
          <AiFillTikTok />
        </Link>
        <Link to={""} className="footer__social-media__icon">
          <SiUbereats />
        </Link>
      </div>
    </div>
  );
}
