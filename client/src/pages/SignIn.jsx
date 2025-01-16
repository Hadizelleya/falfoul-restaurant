import React, { useContext, useState, useEffect } from "react";
import MainContext from "../utils/MainContext";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const { handleSubmit, user, error } = useContext(MainContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleFormSubmit = (event) => {
    handleSubmit(
      event,
      inputs,
      `${import.meta.env.VITE_APP_MAIN_URL}/api/auth/local`
    );
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      {!user ? (
        <div className="sign-in">
          <form onSubmit={handleFormSubmit} className="sign-in__form">
            <h1 className="sign-in__form__title">Sign In</h1>
            {error && <p className="sign-in__form__error">{error}</p>}
            <div className="sign-in__form__box">
              <label className="sign-in__form__box__label" htmlFor="username">
                Username:
              </label>
              <input
                className="sign-in__form__box__input"
                type="text"
                name="username"
                value={inputs.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sign-in__form__box">
              <label className="sign-in__form__box__label" htmlFor="password">
                Password:
              </label>
              <input
                className="sign-in__form__box__input"
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className="sign-in__form__button" type="submit">
              Sign In
            </button>
          </form>
        </div>
      ) : (
        "hello"
      )}
    </>
  );
}
