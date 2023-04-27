import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Notfound from "./Components/Notfound/Notfound";
import Cart from "./Components/Cart/Cart";
import Success from "./Components/Success/Success";
import ProductList from "./Components/ProductList/ProductList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

function App() {
  let [userData, setuserData] = useState(null);
  function saveUserData() {
    let encodedToken = localStorage.getItem("Token");
    let decodedToken = jwtDecode(encodedToken);
    // console.log(decodedToken);
    setuserData(decodedToken);
  }

  useEffect(() => {
    if (localStorage.getItem("Token") !== null) {
      saveUserData();
    }
  }, []);

  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout userData={userData} setuserData={setuserData} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "productList/:category",
          element: <ProductList />,
        },
        {
          path: "productList",
          element: <ProductList />,
        },
        {
          path: "product/:id",
          element: <ProductDetails />,
        },
        {
          path: "success",
          element: <Success />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "*",
          element: <Notfound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
