import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import AddProduct from "./pages/AddProduct";
import { MainProvider } from "./utils/MainContext"; // Correct import path
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <>
      <MainProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-sandwich" element={<AddProduct />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </MainProvider>
    </>
  );
}
