import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const islogged = localStorage.getItem("loggedin"); // Simulate authentication status
  console.log(islogged);
  return islogged ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
