import React from "react";
import "./ProtectedRoute.module.css";
import { Navigate } from "react-router";

export default function ProtectedRoute(props) {
  if (localStorage.getItem("userToken") === null) {
    return <Navigate to={"/login"} />;
  } else {
    return props.children;
  }
}
