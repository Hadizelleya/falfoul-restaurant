import React from "react";

export default function Categories({ title, sandwiches }) {
  const url = "http://localhost:1337";
  return (
    <div id={title} className="category">
      <h2 className="category__title">{title}</h2>
      <div className="category__sandwiches">
        {sandwiches.map((sandwich) => (
          <div key={sandwich.id} className="category__sandwiches__sandwich">
            <img
              className="category__sandwiches__sandwich__image"
              src={`${url}${sandwich.image.url}`}
              alt=""
            />
            <div className="category__sandwiches__sandwich__info">
              <div className="category__sandwiches__sandwich__info__header">
                <h4 className="category__sandwiches__sandwich__info__header__title">
                  {sandwich.name}
                </h4>
                <p className="category__sandwiches__sandwich__info__header__price">
                  {sandwich.price}$
                </p>
              </div>
              <p className="category__sandwiches__sandwich__info__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
