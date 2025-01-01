import axios from "axios";
import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import MainContext from "../../utils/MainContext";
export default function Categories({ title, sandwiches }) {
  const { user } = useContext(MainContext);
  const [sandwichList, setSandwichList] = useState(sandwiches);
  const [editingSandwich, setEditingSandwich] = useState(null);
  const [displayForm, setDisplayForm] = useState(false);
  const [editInputs, setEditInputs] = useState({
    name: "",
    price: "",
    description: "",
  });
  const url = "http://localhost:1337";
  const deleteItem = async (documentId) => {
    try {
      await axios.delete(`${url}/api/sandwiches/${documentId}`, {
        headers: {
          Authorization: "Bearer " + import.meta.env.VITE_APP_API_TOKEN,
        },
      });
      // Update the state to remove the deleted sandwich
      setSandwichList(
        sandwichList.filter((sandwich) => sandwich.documentId !== documentId)
      );
    } catch (error) {
      console.error("Error deleting sandwich:", error);
    }
  };
  const handleEditClick = (sandwich) => {
    setEditingSandwich(sandwich.documentId);
    setEditInputs({
      name: sandwich.name,
      price: sandwich.price,
      // description: sandwich.description, (we need to add description first)
    });
    setDisplayForm(!displayForm);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditInputs({ ...editInputs, [name]: value });
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${url}/api/sandwiches/${editingSandwich}?populate=*`,
        {
          data: editInputs,
        },
        {
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_APP_API_TOKEN,
          },
        }
      );
      console.log(response.data.data);
      if (response.status === 200) {
        setSandwichList(
          sandwichList.map((sandwich) =>
            sandwich.documentId === editingSandwich
              ? response.data.data
              : sandwich
          )
        );
        setEditingSandwich(null);
        setDisplayForm(!displayForm);
      } else {
        console.error("Failed to update sandwich:", response);
      }
    } catch (error) {
      console.error("Error updating sandwich:", error);
    }
  };

  return (
    <div id={title} className="category">
      <h2 className="category__title">{title}</h2>
      <div className="category__sandwiches">
        {sandwichList.map((sandwich) => (
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
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              {user && (
                <div className="category__sandwiches__sandwich__info__icons">
                  <MdDelete
                    className="category__sandwiches__sandwich__info__icons__icon"
                    id={sandwich.id}
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={() => deleteItem(sandwich.documentId)}
                  />
                  {!displayForm ? (
                    <FaEdit
                      className="category__sandwiches__sandwich__info__icons__icon"
                      style={{ color: "white", cursor: "pointer" }}
                      onClick={() => handleEditClick(sandwich)}
                    />
                  ) : (
                    <FaRegWindowClose
                      className="category__sandwiches__sandwich__info__icons__icon"
                      style={{ color: "white", cursor: "pointer" }}
                      onClick={() => setDisplayForm(!displayForm)}
                    />
                  )}
                </div>
              )}
              {displayForm && editingSandwich === sandwich.documentId && (
                <div className="edit">
                  <h2 className="edit__title">Edit Sandwich</h2>
                  <form className="edit__form" onSubmit={handleEditSubmit}>
                    <label htmlFor="name" className="edit__form__label">
                      Name:
                      <input
                        className="edit__form__input"
                        type="text"
                        name="name"
                        value={editInputs.name}
                        onChange={handleEditChange}
                      />
                    </label>
                    <label htmlFor="price" className="edit__form__label">
                      Price:
                      <input
                        className="edit__form__input"
                        type="number"
                        name="price"
                        value={editInputs.price}
                        onChange={handleEditChange}
                      />
                    </label>
                    <label htmlFor="description" className="edit__form__label">
                      Description:
                      <input
                        className="edit__form__input"
                        type="text"
                        name="description"
                        value={editInputs.description}
                        onChange={handleEditChange}
                      />
                    </label>
                    <div className="edit__form__buttons">
                      <button
                        className="edit__form__buttons__button"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
