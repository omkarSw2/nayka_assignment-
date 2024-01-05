import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { AuthIsAthenticated } = useSelector((store) => store.AuthReducer);

  if (!AuthIsAthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
