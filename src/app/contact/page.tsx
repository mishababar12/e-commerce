"use client";

import { useState } from "react";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }
    setIsSubmitted(true);
    setError("");
    // Here, you can handle form submission logic (e.g., send data to an API)
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-100 text-black min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h1>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black p-6 rounded-lg shadow-md"
        >
          {isSubmitted && (
            <div className="bg-green-200 text-green-700 p-4 rounded-lg mb-4">
              Thank you for contacting us! We will get back to you soon.
            </div>
          )}

          {error && (
            <div className="bg-red-200 text-red-700 p-4 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Message"
              rows={5}
              required
            />
          </div>

          {/* Centering the Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-[400px] py-3 bg-pink-600 text-white text-lg font-semibold rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-800">
          <p className="mb-2">Or reach us at:</p>
          <p>Email: <Link href="mailto:contact@store.com" className="underline text-pink-600">contact@store.com</Link></p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
