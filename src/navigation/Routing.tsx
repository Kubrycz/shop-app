import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ScrollToTop from "./Location";
import ShoppingCardPage from "../pages/ShoppingCardPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="shoppingCard" element={<ShoppingCardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
