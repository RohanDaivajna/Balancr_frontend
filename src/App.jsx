import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Expense from "./pages/Dashboard/Expense";
import Income from "./pages/Dashboard/Income";
import Landing from "./pages/Dashboard/HomePage"; 
import UserProvider from './context/userContext';
import { Toaster } from 'react-hot-toast';

// Check if user is authenticated by checking for token in localStorage
const isAuthenticated = () => !!localStorage.getItem("token");

// PrivateRoute component to protect routes from unauthenticated access
const PrivateRoute = ({ children }) => (
  isAuthenticated() ? children : <Navigate to="/login" />
);

const App = () => {
  return (
    <UserProvider>
      <div>
        {/* App routing setup */}
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            {/* Protected dashboard routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/income"
              element={
                <PrivateRoute>
                  <Income />
                </PrivateRoute>
              }
            />
            <Route
              path="/expense"
              element={
                <PrivateRoute>
                  <Expense />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </div>
      {/* Toast notifications */}
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px"
          },
        }}
      />
    </UserProvider>
  )
}

export default App;