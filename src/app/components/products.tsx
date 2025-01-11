"use client";

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

// Define the Product interface
interface Product {
  category: string;
  id: number;
  title: string;
  price: number;
  image: string;
}

const Products = () => {
  const [data, setData] = useState<Product[]>([]);
  const [filter, setFilter] = useState<Product[]>(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        const products = await response.clone().json();
        setData(products);
        setFilter(products);
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="text-center text-xl font-bold text-gray-600">
          <Skeleton height={350} />
        </div>
        <div className="text-center text-xl font-bold text-gray-600">
          <Skeleton height={350} />
        </div>
        <div className="text-center text-xl font-bold text-gray-600">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat: String) => {
    const updatedList = data.filter((x) => x.category === cat)
    setFilter(updatedList)
  }

  const ShowProducts = () => {


    return (
      <>
        {/* Button Filters */}
        <div className="flex justify-center mb-5 pb-5 space-x-4">
          <button
            className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => setFilter(data)} // Show all products
          >
            All
          </button>
          <button
            className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => filterProduct("men's clothing")} // Filter by category
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => filterProduct("women's clothing")} // Filter by category
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => filterProduct("jewelery")} // Fix spelling
          >
            Jewelry
          </button>
          <button
            className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => filterProduct("electronics")} // Filter by category
          >
            Electronics
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filter.map((product) => {
            return (
              <div key={product.id} className="flex justify-center">
                <div className="card w-full max-w-xs bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top w-full h-64 object-contain rounded-t-lg"
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title text-lg font-semibold truncate">
                      {product.title}
                    </h5>
                    <p className="card-text text-gray-600 font-bold text-xl">
                      ${product.price}
                    </p>
                    <Link
                      to={`/product/${product.id}`} // Use backticks for dynamic routing
                      className="btn bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-lg mt-4 inline-block w-full text-center"
                    >
                      View Details
                    </Link>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container my-5 py-5 px-4">
        <div className="row">
          <div className="col-12 mb-5 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Latest Products</h1>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;