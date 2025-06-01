import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const featureIcons = {
  blue: (
    <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor"/>
    </svg>
  ),
  green: (
    <svg className="w-12 h-12 text-green-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 12l6 6L20 6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 text-gray-800">
      {/* Hero Section */}
      <motion.header
        className="flex flex-col items-center justify-center text-center px-6 py-24 bg-white/80 shadow-2xl rounded-b-3xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-4 text-blue-700 drop-shadow-lg"
          variants={fadeIn}
          custom={0.1}
        >
          Welcome to <span className="text-green-600">Balancr</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-slate-700 mb-10 max-w-2xl"
          variants={fadeIn}
          custom={0.2}
        >
          Your smart personal finance tracker to manage budgets and track expenses—all in one place.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={fadeIn}
          custom={0.3}
        >
          <Link to="/signup">
            <button className="px-8 py-3 rounded-full font-semibold shadow-lg transition text-white bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className="px-8 py-3 rounded-full font-semibold shadow-lg transition text-blue-700 bg-white border-2 border-blue-600 hover:bg-blue-50 text-lg">
              Log In
            </button>
          </Link>
        </motion.div>
      </motion.header>

      {/* Features Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-white via-blue-50 to-green-50">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-14 text-blue-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Features You'll Love
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            { title: "Track Expenses", color: "blue", desc: "Easily record income and expenses." },
            { title: "Visualize Trends", color: "green", desc: "See where your money goes each month." },
          ].map(({ title, color, desc }, i) => (
            <motion.div
              key={title}
              className="bg-white/90 p-10 rounded-3xl shadow-xl text-center border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0.2 + i * 0.1}
            >
              <div className="flex items-center justify-center mb-6">
                {featureIcons[color]}
              </div>
              <h3 className={`text-2xl font-semibold mb-3 text-${color}-600`}>{title}</h3>
              <p className="text-slate-600 text-lg">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 border-t mt-auto rounded-t-3xl shadow-inner">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} Balancr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;