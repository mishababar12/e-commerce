"use client";
import React from "react";
import Link from "next/link"; // Use Next.js Link component
import { useCart } from "../components/cartContext"; // Import useCart to access cart data
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon

const Navbar = () => {
  const { getCartItemCount } = useCart(); // Access the method to get cart item count

  return (
    <nav className="bg-gradient-to-r from-purple-800 to-pink-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo or Home link */}
        <Link href="/" className="text-3xl font-bold text-white hover:text-gray-400">
          My Store
        </Link>

        {/* Navbar Links */}
        <div className="flex space-x-6 ml-auto">
          <Link href="/" className="text-lg hover:text-blue-400 font-bold transition-all duration-300">Home</Link>
          <Link href="/products" className="text-lg hover:text-blue-400 font-bold transition-all duration-300">Products</Link>
          <Link href="/contact" className="text-lg hover:text-blue-400 font-bold transition-all duration-300">Contact</Link>

          {/* Cart Link with cart icon and item count */}
          <Link href="/cart" className="relative flex items-center">
            <FaShoppingCart className="text-2xl mr-2 hover:text-blue-400 transition-all duration-300" />
            {/* Cart item count */}
            <span
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs font-bold"
              style={{ display: getCartItemCount() > 0 ? 'block' : 'none' }}
            >
              {getCartItemCount()}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
