import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-container__content">
        <h1 className="home-container__content__title">
          Bienvenue à <span>falfoul</span>!
        </h1>
        <h2 className="home-container__content__quote">
          Où chaque saveur raconte une histoire
        </h2>
        <p className="home-container__content__paragraph">
          Notre restaurant Falafel et Poulet mélange des saveurs d'inspiration
          méditerranéenne et libanaise dans chaque plat. Dégustez des falafels
          croustillants, du succulent poulet rôti et des accompagnements frais
          et vibrants dans un espace confortable et accueillant. Parfait pour
          une bouchée rapide ou un repas copieux !
        </p>
        <div className="home-container__content__buttons">
          <Link
            className="home-container__content__buttons__btn"
            to={"/sandwiches"}
          >
            Consultez notre menu{"  "}
            <FaArrowRight className="home-container__content__button__arrow" />
          </Link>
          <Link
            className="home-container__content__buttons__btn2 "
            to={"/about"}
          >
            En savoir plus sur nous{"  "}
            <FaArrowRight className="home-container__content__button__arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
