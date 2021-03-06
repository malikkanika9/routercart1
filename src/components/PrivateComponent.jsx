import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const PrivateComponent = ({ children }) => {
   const { isAuth } = useContext(AuthContext);

   if (!isAuth) {
      return <Navigate to="/login" replace={false} />;
   }

   return children;
};

export default PrivateComponent;