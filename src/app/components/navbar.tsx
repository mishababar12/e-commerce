"use client";

import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../components/cartContext"; // Import useCart to access cart data

const Navbar = () => {
  const { getCartItemCount } = useCart(); // Access the method to get cart item count

  return (
    <nav className="bg-gradient-to-r from-purple-800 to-pink-900 text-white py-3 px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo or Home link */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-400">
          My Store
        </Link>

        {/* Navbar Links - Responsive View */}
        <div className="hidden md:flex space-x-6 ml-auto">
          <Link href="/" className="text-lg hover:text-blue-400 font-bold transition-all duration-300">
            Home
          </Link>
          <Link href="/products" className="text-lg hover:text-blue-400 font-bold transition-all duration-300">
            Products
          </Link>
          <Link href="/contact" className="text-lg hover:text-blue-400 font-bold transition-all duration-300">
            Contact
          </Link>
        </div>

        {/* Cart Link with cart icon and item count */}
        <Link href="/cart" className="relative flex items-center text-lg hover:text-blue-400 font-bold transition-all duration-300">
          <FaShoppingCart className="text-2xl ml-6" />
          {/* Cart item count */}
          <span
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs font-bold"
            style={{ display: getCartItemCount() > 0 ? 'block' : 'none' }}
          >
            {getCartItemCount()}
          </span>
        </Link>
      </div>

      {/* Mobile Menu - Responsive */}
      <div className="md:hidden bg-gradient-to-r from-purple-800 to-pink-900 p-4">
        <nav className="flex flex-col items-center space-y-4">
          <Link href="/" className="text-lg -mt-8 text-white hover:text-blue-400 font-bold transition-all duration-300">
            Home
          </Link>
          <Link href="/products" className="text-lg text-white hover:text-blue-400 font-bold transition-all duration-300">
            Products
          </Link>
          <Link href="/contact" className="text-lg text-white hover:text-blue-400 font-bold transition-all duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;

