import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>Welcome to Balancr!</h1>
    <p>
      Balancr helps you manage your finances, track expenses, and visualize your budget with ease.
    </p>
    <ul style={{ textAlign: "left", maxWidth: 500, margin: "2rem auto" }}>
      <li>Track your income and expenses</li>
      <li>Visualize spending trends</li>
      <li>Set and monitor budgets</li>
      <li>Get financial insights</li>
    </ul>
    <div>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/signup" style={{ marginLeft: "1rem" }}><button>Sign Up</button></Link>
    </div>
  </div>
);

export default HomePage;