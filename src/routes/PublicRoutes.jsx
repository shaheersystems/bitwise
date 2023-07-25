import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export const PublicRoutes = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={"/workspace"} /> : <Outlet />;
};
