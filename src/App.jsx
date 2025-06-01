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
import Landing from "./pages/Landing"; // <-- import the new landing page
import UserProvider from './context/userContext';
import { Toaster } from 'react-hot-toast';

const isAuthenticated = () => !!localStorage.getItem("token");

const PrivateRoute = ({ children }) => (
  isAuthenticated() ? children : <Navigate to="/login" />
);

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
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