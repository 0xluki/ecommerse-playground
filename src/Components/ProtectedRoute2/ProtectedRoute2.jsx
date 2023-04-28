import React from "react";
import "./ProtectedRoute2.module.css";
import { Navigate } from "react-router";

export default function ProtectedRoute(props) {
  if (localStorage.getItem("Token") !== null) {
    return <Navigate to={"/home"} />;
  } else {
    return props.children;
  }
}
