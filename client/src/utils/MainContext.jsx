import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`http://localhost:1337/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    }
  }, []);

  const handleSubmit = async (event, inputs, url) => {
    event.preventDefault();
    const formData = {
      identifier: inputs.username,
      password: inputs.password,
    };

    try {
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
        },
      });
      const token = response.data.jwt;
      localStorage.setItem("token", token);
      const userData = response.data.user;
      setUser(userData);
      console.log(userData);

      // Handle successful login (e.g., store token, redirect)
    } catch (error) {
      console.error(
        "Error signing in:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <MainContext.Provider value={{ handleSubmit, handleLogout, user }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
