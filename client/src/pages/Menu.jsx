import Categories from "../components/categories/Categories";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BallTriangle } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Menu() {
  const { data, loading, error } = useFetch(import.meta.env.VITE_APP_API_URL);

  return (
    <div className="menu">
      <div className="menu__info-container">
        {/* the restaurant information */}
        <div className="menu__restuarant__info">
          <div className="menu__restuarant__info__box">
            <h4 className="menu__restuarant__info__box__title">Adresse:</h4>
            <Link
              target="_blank"
              to={"https://maps.app.goo.gl/sZH1fcVX3jiwmrWv5"}
              className="menu__restuarant__info__box__description menu__restuarant__info__box__description--link"
            >
              1558 Rue Fleury E Montréal
            </Link>
          </div>
          <div className="menu__restuarant__info__box">
            <h4 className="menu__restuarant__info__box__title">Téléphone:</h4>
            <p className="menu__restuarant__info__box__description">
              514 452 4146
            </p>
          </div>
          <div className="menu__restuarant__info__box">
            <h4 className="menu__restuarant__info__box__title">Email:</h4>
            <Link
              target="_blank"
              to={"mailto:restaurantfalfoul@gmail.com"}
              className="menu__restuarant__info__box__description menu__restuarant__info__box__description--link"
            >
              restaurantfalfoul@gmail.com
            </Link>
          </div>
        </div>
        {/* displaying the fetched data (categories) */}
        <div className="menu__categories-boxes">
          <h1 className="menu__categories-boxes__title">Categories:</h1>
          <div className="menu__categories-boxes__categories-titles">
            {loading
              ? "Loading..."
              : error
              ? "error"
              : data.map((category) => (
                  <AnchorLink
                    className="menu__categories-boxes__categories-titles__name"
                    key={category.id}
                    href={`#${category.title}`}
                  >
                    {category.title}
                  </AnchorLink>
                ))}
          </div>
        </div>
      </div>
      <div>
        <Link className="menu__add-sandwich" to={"/addsandwich"}>
          Add A Sandwich
        </Link>
      </div>
      {loading ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#b46c31"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : error ? (
        "error"
      ) : (
        /* displaying all categories with sandwiches*/
        <div className="menu__categories">
          {data.map((category) => (
            <Categories
              key={category.id}
              sandwiches={category.sandwiches}
              title={category.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}
