import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Detail from "./pages/Shop-detail";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";
import Login from "./pagesadmin/Login";
import DefaultLayout from "./containers/DefaltLayout";

import Product from "./pagesadmin/Product";
import NotFound from "./pagesadmin/NotFound";
import User from "./pagesadmin/User";

import ProductAdd from "./pagesadmin/ProductAdd";
import ProductEdit from "./pagesadmin/ProductEdit";
import ContactAdmin from "./pagesadmin/ContactAdmin";
import Banner from "./pagesadmin/BannerFooter";
import BannerFooterAdd from "./pagesadmin/BannerFooterAdd";
import BannerFooterEdit from "./pagesadmin/BannerFooterEdit";
import BannerTop from "./pagesadmin/setting/BannerTop";
import BannerTopAdd from "./pagesadmin/setting/BannerTopAdd";
import BannerTopEdit from "./pagesadmin/setting/BannerTopEdit";
// import AboutAdmin from "./pagesadmin/aboutAdmin/aboutAdmin";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/detail/:empid" element={<Detail />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/wishlist" element={<Wishlist />} />

      {/* admin
       */}
      <Route path="/login" element={<Login />} />
      <Route path="/homeadmin" element={<DefaultLayout />} />
      <Route path="/product" element={<Product />} />
      <Route path="/user" element={<User />} />
      <Route path="/product/add" element={<ProductAdd />} />
      <Route path="/product/edit/:empid" element={<ProductEdit />} />
      <Route path="/contactAdmin" element={<ContactAdmin />} />
      <Route path="/banner" element={<Banner />} />
      <Route path="/banner/add" element={<BannerFooterAdd />} />
      <Route path="/bannerTop" element={<BannerTop />} />
      <Route path="/bannerTop/add" element={<BannerTopAdd />} />
      <Route path="/bannerTop/edit/:empid" element={<BannerTopEdit />} />
      {/* <Route path="/aboutAdmin" element={<AboutAdmin />} /> */}




      <Route path="/banner/edit/:empid" element={<BannerFooterEdit />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
