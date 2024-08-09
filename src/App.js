import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/userComp/Home";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Profile from "./components/userComp/Profile";
import AddProduct from "./components/adminComp/AddProduct";
import Dashboard from "./components/adminComp/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const userType = localStorage.getItem("userType");

  const loggedin = localStorage.getItem("loggedin");
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* unprotected routes */}
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* private routes */}
        <Route element={<ProtectedRoutes />}>
          {/* user routes */}
          {loggedin && userType == "user" && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/product-list" element={<ProductList />} />{" "}
              <Route path="/user-profile" element={<Profile />} />
            </>
          )}

          {/* admin routeas */}
          {loggedin && userType === "admin" && (
            <>
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/" element={<Dashboard />} />
            </>
          )}
        </Route>
        {/* public routes */}

        <Route path="/about" element={<About />} />

        {/* Catch-All Route: Redirect to Home Page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
