import React, { useState } from "react";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [imageId, setImageId] = useState(null); // State to store the image ID

  const { data, loading, error } = useFetch(import.meta.env.VITE_APP_API_URL);
  if (loading) return "loading...";
  if (error) return "error";

  const handleFileChange = async (event) => {
    const image = event.target.files[0]; // Get the first file from the input
    const formData = new FormData();
    formData.append("files", image);

    try {
      const response = await axios.post(
        "http://localhost:1337/api/upload",
        formData,
        {
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_APP_API_TOKEN,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImageId(response.data[0].id); // Store the image ID in the state
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const productData = {
      ...inputs,
      image: imageId, // Include the image ID in the form data
      category: inputs.category, // Include the category ID in the form data
    };

    try {
      const response = await axios.post(
        "http://localhost:1337/api/sandwiches?populate=*",
        { data: productData },
        {
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_APP_API_TOKEN,
          },
        }
      );
      console.log("Product added:", response.data.data);
      setTimeout(() => {
        navigate("/menu", { replace: true });
      }, 2000);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="form-container">
      <form className="form-container__form" onSubmit={handleSubmit}>
        <div className="form-container__form__box">
          <label className="form-container__form__box__label" htmlFor="name">
            Sandwich Name:
          </label>
          <input
            className="form-container__form__box__input"
            type="text"
            required
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-container__form__box">
          <label className="form-container__form__box__label" htmlFor="price">
            Sandwich Price:
          </label>
          <input
            className="form-container__form__box__input"
            type="number"
            step={"any"}
            name="price"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-container__form__box">
          <label
            className="form-container__form__box__label"
            htmlFor="description"
          >
            Sandwich Description:
          </label>
          <input
            className="form-container__form__box__input"
            type="text"
            required
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-container__form__box">
          <label className="form-container__form__box__label" htmlFor="image">
            Sandwich Image:
          </label>
          <input
            className="form-container__form__box__input"
            type="file"
            required
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-container__form__box form-container__form__box--select">
          <label
            className="form-container__form__box__label"
            htmlFor="category"
          >
            Category:
          </label>
          <select
            className="form-container__form__box__select"
            name="category"
            required
            onChange={handleChange}
          >
            <option className="form-container__form__box__select__option">
              Choose from down below
            </option>
            {data.map((category) => (
              <option
                className="form-container__form__box__select__option"
                value={category.id}
                key={category.id}
              >
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <button className="form-container__form__button" type="submit">
          Add Sandwich
        </button>
      </form>
    </div>
  );
}
