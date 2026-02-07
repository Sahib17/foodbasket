import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-white">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Fresh Groceries <br />
            Delivered to Your Door
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            FoodBasket brings farm-fresh produce and daily essentials straight
            to your doorstep — fast, affordable, and hassle-free.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/register"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition inline-block"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="Groceries"
            className="w-[400px] rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 md:px-20 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Why Choose FoodBasket?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600">
              Fresh & Organic
            </h3>
            <p className="mt-3 text-gray-600">
              We source directly from trusted farms to ensure top quality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600">
              Fast Delivery
            </h3>
            <p className="mt-3 text-gray-600">
              Same-day and next-day delivery options available.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600">
              Affordable Prices
            </h3>
            <p className="mt-3 text-gray-600">
              Competitive pricing without compromising on quality.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FoodBasket. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
