"use client";
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Products from "../app/components/products";  // Import the Products component
import ProductDetail from "../app/components/productDetail";  // Import the ProductDetail component
import { CartProvider } from "../app/components/cartContext";
import CartPage from "../app/components/cartPage";
import Navbar from "./components/navbar";
import HeroSection from "../app/components/hero";

const App = () => {
  return (
    <CartProvider>
      {/* Wrap the entire app with BrowserRouter */}
      <Router>
        <Navbar />
        <MainContent />
      </Router>
    </CartProvider>
  );
};

const MainContent = () => {
  // Get current path using useLocation
  const location = useLocation();

  return (
    <>
      {/* Render HeroSection only on the Home page */}
      {location.pathname === "/" && <HeroSection />}
      
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
