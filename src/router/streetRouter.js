import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Foods from "../pages/food/Foods";
import Contact from "../pages/contract/Contact";
import Products from "../components/product/Products";
import Page404 from "../components/page404/Page404";
import ProductDetail from "../components/productDetail/ProductDetail";
import Login from "../components/login/Login";
import Checkout from "../pages/checkout/Checkout";
import Manager from "../pages/manager/Manager";
import Register from "../components/register/Register";
function StreetRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/foods" element={<Foods />}>
          <Route index element={<Products />} />
        </Route>
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/manager" element={<Manager />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}

export default StreetRouter;
