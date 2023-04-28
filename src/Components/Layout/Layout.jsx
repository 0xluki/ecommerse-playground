import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout({ userData, setuserData }) {
  let navigate = useNavigate();
  function logout() {
    localStorage.removeItem("Token");
    setuserData(null);
    navigate("/login");
  }

  return (
    <>
      <Navbar userData={userData} logout={logout} />
      <Outlet userData={userData}></Outlet>
      <Footer />
    </>
  );
}
