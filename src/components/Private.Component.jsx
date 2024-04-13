import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { loginInfo } from "../context/Login.Context";

const Private = ({ children }) => {
  const {
    status: [isLogged],
  } = useContext(loginInfo);
  const token = localStorage.getItem("token");
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ prev: useLocation().pathname }} />
  );
};

export default Private;
