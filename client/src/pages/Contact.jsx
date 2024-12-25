import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const form = useRef();
  const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert("Email Was Sent Successfully");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
    setFormData({
      name: "",
      subject: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-container__header">
        <h1 className="contact-container__header__title">Contactez nous</h1>
        <h3 className="contact-container__header__subtitle">
          Comment entrer en contact ?
        </h3>
        <p className="contact-container__header__description">
          Voici une version moyenne pour votre page « Contactez-nous » : « Nous
          aimerions pour avoir de vos nouvelles ! Que vous fassiez une
          réservation, ayez un question, ou souhaitez partager vos commentaires,
          n'hésitez pas à nous contacter. Contactez-nous par téléphone, par
          e-mail ou passez au restaurant : nous sommes là pour vous aider. votre
          expérience spéciale.
        </p>
      </div>
      <div className="contact-container__body">
        <div className="contact-container__body__info">
          <div className="contact-container__body__info__box">
            <h4 className="contact-container__body__info__box__title">
              Adresse:
            </h4>
            <Link
              target="_blank"
              to={"https://maps.app.goo.gl/sZH1fcVX3jiwmrWv5"}
              className="contact-container__body__info__box__description contact-container__body__info__box__description--link"
            >
              123 Rue de la Paix, Paris, France
            </Link>
          </div>
          <div className="contact-container__body__info__box">
            <h4 className="contact-container__body__info__box__title">
              Téléphone:
            </h4>
            <p className="contact-container__body__info__box__description">
              514 452 4146
            </p>
          </div>
          <div className="contact-container__body__info__box">
            <h4 className="contact-container__body__info__box__title">
              Adresse:
            </h4>
            <Link
              target="_blank"
              to={"mailto:restaurantfalfoul@gmail.com"}
              className="contact-container__body__info__box__description contact-container__body__info__box__description--link"
            >
              restaurantfalfoul@gmail.com
            </Link>
          </div>
        </div>
        <form
          ref={form}
          className="contact-container__body__form"
          onSubmit={handleSubmit}
        >
          <div className="contact-container__body__form__inputs">
            <input
              type="text"
              name="name"
              className="contact-container__body__form__input"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              className="contact-container__body__form__input"
              placeholder="Le Sujet"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            className="contact-container__body__form__input"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="contact-container__body__form__input"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            className="contact-container__body__form__button"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
