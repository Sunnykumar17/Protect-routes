import React, { useContext } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { AppContext } from "./components/Context";
import { Route, Routes, Navigate } from "react-router-dom";
import Profile from "./components/Profile";
import Product from "./components/Product";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import Technologies from "./components/Technologies";
import Html from "./components/Html";
import Css from "./components/Css";
import Javascript from "./components/Javascript";
import Reactjs from "./components/React";

const App = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <div>
      {isLoggedIn === true ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/" />} />
            <Route path="/product" element={isLoggedIn ? <Product /> : <Navigate to="/" />} />
            <Route
              path="/contactus"
              element={isLoggedIn ? <Contact /> : <Navigate to="/" />}
            />
            <Route path="/productdetails/:id" element={<ProductDetails />} />

            <Route path="/tech" element={<Technologies />}>
              <Route path="" element={<Navigate to="html" />} />
              <Route path="html" element={<Html />} />
              <Route path="css" element={<Css />} />
              <Route path="javascript" element={<Javascript />} />
              <Route path="react" element={<Reactjs />} />
            </Route>
          </Routes>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
