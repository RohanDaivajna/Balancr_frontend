import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">
    <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">Welcome to Balancr!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Balancr helps you manage your finances, track expenses, and visualize your budget with ease.
      </p>
      <ul className="text-left max-w-md mx-auto mb-8 space-y-3">
        <li className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
          Track your income and expenses
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
          Visualize spending trends
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>
          Set and monitor budgets
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
          Get financial insights
        </li>
      </ul>
      <div className="flex justify-center gap-4">
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">Login</button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold shadow hover:bg-green-600 transition">Sign Up</button>
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;