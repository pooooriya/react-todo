import { Navigate } from "react-router-dom";

export const GuardRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/" />;
};