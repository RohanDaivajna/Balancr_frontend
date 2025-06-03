import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Feature list for landing page
const features = [
  {
    title: "Track Expenses",
    color: "blue",
    desc: "Easily record income and expenses.",
  },
  {
    title: "Visualize Trends",
    color: "green",
    desc: "See where your money goes each month.",
  },
];

// Color mapping for feature cards
const colorMap = {
  blue: {
    bgLight: "bg-blue-50",
    bgDark: "bg-blue-200",
    text: "text-blue-700",
  },
  green: {
    bgLight: "bg-green-50",
    bgDark: "bg-green-200",
    text: "text-green-700",
  },
};

// SVG icons for features
const featureIcons = [
  (colorClass) => (
    <svg
      key="icon-dollar"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${colorClass}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 1v22M16 5H8a4 4 0 1 0 0 8h6a4 4 0 1 1 0 8H8"
      />
    </svg>
  ),
  (colorClass) => (
    <svg
      key="icon-chart"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${colorClass}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 17v-4m4 4v-8m4 8v-6m4 6v-2m4 2v-10"
      />
    </svg>
  ),
];

const LandingPage = () => {
  const currentYear = new Date().getFullYear();

  // Example data for pie chart
  const pieData = [
    { name: "Savings", value: 400 },
    { name: "Expenses", value: 300 },
    { name: "Investments", value: 300 },
    { name: "Others", value: 200 },
  ];

  // Colors for pie chart slices
  const COLORS = ["#6366F1", "#4F46E5", "#4338CA", "#3730A3"];

  // Example data for bar chart
  const barData = [
    { month: "Jan", amount: 400 },
    { month: "Feb", amount: 300 },
    { month: "Mar", amount: 500 },
    { month: "Apr", amount: 200 },
    { month: "May", amount: 278 },
    { month: "Jun", amount: 189 },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900 relative overflow-x-hidden">
      {/* Decorative SVG backgrounds */}
      <svg
        className="absolute top-0 left-0 -z-10 w-64 h-64 md:w-96 md:h-96 text-indigo-100 opacity-30"
        fill="currentColor"
        viewBox="0 0 400 400"
      >
        <circle cx="200" cy="200" r="200" />
      </svg>
      <svg
        className="absolute bottom-0 right-0 -z-10 w-64 h-64 md:w-96 md:h-96 text-indigo-200 opacity-20"
        fill="currentColor"
        viewBox="0 0 400 400"
      >
        <rect width="400" height="400" rx="50" />
      </svg>

      {/* Header with logo and navigation */}
      <header className="flex flex-row md:flex-row justify-between items-center max-w-7xl mx-auto p-4 md:p-6 border-b border-gray-200 w-full gap-4">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-indigo-700 flex items-center">
          <motion.svg
            className="w-8 h-8 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l2 2 4-4" />
          </motion.svg>
          Balancr
        </Link>
        <nav className="text-gray-700 font-medium flex flex-wrap gap-2">
          <Link
            to="/login"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition whitespace-nowrap"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition whitespace-nowrap"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero section with animated heading and charts */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-20 text-center relative">
        <motion.div
          className="mx-auto mt-6 mb-8 w-24 md:w-40 h-1 rounded-full bg-indigo-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold leading-tight relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Take Control of Your Finances with{" "}
          <span className="text-indigo-600">Balancr</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-base md:text-lg max-w-3xl mx-auto text-gray-700 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          A professional personal finance tracker that helps you budget, track
          expenses, and grow your savings intelligently.
        </motion.p>

        {/* Charts section */}
        <div className="mt-10 md:mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 w-full">
          {/* Pie chart for expense distribution */}
          <div className="w-full max-w-xs h-64 md:w-64">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-indigo-700">Expense Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar chart for monthly spending */}
          <div className="w-full max-w-md h-64 md:w-96 overflow-x-auto">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-indigo-700">Monthly Spending</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-indigo-700 mb-8 md:mb-12">
          Our Core Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {features.map(({ title, color, desc }, idx) => {
            const { bgLight, bgDark, text } = colorMap[color];
            return (
              <div
                key={idx}
                className={`${bgLight} rounded-lg p-4 md:p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow`}
              >
                <div
                  className={`${bgDark} w-10 h-10 md:w-12 md:h-12 mb-4 rounded-full flex items-center justify-center font-bold text-xl`}
                >
                  {featureIcons[idx](text)}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to action section */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 text-center">
        <motion.p
          className="text-lg md:text-xl font-medium text-gray-800 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to simplify your finances and reach your goals?
        </motion.p>
        <Link
          to="/signup"
          className="inline-block px-8 md:px-12 py-3 md:py-4 bg-indigo-600 text-white rounded-full text-base md:text-lg font-semibold hover:bg-indigo-700 transition relative overflow-hidden"
        >
          <motion.span
            className="absolute inset-0 bg-indigo-700 opacity-30"
            whileHover={{ scaleX: 1.2, scaleY: 1.2 }}
            transition={{ duration: 0.4 }}
          />
          <span className="relative z-10">Get Started Now</span>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 md:py-8 text-center text-gray-600 text-xs md:text-sm mt-auto w-full relative z-10">
        © {currentYear}{" "}
        <a href="/" className="text-indigo-600 font-semibold hover:underline">
          Balancr
        </a>
        . All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;