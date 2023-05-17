import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Notfound from "./Components/Notfound/Notfound";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Wishlist/Wishlist";
import Success from "./Components/Success/Success";
import ProductList from "./Components/ProductList/ProductList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProtectedRoute2 from "./Components/ProtectedRoute2/ProtectedRoute2";
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
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "success",
          element: (
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          ),
        },
        {
          path: "login",
          element: (
            <ProtectedRoute2>
              <Login />
            </ProtectedRoute2>
          ),
        },
        {
          path: "register",
          element: (
            <ProtectedRoute2>
              <Register />
            </ProtectedRoute2>
          ),
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
