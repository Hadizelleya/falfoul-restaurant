import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";
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
        <Link to={""} className="footer__social-media__icon">
          <FaFacebook />
        </Link>
        <Link to={""} className="footer__social-media__icon">
          <FaSquareInstagram />
        </Link>
        <Link to={""} className="footer__social-media__icon">
          <AiFillTikTok />
        </Link>
        <Link to={""} className="footer__social-media__icon">
          <FaSquareWhatsapp />
        </Link>
      </div>
    </div>
  );
}
