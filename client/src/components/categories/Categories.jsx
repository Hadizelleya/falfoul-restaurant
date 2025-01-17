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
  const [imageId, setImageId] = useState("");
  const [editInputs, setEditInputs] = useState({
    name: "",
    price: "",
    description: "",
  });
  const url = import.meta.env.VITE_APP_MAIN_URL;
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

  const closeEditingForm = () => {
    setDisplayForm(!displayForm);
    setImageId("");
  };
  const handleEditClick = (sandwich) => {
    setEditingSandwich(sandwich.documentId);
    setEditInputs({
      name: sandwich.name,
      price: sandwich.price,
      description: sandwich.description
        ? sandwich.description
        : "please type a sandwich description",
    });
    setDisplayForm(!displayForm);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditInputs({ ...editInputs, [name]: value });
  };

  const handleImageChange = async (event) => {
    const image = event.target.files[0]; // Get the first file from the input
    const formData = new FormData();
    formData.append("files", image);

    try {
      const response = await axios.post(
        import.meta.env.VITE_APP_UPLOAD_URL,
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

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    const updatedSandwich = { ...editInputs, image: imageId };
    try {
      const response = await axios.put(
        `${url}/api/sandwiches/${editingSandwich}?populate=*`,
        {
          data: imageId !== "" ? updatedSandwich : editInputs,
        },
        {
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_APP_API_TOKEN,
          },
        }
      );
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
                {sandwich.description}
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
                      onClick={closeEditingForm}
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
                    <label htmlFor="image" className="edit__form__label">
                      Image:
                      <input
                        className="edit__form__input edit__form__input--image"
                        type="file"
                        name="image"
                        value={editInputs.image}
                        onChange={handleImageChange}
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
