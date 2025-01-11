"use client";

import { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/fashion3.webp",
    "/fashion2.jpg",
    "/fashion4.webp",
    "/fashion1.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the image every 5 seconds (5000ms)

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Smooth Sliding Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-all duration-1500 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Hero Content */}
      <div className="text-center text-white px-4 max-w-3xl z-10">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6">
        Unleash Your Inner Fashionista
        </h1>
        <p className="text-md md:text-xl mb-8 leading-relaxed">
        Find the perfect blend of fashion and comfort with our exclusive collections. Whether it's for everyday wear or a special occasion, 
        discover the pieces that express your unique style.
        </p>

        {/* Call-to-action Buttons */}
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <a
            href="#shop-now"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-lg text-lg transition-transform transform hover:scale-105"
          >
            Shop the Collection
          </a>
          <a
            href="#collections"
            className="px-8 py-4 bg-white font-sm hover:bg-gray-100 text-black rounded-full shadow-lg text-lg transition-transform transform hover:scale-105"
          >
            Explore More
          </a>
        </div>

        
      </div>

      
    </section>
  );
};

export default HeroSection;
