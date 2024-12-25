import React from "react";
import image1 from "../../public/images/about-falafel.jpg";
import image2 from "../../public/images/about-poulet.jpg";
import image3 from "../../public/images/about-frites.jpg";
import { HiArrowSmDown } from "react-icons/hi";
export default function About() {
  return (
    <div className="about-container">
      <div className="about-container__info">
        <h1 className="about-container__info__title">Qui sommes Nous ?</h1>
        <p className="about-container__info__paragraph">
          Bienvenue à Falfoul, un restaurant libanais bien-aimé qui a fièrement
          a apporté son riche patrimoine culinaire du Liban au Canada. Avec plus
          40 ans d'expérience dans l'élaboration de plats authentiques, nous
          sommes ravis de partagez les saveurs vibrantes de notre patrie avec
          notre nouvelle communauté. Réputé pour nos falafels croustillants,
          notre poulet tendre, nos frites dorées et notre gamme
          d'accompagnements frais et savoureux, Falfoul se consacre à offrir un
          le vrai goût de la cuisine libanaise. Des rues animées du Liban au
          cœur du Canada, notre passion pour la bonne bouffe et la chaleur
          l'hospitalité reste inchangée. Rejoignez-nous et découvrez une
          tradition de saveur perfectionnée au fil des décennies, maintenant
          plus proche de chez nous.
        </p>
        <h4 className="about-container__info__note">
          Découvrez certains de nos plats principaux ci-dessous!
        </h4>
        <div className="about-container__info__arrows">
          <HiArrowSmDown className="about-container__info__arrows__icon" />
          <HiArrowSmDown className="about-container__info__arrows__icon" />
          <HiArrowSmDown className="about-container__info__arrows__icon" />
        </div>
      </div>
      <div className="about-container__article">
        <div className="about-container__article__content">
          <h1 className="about-container__article__content__title">Falafel</h1>
          <p className="about-container__article__content__paragraph">
            Découvrez le goût authentique des falafels libanais dans notre
            restaurant, où la tradition rencontre la saveur. Fabriqué à partir
            de pois chiches fraîchement moulus, persil et un mélange d'épices
            aromatiques, nos falafels sont frits à perfection dorée.
            Croustillant à l'extérieur, tendre à l'intérieur, ils sont servis
            avec du tahini piquant, des légumes frais et du pita chaud du pain
            pour une expérience vraiment satisfaisante.
          </p>
        </div>
        <div className="about-container__article__image-container">
          <img
            className="about-container__article__image-container__image"
            src={image1}
            alt="falafel"
          />
        </div>
      </div>
      <div className="about-container__article">
        <div className="about-container__article__image-container">
          <img
            className="about-container__article__image-container__image"
            src={image2}
            alt="falafel"
          />
        </div>
        <div className="about-container__article__content">
          <h1 className="about-container__article__content__title">Poulet</h1>
          <p className="about-container__article__content__paragraph">
            Découvrez les riches saveurs du poulet libanais, un plat qui célèbre
            la tradition et le goût. Notre poulet est mariné dans un mélange
            d'ail, de citron et d'épices méditerranéennes caractéristiques, puis
            rôtis à la perfection juteuse. Accompagné d'accompagnements frais
            comme le houmous, le taboulé, ou pita chaud, c'est un repas
            savoureux et sain qui apporte le cœur du Liban dans votre assiette.
          </p>
        </div>
      </div>
      <div className="about-container__article">
        <div className="about-container__article__content">
          <h1 className="about-container__article__content__title">Frites</h1>
          <p className="about-container__article__content__paragraph">
            Offrez-vous le délice croustillant des frites libanaises, un
            accompagnement bien-aimé plat qui complète n'importe quel repas. Nos
            frites dorées sont découpées à la main et parfaitement assaisonné,
            offrant un croquant satisfaisant à chaque bouchée. Qu'ils soient
            dégustés seuls ou accompagnés de notre ail signature sauce, les
            frites libanaises sont un régal savoureux à ne pas manquer.
          </p>
        </div>
        <div className="about-container__article__image-container">
          <img
            className="about-container__article__image-container__image"
            src={image3}
            alt="falafel"
          />
        </div>
      </div>
    </div>
  );
}
