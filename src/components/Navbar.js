import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const userType = localStorage.getItem("userType");
  const loggedin = localStorage.getItem("loggedin");
  //   const userType = "user";
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("loggedin");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex gap-6">
      {!loggedin && (
        <>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/signup">Signup</Link>
          </div>
        </>
      )}
      {/* user links */}
      {userType === "user" && (
        <>
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div>
            <Link to="/product-list">product List</Link>
          </div>
          <div>
            <Link to="/user-profile">Profile</Link>
          </div>
        </>
      )}

      {/* admin links */}
      {userType === "admin" && (
        <>
          <div>
            <Link to="/Dashboard">Dashboard</Link>
          </div>
          <div>
            <Link to="/product-list">product List</Link>
          </div>
          <div>
            <Link to="/add-product">AddProduct</Link>
          </div>
        </>
      )}
      {/* public link */}
      <div>
        <Link to="/about">About</Link>
      </div>
      {loggedin && (
        <>
          <button onClick={logout}>logout</button>
        </>
      )}
    </div>
  );
}

export default Navbar;
